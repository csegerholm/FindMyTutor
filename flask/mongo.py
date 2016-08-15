#MongoDB functions

from pymongo import MongoClient

#Creates connection to Database
def connectToDB():
	#localhost interface on port 27017
	client = MongoClient()
	#db is name of database
	db = client.db
	return db
	
#Adds user to the db -> form must contain all user info
def addUser(db, form):
	#add one doc to the collection
	result = db.users.insert_one(
		{
			"name": form.name,
			"school": form.school,
			"phone": form.phone,
			"email": form.email,
			"hashedpassword": form.hashedpassword,
			"hash": form.hash,
			"year": form.year,
			"isTutor": form.isTutor,
			"classesToTutor": form.classesToTutor,
			"isTutee": form.isTutee,
			"classesToBeTutored": form.classesToBeTutored,
			"availability": form.availability
		}
	)
	return result
	
#Returns user info for one user with username username
def getUser(db, username):
	result = db.users.find({"username": username})
	return result[0]
	
	
#update user
def updateUser(db, form):
	updateThese = ""
	for field in form:
		if form[field] != None:
			updateThese= updateThese+" "+field+": "+form[field]+",\n"
	if updateThese == "":
		return "Nothing to Update."
	#Take off last comma and \n [] is substring
	updateThese = updateThese[0,len(updateThese)-2]
	result = db.users.update_one({"username":form.username},
	{
		"$set:":{
			updateThese
		}
	})
	return result
	

#deletes this user from db
def deleteUser(db, username):
	result = db.users.delete_one({"username":form.username})
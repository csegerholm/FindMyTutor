module.exports = {
	//List of possible schools user can be enrolled in (None means undeclared)
	schools : ['None','SAS','SOE','SEBS','RBS'],
	//List of RU campuses 
	campuses : ['None', 'Busch', 'Cook-Douglass','College Ave','Livingston','Camden', 'Newark'],

	//userFields: ['name','bio','year','phone','email','password', 'preferredCampus','school','preferredTime'],
	userFieldsToHide: ['isAdmin','hash','hashedpassword','messages','tsessions'],

	//Structure for having no comments 
	nocomments : [false, false, false],
	//Index matches index of comments[]
	listOfComments : ['No Show','Rude','Has Thick Accent'],

	times : ['morning','afternoon', 'evening', 'night'],
	defaultTimes : [false,false,false, false]


}
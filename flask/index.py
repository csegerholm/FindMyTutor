#My files
import mongo
#Other files
import os
from flask import Flask, session, redirect, url_for, escape, request, make_response

#Global variables
app = Flask(__name__)
# set the secret key.  keep this really secret:
app.secret_key = os.urandom(24)
#Connect to db
db = mongo.connectToDB()


@app.route('/')
def index():
    if 'username' in session:
        return 'Logged in as %s' % escape(session['username'])
    return 'You are not logged in'

@app.route('/login', methods=['GET', 'POST'])
def login():
	print("In login")
	#Post means submitted user and password to log in
	if request.method == 'POST':
		session['username'] = request.form['username']
		return redirect(url_for('register'))
    #Other wise give them the log in page
	return '''
		<form action="" method="post">
			<p>USERNAME</p>
            <p><input type=text name=username>
			<p>PASSWORD</p>
			<p><input type=text name=password>
            <p><input type=submit value=Login>
        </form>
    '''
	
@app.route('/register', methods=['GET', 'POST'])
def register():
	#Post means they have submitted form to create a new account
	if request.method == 'POST':
		session['username'] = request.form['username']
		return redirect(url_for('register'))
	#Ow give them the form to create it
	return '''
        <form action="" method="post">
            <p><input type=text name=username>
            <p><input type=submit value=Login>
        </form>
    '''
	

@app.route('/logout')
def logout():
    # remove the username from the session if it's there
    session.pop('username', None)
    return redirect(url_for('index'))
	
	
if __name__ == "__main__":
    app.run()
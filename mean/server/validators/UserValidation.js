var User = require('./../models/user');
var config = require('./../config/data');
//Validation service
var schools = config.schools;
var campuses = config.campuses;

module.exports = {
	
	validateName(newUser, errors, name){
		if(name == undefined || name == ''){
			errors.name = "Must have name.";
			return false;
		}
		var regex = /^[a-zA-Z\s]*$/;  
		if(regex.test(name) && name.length<50){
			newUser.name = name;
			return true;
		}
		else{
		 	errors.name = "Name must consist of letters and spaces. Max of 50 characters.";
			return false;
		}
	},

	validateBio(newUser, errors,bio){
	    if(bio == undefined ||bio.length<=500){
			newUser.bio = bio;
			return true;
		}
	    else{
	    	errors.bio = "Cannot exceed 500 characters";
	      	return false;
	    }
	},

	validateYear(newUser, errors, year){
	    if(year == undefined){
			errors.year = "Must define graduation year.";
			return false;
		}
	    var regex = /^[0-9]{4}$/;  
	    if(regex.test(year)){
	    	newUser.year = year;
	    	return true;
	    }
	    else{
	    	errors.year = "Must define graduation year with four digits.";
	    	return false;
	    }
	},

	validatePhone(newUser, errors, phone){
	    if(phone == undefined){
			errors.phone = "Must define phone number.";
			return false;
		}
	    var regex = /^[0-9]{10}$/;  
	    if(regex.test(phone)){
	     	newUser.phone = phone;
	    	return true;
	    }
	    else{
	    	errors.phone = "Must define a 10 digit phone number.";
	    	return false;
	    }
	},

	validateEmail(newUser, errors, email){
	    if(email == undefined){
			errors.email = "Must define email.";
			return false;
		}
		var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;  
	    if(regex.test(email)){
			if(User.count({'email': email}) ){
				errors.email = "That email is already taken. Please use a different one.";
				return false;
			}
			else{
				newUser.email=email;
				return true;
			}
	    }
	    else{
	     	errors.email = "Email is not valid.";
			return false;
	    }
	},

	validatePassword(newUser, errors, password){
		if(password == undefined){
			errors.password = "Must define password.";
			return false;
		}
		else if(password.length>3 && password.length <50){
		 	//Make password
			newUser.hash = hasher.makeHash();
			newUser.hashedPassword = hasher.makeHashedPassword(password, hash);
		 	return true;
		}
		else{
			errors.password = "Password must be between 4 and 50 characters."
			return false;
		}
	},

	validatePreferredCampus(newUser, errors, campus){
		if(campus == undefined){
			errors.campus = "Must define campus.";
			return false;
		}
		else if(campuses.indexOf(campus)>-1){
			newUser.campus = campus;
			return true;
		}
		else{
			errors.campus = "Please enter valid campus."
			return false;
		}
	},

	validateSchool(newUser, errors, school){
		if(school == undefined){
			errors.school = "Must define school.";
			return false;
		}
		else if(schools.indexOf(school)>-1){
			newUser.school = school;
			return true;
		}
		else{
			errors.school = "Please enter valid school."
			return false;
		}
	},

	validatePreferredTime(newUser, errors, days){
		//TO DO
	}
}
'use strict';

(function(){

class SignUpCtrl {
  constructor($location,$scope, UserService, Auth) {
    this.Auth = Auth;
    this.UserService = UserService;
    this.schools = ['SAS','SOE','SEBS','RBS'];
    this.campuses = ['Busch', 'Cook-Douglass','College Ave','Livingston','Camden', 'Newark'];
    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];
    this.times = ['morning','afternoon', 'evening', 'night'];
    this.location = $location;
    this.form = {
      school : 'None',
      tutor : 'tutor',
      preferredCampus :'None'
    };
    for(var i in this.days){
      this.form[this.days[i]] = {};
      for(var j in this.times){
        this.form[this.days[i]][this.times[j]]=false;
      }
    }
    this.isValid=true;
  }

  $onInit() {
    this.errors = {};
    this.isValid = true;
    this.newUser = {};
    this.form = {
      school : 'None',
      tutor : 'tutor',
      preferredCampus :'None'
    };
    for(var i in this.days){
      this.form[this.days[i]] = {};
      for(var j in this.times){
        this.form[this.days[i]][this.times[j]]=false;
      }
    }
  }


  //Validation functions
  validateName(){
    var name =this.form.name;
    var regex = /^[a-zA-Z\s]*$/;  
    if(regex.test(name) && name.length<50){
      this.newUser.name = name;
    }
    else{
      this.isValid=false;
      this.errors.name = "Name must consist of only letters and spaces. Max of 50 characters."
    }
  }
  validateBio(){
    var bio =this.form.bio; 
    if(bio.length<=500){
      this.newUser.bio=bio;
    }
    else{
      this.isValid=false;
      this.errors.bio = "Max of 500 characters."
    }
  }
  validateYear(){
    var year =this.form.year;
    var regex = /^[0-9]{4}$/;  
    if(regex.test(year)){
      this.newUser.year=year;
    }
    else{
      this.isValid=false;
      this.errors.year = "Year must be four digits."
    }
  }
  validatePhone(){
    var phone =this.form.phone;
    var regex = /^[0-9]{10}$/;  
    if(regex.test(phone)){
      this.newUser.phone=phone;
    }
    else{
      this.isValid=false;
      this.errors.phone = "Please enter just the 10 digit phone number. No spaces or characters."
    }
  }
  validateEmail(){
    var email =this.form.email;
    var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;  
    if(regex.test(email)){
      this.newUser.email=email;
    }
    else{
      this.isValid=false;
      this.errors.email = "Please enter valid email address."
    }
  }
  validatePassword(){
    var password =this.form.password;
    if(password.length>3 && password.length <50){
      this.newUser.password=password;
    }
    else{
      this.isValid=false;
      this.errors.password = "Min of 4 characters. Max of 50 characters."
    }
  }

  submit(){
    var form = this.form;
    console.log("In sign up submit the form is: ", form);
    this.newUser = {};
    this.isValid=true;
    this.errors={};

    //Validate info
    this.validateName();
    this.validateBio();
    this.validateYear();
    this.validateEmail();
    this.validatePhone();
    this.validatePassword();


    //Validate campus and school (drop downs so no check needed)
    this.newUser.preferredCampus =this.form.preferredCampus;
    this.newUser.school=this.form.school; 
 

    this.newUser.preferredTime={};
    //validate times
    for (var i = 0; i <this.days.length; i++) {
      var day = this.days[i];
      for (var j = 0; j <this.times.length; j++) {
        var time = this.times[j];
        var timearr =this.newUser.preferredTime[day.toLowerCase()] =[];
        timearr[j] = form[day][time];
      }
    }

    //validate is tutor or tutee
    if(this.form.tutor == 'both'){
      this.newUser.isTutor = true;
      this.newUser.isTutee = true;
    }
    else if(this.form.tutor == 'tutor'){
      this.newUser.isTutor = true;
      this.newUser.isTutee = false;
    }
    else{
      this.newUser.isTutor = false;
      this.newUser.isTutee = true;
    }

    this.newUser.role = 'user';

    //
    if(this.isValid){
      this.UserService.create(this.newUser).then(resp => {
        if(resp.body.errorFields!=undefined){
          //print out errors
          console.log("Errors");
        }
        else{
          this.Auth.login(this.newUser.email, this.newUser.password);
          // Logged in, redirect to home
          this.location.path('/');
        }
      });
    }
  }

}

angular.module('fmtApp').controller('SignUpController', SignUpCtrl);

})();
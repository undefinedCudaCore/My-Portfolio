"use strict";

function formValidator() {
    let name = document.forms["contactMe"]["name"].value;
    let mail = document.forms["contactMe"]["mail"].value;
    let textArea = document.forms["contactMe"]["comment"].value;
    let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let hasNumber = /\d/;

    //Name character editing
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    document.forms["contactMe"]["name"].value = name;

    // Name input validation
    if (hasNumber.test(name) == true ) {
      alert("Name cannot have numbers");
      return false;
    }
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }

    // Email input validation
    if (mail == "") {
        alert("Email must be filled out");
        return false;
    }
    if(mail.match(mailFormat)) {
        document.forms["contactMe"]["mail"].value = mail;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
    
    //Message input validation
    if (textArea == "") {
        alert("Text area must be filled out");
        return false;
    }
    if (textArea.length < 10) {
        alert("Text area must be longer than 10 letters");
        return false;
    }
}
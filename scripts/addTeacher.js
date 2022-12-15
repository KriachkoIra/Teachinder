import { teachers } from "./prepareData.js";

window.addTeacher = addTeacher;

function _calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function addTeacher(){
    let name = document.getElementById("fname").value;
    let spec = document.getElementById("tspeciality").value;
    let country = document.getElementById("tcountry").value;
    let city = document.getElementById("city").value;
    let mail = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let bday = document.getElementById("birthday").value;
    let gender = document.querySelector('input[name="sex"]:checked').value;
    let bgcolor = document.getElementById("bcolor").value;
    let note = document.getElementById("comment").value;
    
    let check = teachers.find(pers => pers.full_name == name); // check if person exists
    if(check){
        alert("Person already exists. " + name);
        return;
    }
    
    let person = {};
    
    if(!note || note == "")
        person.note = "No notes yet."; // note
    else person.note = note;
        
    person.gender = gender;
    person.full_name = name;
    person.city = city;
    person.country = country;
    person.email = mail;
    person.b_date = bday;
    person.age = _calculateAge(new Date(bday));
    person.phone = phone;
    person.course = spec;
    person.bg_color = bgcolor;
    person.picture_large = null;
    person.favorite = false;
    
    teachers.unshift(person);
    renewStats(teachers);
    displayTeachers(teachers);
    
    closeForm();
}
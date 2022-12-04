import { randomUserMock } from "./FE4U-Lab3-mock.js";
import { additionalUsers } from "./FE4U-Lab3-mock.js";

let txt = "";

// first
var teachers = firstTask(); 

// second
secondTask(); 
teachers.forEach(func1);
document.getElementById("task1").innerHTML = txt;

// third
txt = "";
let res = thirdTask("Norway", null, null, null); // third.1
res.forEach(func31);
document.getElementById("task3_1").innerHTML = txt;

txt = "";
res = thirdTask("Germany", null, "female", null); // third.2
res.forEach(func32);
document.getElementById("task3_2").innerHTML = txt;

txt = "";
res = thirdTask("United States", 64, "male", null); // third.3
res.forEach(func33);
document.getElementById("task3_3").innerHTML = txt;

// fourth
txt = "";
res = fourthTask("age", false);
res.forEach(func4);
document.getElementById("task4_1").innerHTML = txt;

txt = "";
res = fourthTask("full_name", true);
res.forEach(func4);
document.getElementById("task4_2").innerHTML = txt;

// fifth
res = fifthTask("age", 44);
document.getElementById("task5_1").innerHTML = JSON.stringify(res);

res = fifthTask("name", "Joe Mitchell");
document.getElementById("task5_2").innerHTML = JSON.stringify(res);

res = fifthTask("note", "old lady with a cats");
document.getElementById("task5_3").innerHTML = JSON.stringify(res);

//sixth
res = sixthTask("age", 52);
res = parseInt(res*10000, 10)/100; // convert to format xx.xx%
document.getElementById("task6_1").innerHTML = res + "%";

res = sixthTask("name", 'N');
res = parseInt(res*10000, 10)/100;
document.getElementById("task6_2").innerHTML = res + "%";

function func1(myObj) {
  txt += myObj.id + ". " + myObj.full_name + "<br>";
}

function func31(myObj) {
  txt += myObj.id + ", " + myObj.full_name  + ", " + myObj.country + "<br>";
}

function func32(myObj) {
  txt += myObj.id + ", " + myObj.full_name  + ", " + myObj.country + ", " + myObj.gender + "<br>";
}

function func33(myObj) {
  txt += myObj.id + ", " + myObj.full_name  + ", " + myObj.country + ", " + myObj.gender + ", " + myObj.age + "<br>";
}

function func4(myObj) {
  txt += myObj.full_name + ", " + myObj.age + ", " + myObj.country + ", " + myObj.b_date + "<br>";
}

// first task. restructing
function firstTask() {
    let people = [];
    let courses = ["Mathematics", "Physics", "English", "Computer Science", "Dancing", "Chess", "Biology", "Chemistry", "Law", "Art", "Medicine", "Statistics"];
    
    for (let i = 0; i < randomUserMock.length; i++) {
        let person = {};
        person.id = i+1; // id
        person.favorite = Math.random() < 0.5; // add favorite - random boolean
        person.course = courses[Math.floor(Math.random() * 12)]; // random course from the array
        person.bgcolor = "#" + Math.floor(Math.random()*16777215).toString(16); // random bgcolor
        person.note = "No notes yet."; // note
        person.gender = randomUserMock[i].gender;
        person.title = randomUserMock[i].name.title;
        person.full_name = randomUserMock[i].name.first + " " + randomUserMock[i].name.last;
        person.city = randomUserMock[i].location.city;
        person.state = randomUserMock[i].location.state;
        person.country = randomUserMock[i].location.country;
        person.postcode = randomUserMock[i].location.postcode;
        person.coordinates = randomUserMock[i].location.coordinates;
        person.timezone = randomUserMock[i].location.timezone;
        person.email = randomUserMock[i].email;
        person.b_date = randomUserMock[i].dob.date;
        person.age = randomUserMock[i].dob.age;
        person.phone = randomUserMock[i].phone;
        person.picture_large = randomUserMock[i].picture.large;
        person.picture_thumbnail = randomUserMock[i].picture.thumbnail;
        
        people.push(person); // add a created person to the array
    }
    
    // add additional users
    for (let i = 0; i < additionalUsers.length; i++) {
        let check = people.find(pers => pers.full_name == additionalUsers[i].full_name); // check if person exists
        if(typeof check != 'undefined'){
            console.log("Person already exists. " + additionalUsers[i].full_name);
            continue;
        } 
        
        let person = {};
        person.id = people.length; // id
        if(additionalUsers[i].favorite == null)
            person.favorite = Math.random() < 0.5; // add favorite - random boolean
        else person.favorite = additionalUsers[i].favorite;
        
        if(additionalUsers[i].course == null)
            person.course = courses[Math.floor(Math.random() * 12)]; // random course from the array
        else person.course = additionalUsers[i].course;
        
        if(additionalUsers[i].bgcolor == null)
        person.bgcolor = "#" + Math.floor(Math.random()*16777215).toString(16); // random bgcolor
        else person.bgcolor = additionalUsers[i].bgcolor;
        
        if(additionalUsers[i].course == null)
        person.note = "No notes yet."; // note
        else person.note = additionalUsers[i].note;
        
        person.gender = additionalUsers[i].gender;
        person.title = additionalUsers[i].title;
        person.full_name = additionalUsers[i].full_name;
        person.city = additionalUsers[i].city;
        person.state = additionalUsers[i].state;
        person.country = additionalUsers[i].country;
        person.postcode = additionalUsers[i].postcode;
        person.coordinates = additionalUsers[i].coordinates;
        person.timezone = additionalUsers[i].timezone;
        person.email = additionalUsers[i].email;
        person.b_date = additionalUsers[i].b_date;
        person.age = additionalUsers[i].age;
        person.phone = additionalUsers[i].phone;
        person.picture_large = additionalUsers[i].picture_large;
        person.picture_thumbnail = additionalUsers[i].picture_thumbnail;
        
        const keys = Object.keys(person);
        for (let i = 0; i < keys.length; i++) {
          if(typeof person[keys[i]] == 'undefined')
              person[keys[i]] = null;
        }
        
        people.push(person);
    }
    
    return people;
}

function checkPerson(person, name) {
  return person.full_name == name;
}

// second task. validation
function secondTask() {
    for (let i = 0; i < teachers.length; i++) {
        let t = teachers[i];
        
        // name
        if(typeof t.full_name != "string" || t.full_name[0] != t.full_name[0].toUpperCase())
            console.log("Not a string or the first character is not uppercase. Problems with full name " + t.full_name);
        
        // gender
        if(typeof t.gender != "string" || t.gender[0] != t.gender[0].toUpperCase())
            console.log("Not a string or the first character is not uppercase. Problems with gender " + t.gender);
        
        // note
        if(typeof t.note != "string" || t.note[0] != t.note[0].toUpperCase())
            console.log("Not a string or the first character is not uppercase. Problems with note " + t.note);
        
        // state
        if(typeof t.state != "string" || t.state[0] != t.state[0].toUpperCase())
            console.log("Not a string or the first character is not uppercase. Problems with state " + t.state);
        
        // city
        if(typeof t.city != "string" || t.city[0] != t.city[0].toUpperCase())
            console.log("Not a string or the first character is not uppercase. Problems with city " + t.city);
        
        // country
        if(typeof t.country != "string" || t.country[0] != t.country[0].toUpperCase())
            console.log("Not a string or the first character is not uppercase. Problems with country " + t.country);
        
        // age
        if(typeof t.age != "number")
            console.log("Not a number. Problems with age " + t.age);
        
        // phone format xxxx-xxxxxxx
        if(t.phone == null || t.phone.match(/^\(?([0-9]{4})\)?[-]?([0-9]{7})$/) == false)
            console.log("Problems with phone " + t.phone);
        
        // email
        if(t.email == null || t.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == false)
            console.log("Problems with email " + t.email);
    }
}

// third task. filtration
// if the parameter is null, filtrate according to other parameters
function thirdTask(country, age, gender, favorite){
    let res = [];
    
    for (let i = 0; i < teachers.length; i++) {
        let t = teachers[i];
        
        if((country == null || t.country == country) && 
           (age == null || t.age == age) && 
           (gender == null || t.gender == gender) && 
           (favorite == null || t.favorite == favorite))
            res.push(t);
    }
    
    return res;
}

// fourth task. sort
function fourthTask(parameter, descending){
    let teachersCopy = [...teachers];
    
    if(parameter == "full_name")
        teachersCopy.sort(function(a, b){return a.full_name.localeCompare(b.full_name)});
    else if(parameter == "country")
        teachersCopy.sort(function(a, b){return a.country.localeCompare(b.country)});
    else if(parameter == "age")
        teachersCopy.sort(function(a, b){return a.age - b.age});
    else if(parameter == "b_date")
        teachersCopy.sort(function(a, b){
            if(a.b_date == null) return 1;
            if(b.b_date == null) return -1;
            return a.b_date.localeCompare(b.b_date)
        });
    
    if(descending == true) // reverse if the order should be descending
        teachersCopy.reverse();
    
    return teachersCopy;
}

// fifth task. search. returns the first found object which matches the parameter
function fifthTask(paramType, param){
    let elem;
    if(paramType == "name")
        elem = teachers.find(elem => elem.full_name == param)
    else if(paramType == "note")
        elem = teachers.find(elem => elem.note == param)
    else if(paramType == "age")
        elem = teachers.find(elem => elem.age == param)
    
    return elem;
}

// sixth task. percent of teachers who match the search parameters
// search age >= N
// search first letter of full name is 'X'
function sixthTask(paramType, param){
    let elements;
    if(paramType == "name")
        elements = teachers.filter(elem => elem.full_name[0] == param)
    else if(paramType == "age")
        elements = teachers.filter(elem => elem.age >= param)
    
    return elements.length / teachers.length;
}




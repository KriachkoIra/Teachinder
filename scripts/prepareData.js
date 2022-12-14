import { randomUserMock } from "./FE4U-Lab3-mock.js";
import { additionalUsers } from "./FE4U-Lab3-mock.js";

var txt = "";

export const teachers = loadTeachers();
//teachers.forEach(func1);
//document.getElementById("test").innerHTML = txt;

function func1(myObj) {
  txt += myObj.id + ". " + myObj.full_name + "<br>";
}

function loadTeachers() {
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
        if(!check){
            console.log("Person already exists. " + additionalUsers[i].full_name);
            continue;
        } 
        
        let person = {};
        person.id = people.length; // id
        if(!additionalUsers[i].favorite)
            person.favorite = Math.random() < 0.5; // add favorite - random boolean
        else person.favorite = additionalUsers[i].favorite;
        
        if(!additionalUsers[i].course)
            person.course = courses[Math.floor(Math.random() * 12)]; // random course from the array
        else person.course = additionalUsers[i].course;
        
        if(!additionalUsers[i].bgcolor)
        person.bgcolor = "#" + Math.floor(Math.random()*16777215).toString(16); // random bgcolor
        else person.bgcolor = additionalUsers[i].bgcolor;
        
        if(!additionalUsers[i].note)
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
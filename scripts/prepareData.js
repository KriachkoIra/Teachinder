//import { randomUserMock } from "./FE4U-Lab3-mock.js";
import { additionalUsers } from "./FE4U-Lab3-mock.js";

var txt = "";
var xhttp = new XMLHttpRequest();
var randomUserMock = {};

export const teachers = loadTeachers();
//teachers.forEach(func1);
//document.getElementById("test").innerHTML = txt;

function httpGet(n){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "https://randomuser.me/api/?results=" + n, true);
        
        xhr.onload = function(){
            if(this.status == 200){
                resolve(this.response);
            } else{
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        
        xhr.onerror = function(){
            reject(new Error("Network Error"));
        };
        
        xhr.send();
    });
}

function getTeachers(n) {
  xhttp.open("GET", "https://randomuser.me/api/?results="+n, false);
    xhttp.send();
    var text = xhttp.responseText;
    randomUserMock = JSON.parse(xhttp.response).results;
}

function loadTeachers() {
    getTeachers(50);
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
    
    return people;
}
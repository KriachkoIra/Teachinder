import { teachers } from "./prepareData.js";

var element = document.getElementById("teachers-div");
var curSpan;
var curShowed = 1;
var isFilter = false;

window.showMore = showMore;
window.displayTeachers = displayTeachers;
displayTeachers(teachers);

function displayTeachers(t){
    document.getElementById("showMore").style.display = "block";
    
    if(t.length != teachers.length) isFilter = true;
    else isFilter = false;
    
    var child = element.lastElementChild; 
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
    
    for (let i = 0; i < t.length; i++) {
        curShowed = 1;
        if(i%10 == 0){
            curSpan = document.createElement("span");
            curSpan.className = "teachers-div";
        } 

        let tdiv = document.createElement("div");
        tdiv.className = "teacher";
        tdiv.id = i;
        tdiv.setAttribute('onClick', "openInfo(this.id)");

        // photo
        let photodiv = document.createElement("div");
        if(!t[i].picture_large){
            photodiv.className = "teacher-img  no-photo";
            let tphoto = document.createElement("p");
            let words = t[i].full_name.split(" ");
            if(words.length > 1)
                tphoto.innerHTML = words[0][0] + "." + words[1][0] + ".";
            else
                tphoto.innerHTML = words[0][0] + ".";
            photodiv.appendChild(tphoto);
        } else{
            photodiv.className = "teacher-img";
            let timg = document.createElement('img');
            timg.src = t[i].picture_large;
            photodiv.appendChild(timg);
        }
        tdiv.appendChild(photodiv);


        let innerdiv = document.createElement("div");
        innerdiv.style = "margin-left: -30px";

        // name, subject and country
        let tname = document.createElement("p");
        tname.innerHTML = t[i].full_name;
        tname.className = "teacher-name";    
        innerdiv.appendChild(tname);
        let tsubject = document.createElement("p");
        tsubject.innerHTML = t[i].course;
        tsubject.className = "teacher-subject";
        innerdiv.appendChild(tsubject);
        let tcountry = document.createElement("p");
        tcountry.innerHTML = t[i].country;
        tcountry.className = "teacher-country";
        innerdiv.appendChild(tcountry);

        tdiv.appendChild(innerdiv);
        curSpan.appendChild(tdiv);
        if(i % 10 == 9 || i == t.length - 1){
            if(curShowed < i/10) curSpan.style.display = "none";
            element.appendChild(curSpan);
        }
    }
    
    let spans = element.querySelectorAll("span");
}

// add options to countries select
let select = document.getElementById('teacher-country');
let countries = [];

for (let i = 0; i < teachers.length; i++) {
    if(!countries.includes(teachers[i].country))
        countries.push(teachers[i].country);
}

for (let i = 0; i < countries.length; i++) {
    var opt = document.createElement('option');
    opt.value = countries[i];
    opt.innerHTML = countries[i];
    select.appendChild(opt);
}

// display statistics
var elem = document.getElementById("paginated-list");

for (let i = 0; i < teachers.length; i++) {
    let row = document.createElement("tr");
    let node1 = document.createElement("td");
    node1.innerHTML = teachers[i].full_name;
    row.appendChild(node1);
    let node2 = document.createElement("td");
    node2.innerHTML = teachers[i].course;
    row.appendChild(node2);
    let node3 = document.createElement("td");
    node3.innerHTML = teachers[i].age;
    row.appendChild(node3);
    let node4 = document.createElement("td");
    node4.innerHTML = teachers[i].gender;
    row.appendChild(node4);
    let node5 = document.createElement("td");
    node5.innerHTML = teachers[i].country;
    row.appendChild(node5);
    elem.appendChild(row);
}

displayTable(teachers.length);

function showMore(){
    let spans = element.querySelectorAll("span");
    if(curShowed > 4){
        loadTeachers(10);
        displayTeachers(teachers);
        renewStats(teachers);
    }
    spans = element.querySelectorAll("span");
    if(curShowed == spans.length-1 && isFilter) document.getElementById("showMore").style.display = "none";
    spans[curShowed].style.display = "flex";
    curShowed++;
}
import { teachers } from "./prepareData.js";

let element = document.getElementById("teachers-div");

for (let i = 0; i < teachers.length; i++) {
    let tdiv = document.createElement("div");
    tdiv.className = "teacher";
    tdiv.id = i;
    tdiv.setAttribute('onClick', "openInfo(this.id)");
    
    // photo
    let photodiv = document.createElement("div");
    if(!teachers[i].picture_large){
        photodiv.className = "teacher-img  no-photo";
        let tphoto = document.createElement("p");
        let words = teachers[i].full_name.split(" ");
        tphoto.innerHTML = words[0][0] + "." + words[1][0] + ".";
        photodiv.appendChild(tphoto);
    } else{
        photodiv.className = "teacher-img";
        let timg = document.createElement('img');
        timg.src = teachers[i].picture_large;
        photodiv.appendChild(timg);
    }
    tdiv.appendChild(photodiv);


    let innerdiv = document.createElement("div");
    innerdiv.style = "margin-left: -30px";

    // name, subject and country
    let tname = document.createElement("p");
    tname.innerHTML = teachers[i].full_name;
    tname.className = "teacher-name";    
    innerdiv.appendChild(tname);
    let tsubject = document.createElement("p");
    tsubject.innerHTML = teachers[i].course;
    tsubject.className = "teacher-subject";
    innerdiv.appendChild(tsubject);
    let tcountry = document.createElement("p");
    tcountry.innerHTML = teachers[i].country;
    tcountry.className = "teacher-country";
    innerdiv.appendChild(tcountry);

    tdiv.appendChild(innerdiv);
    element.appendChild(tdiv);

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
element = document.getElementById("paginated-list");

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
    element.appendChild(row);
}

displayTable(teachers.length);
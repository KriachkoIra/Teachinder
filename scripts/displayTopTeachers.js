import { teachers } from "./prepareData.js";

let element = document.getElementById("teachers-div");

for (let i = 0; i < teachers.length; i++) {
    let tdiv = document.createElement("div");
    tdiv.className = "teacher";
    tdiv.id = i;
    tdiv.setAttribute('onClick', "openInfo(this.id)");
    
    // photo
    let photodiv = document.createElement("div");
    if(teachers[i].picture_large == null){
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
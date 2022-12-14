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
    let gender = document.getElementById("sex").value;
    let bgcolor = document.getElementById("bcolor").value;
    let note = document.getElementById("comment").value;
    
    let check = teachers.find(pers => pers.full_name == name); // check if person exists
    if(!check){
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
    
    teachers.push(person);
    
    let element = document.getElementById("teachers-div");

    let tdiv = document.createElement("div");
    tdiv.className = "teacher";
    tdiv.id = teachers.length - 1;
    tdiv.setAttribute('onClick', "openInfo(this.id)");
    
    // photo
    let photodiv = document.createElement("div");
    if(!person.picture_large){
        photodiv.className = "teacher-img  no-photo";
        let tphoto = document.createElement("p");
        let words = person.full_name.split(" ");
        if(words.length > 1)
            tphoto.innerHTML = words[0][0] + "." + words[1][0] + ".";
        else
            tphoto.innerHTML = words[0][0] + ".";
        photodiv.appendChild(tphoto);
    } else{
        photodiv.className = "teacher-img";
        let timg = document.createElement('img');
        timg.src = person.picture_large;
        photodiv.appendChild(timg);
    }
    tdiv.appendChild(photodiv);


    let innerdiv = document.createElement("div");
    innerdiv.style = "margin-left: -30px";

    // name, subject and country
    let tname = document.createElement("p");
    tname.innerHTML = person.full_name;
    tname.className = "teacher-name";    
    innerdiv.appendChild(tname);
    let tsubject = document.createElement("p");
    tsubject.innerHTML = person.course;
    tsubject.className = "teacher-subject";
    innerdiv.appendChild(tsubject);
    let tcountry = document.createElement("p");
    tcountry.innerHTML = person.country;
    tcountry.className = "teacher-country";
    innerdiv.appendChild(tcountry);

    tdiv.appendChild(innerdiv);
    element.appendChild(tdiv);
    
    
    
    // display statistics
    element = document.getElementById("paginated-list");

    let row = document.createElement("tr");
    let node1 = document.createElement("td");
    node1.innerHTML = person.full_name;
    row.appendChild(node1);
    let node2 = document.createElement("td");
    node2.innerHTML = person.course;
    row.appendChild(node2);
    let node3 = document.createElement("td");
    node3.innerHTML = person.age;
    row.appendChild(node3);
    let node4 = document.createElement("td");
    node4.innerHTML = person.gender;
    row.appendChild(node4);
    let node5 = document.createElement("td");
    node5.innerHTML = person.country;
    row.appendChild(node5);
    element.appendChild(row);

    setCurrentPage(1);
    
    closeForm();
}
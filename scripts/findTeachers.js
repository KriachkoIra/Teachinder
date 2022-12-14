import { teachers } from "./prepareData.js";

window.findTeachers = findTeachers;

function findTeachers(){
    var data = document.getElementById("searchData").value;
    
    let element = document.getElementById("search-teachers");
    
    var child = element.lastElementChild; 
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
    
    if(!data || data == ""){ 
        document.getElementById("search-teachers-outer").style.display = "none";
        return;
    }
    
    for (let i = 0; i < teachers.length; i++) {
        let words = teachers[i].full_name.split(" ");
        if(teachers[i].full_name != data && teachers[i].age != data && teachers[i].note != data &&
          words[0] != data && words[1] != data) continue;
                
        let tdiv = document.createElement("div");
        tdiv.className = "teacher-search";
        tdiv.id = i;
        tdiv.setAttribute('onClick', "openInfo(this.id)");

        // photo
        let photodiv = document.createElement("div");
        if(!teachers[i].picture_large){
            photodiv.className = "teacher-img  no-photo";
            let tphoto = document.createElement("p");
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
    
    if(!element.lastElementChild){
        let p = document.createElement("p");
        p.innerHTML = "No results.";
        element.appendChild(p);
    }
    
    document.getElementById("search-teachers-outer").style.display = "block";
}
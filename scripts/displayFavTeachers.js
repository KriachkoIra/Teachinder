import { teachers } from "./prepareData.js";

let element = document.getElementById("slideshow-container");
var cnt = 0;
var fourdiv;
var twodiv;

for (let i = 0; i < teachers.length + 1; i++) {
    if(i == teachers.length){
        if(cnt != 0){
            if(cnt != 2) fourdiv.appendChild(twodiv);
            element.appendChild(fourdiv);
        } break;
    }
    if(!teachers[i].favorite) continue;
    
    let tdiv = document.createElement("div"); 
    tdiv.className = "teacher-slide";
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

    // name and country
    let tname = document.createElement("p");
    tname.innerHTML = teachers[i].full_name;
    tname.className = "teacher-name";    
    tdiv.appendChild(tname);
    let tcountry = document.createElement("p");
    tcountry.innerHTML = teachers[i].country;
    tcountry.className = "teacher-country";
    tdiv.appendChild(tcountry);
    
    if(cnt == 0){
        fourdiv = document.createElement("div");
        fourdiv.className = "mySlides fade";
        
        twodiv = document.createElement("div");
        twodiv.className = "inner-div";
        
        twodiv.appendChild(tdiv);
    } else if(cnt == 1){
        twodiv.appendChild(tdiv);
        fourdiv.appendChild(twodiv);
    } else if(cnt == 2){
        twodiv = document.createElement("div");
        twodiv.className = "inner-div";
        
        twodiv.appendChild(tdiv);
    } else{
        twodiv.appendChild(tdiv);
        fourdiv.appendChild(twodiv);
        element.appendChild(fourdiv);
    }
    
    cnt++;
    if(cnt == 4) cnt = 0;
}

let prev = document.createElement("a");
prev.className = "prev";
prev.setAttribute('onClick', "plusSlides(-1)");
prev.innerHTML = "&#10094;";

let next = document.createElement("a");
next.className = "next";
next.setAttribute('onClick', "plusSlides(1)");
next.innerHTML = "&#10095;";

element.appendChild(prev);
element.appendChild(next);
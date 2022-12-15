import { teachers } from "./prepareData.js";

window.findTeachers = findTeachers;
window.stopFindTeachers = stopFindTeachers;

function findTeachers(){
    document.getElementById("showMore").style.display = "block";
    let data = document.getElementById("searchData").value;
    let p = document.getElementById("no-results");
    p.style.display = "none";
    
    let tlist = document.getElementsByClassName("teacher");
    for(let i = 0; i < tlist.length; i++)
        tlist[i].style.display = "block";
    
    document.getElementById("stopSearch").style.display = "none";
    
    if(!data || data == ""){ 
        displayTeachers(teachers);
        renewStats(teachers);
        return;
    }
    
    let tage = document.getElementById("teacher-age");
    let age1 = parseInt(tage.value[0] + tage.value[1]), age2 = parseInt(tage.value[3] + tage.value[4]);
    let tcountry = document.getElementById("teacher-country");
    let tgender = document.getElementById("teacher-gender");
    let tphoto = document.getElementById("teacher-photo");
    let tfav = document.getElementById("teacher-fav");
    
    let newTeachers = [];
    
    for(let i = 0; i < teachers.length; i++){
        let words = teachers[i].full_name.split(" ");
        if(teachers[i].full_name != data && teachers[i].age != data && teachers[i].note != data &&
          words[0] != data && words[1] != data)
            continue;
        else newTeachers.push(teachers[i]);
    }
    
    renewStats(newTeachers);
    displayTeachers(newTeachers);
    
    if(newTeachers.length == 0)
        p.style.display = "block";
    
    document.getElementById("stopSearch").style.display = "block";
    document.getElementById("showMore").style.display = "none";
}

function stopFindTeachers(){
    document.getElementById("searchData").value = null;
    document.getElementById("stopSearch").style.display = "none";
    document.getElementById("showMore").style.display = "block";
    
    displayTeachers(teachers);
    renewStats(teachers);
}
import { teachers } from "./prepareData.js";

window.filterTeachers = filterTeachers;

function filterTeachers() {
    let tlist = document.getElementsByClassName("teacher");
    displayTeachers(teachers);
    document.getElementById("showMore").style.display = "block";
    
    let tage = document.getElementById("teacher-age");
    let age1 = parseInt(tage.value[0] + tage.value[1]), age2 = parseInt(tage.value[3] + tage.value[4]);
    let tcountry = document.getElementById("teacher-country");
    let tgender = document.getElementById("teacher-gender");
    let tphoto = document.getElementById("teacher-photo");
    let tfav = document.getElementById("teacher-fav");
    
    let newTeachers = [], cnt = 0;
    let spans = document.querySelectorAll("span");
    for(let i = 0; i < spans.length; i++){
        if(spans[i].style.display != "none")
            cnt++;
    }
    
    let isFilter = false;
    
    for(let i = 0; i < tlist.length; i++){
        let tid = parseInt(tlist[i].id);
        if(teachers[tid].age < age1 || teachers[tid].age >= age2 ||
           (tcountry.value != "all" && teachers[tid].country != tcountry.value) ||
           (tgender.value != "all" && teachers[tid].gender != tgender.value) ||
           (tphoto.checked && teachers[tid].picture_large == null) ||
           (tfav.checked && teachers[tid].favorite == false))
            isFilter = true;
        else 
            newTeachers.push(teachers[i]);
    }
    
    displayTeachers(newTeachers);
    renewStats(newTeachers);
}
import { teachers } from "./prepareData.js";

window.findTeachers = findTeachers;
window.stopFindTeachers = stopFindTeachers;

function findTeachers(){
    let data = document.getElementById("searchData").value;
    let p = document.getElementById("no-results");
    p.style.display = "none";
    
    let tlist = document.getElementsByClassName("teacher");
    for(let i = 0; i < tlist.length; i++)
        tlist[i].style.display = "block";
    
    document.getElementById("stopSearch").style.display = "none";
    
    if(!data || data == ""){ 
        document.getElementById("search-teachers-outer").style.display = "none";
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
    
    for(let i = 0; i < tlist.length; i++){
        let tid = parseInt(tlist[i].id);
        let words = teachers[tid].full_name.split(" ");
        if(teachers[tid].full_name != data && teachers[tid].age != data && teachers[tid].note != data &&
          words[0] != data && words[1] != data)
            tlist[tid].style.display = "none";
        else newTeachers.push(teachers[tid]);
    }
    
    renewStats(newTeachers);
    
    if(newTeachers.length == 0)
        p.style.display = "block";
    
    document.getElementById("stopSearch").style.display = "block";
}

function stopFindTeachers(){
    document.getElementById("searchData").value = null;
    document.getElementById("stopSearch").style.display = "none";
    
    let tlist = document.getElementsByClassName("teacher");
    for(let i = 0; i < tlist.length; i++)
        tlist[i].style.display = "block";
    
    renewStats(teachers);
}
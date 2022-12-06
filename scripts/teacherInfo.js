import { teachers } from "./prepareData.js";

window.openInfo = openInfo;
window.closeInfo = closeInfo;
window.addToFav = addToFav;

function openInfo(n) {
    if(teachers[n].picture_large != null) document.getElementById("popupPhoto").src = teachers[n].picture_large;
    else if(teachers[n].picture_large == null && teachers[n].gender == "female"){ 
        document.getElementById("popupPhoto").src = "img/femaleTeacher.png";
        document.getElementById("popupPhoto").style.height = "170px";
        document.getElementById("popupPhoto").style.width = "170px";
    }
    else {
        document.getElementById("popupPhoto").src = "img/maleTeacher.png";
        document.getElementById("popupPhoto").style.height = "170px";
        document.getElementById("popupPhoto").style.width = "170px";
    }
    document.getElementById("popupName").innerHTML = teachers[n].full_name;
    
    if(teachers[n].favorite == true) document.getElementById("popupFav").innerHTML = "&#09 &#9733;";
    else document.getElementById("popupFav").innerHTML = "&#09 &#9734;";
    document.getElementById("popupFav").className = n;
    
    document.getElementById("popupSubj").innerHTML = teachers[n].course;
    document.getElementById("popupCountry").innerHTML = teachers[n].country;
    document.getElementById("popupAgeGender").innerHTML = teachers[n].age + ", " + teachers[n].gender;
    document.getElementById("popupMail").innerHTML = teachers[n].email;
    document.getElementById("popupPhone").innerHTML = teachers[n].phone;
    document.getElementById("popupNote").innerHTML = teachers[n].note;
    document.getElementById("info").style.display = "block";
    document.getElementById("bg").style.display = "block";
}

function addToFav(n){
    teachers[n].favorite = !teachers[n].favorite;
    if(teachers[n].favorite == true) document.getElementById("popupFav").innerHTML = "&#09 &#9733;";
    else document.getElementById("popupFav").innerHTML = "&#09 &#9734;";
}

function closeInfo() {
    document.getElementById("info").style.display = "none";
    document.getElementById("bg").style.display = "none";
}
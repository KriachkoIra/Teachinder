import { teachers } from "./prepareData.js";

window.openInfo = openInfo;
window.closeInfo = closeInfo;
window.addToFav = addToFav;

function openInfo(n) {
    if(teachers[n].picture_large) document.getElementById("popupPhoto").src = teachers[n].picture_large;
    else if(!teachers[n].picture_large && teachers[n].gender == "female"){ 
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
    
    // calculate days until next birthday
    let now = dayjs();
    let dateB = dayjs(teachers[n].b_date);
    dateB = dateB.add(now.year() - dateB.year() + 1, 'year');
    let df = dateB.diff(now, "day");
    document.getElementById("popupBDay").innerHTML = "Days until next birthday: " + df;
    
    // setting the map
    var map = L.map('map').setView([teachers[n].coordinates.latitude, teachers[n].coordinates.longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([teachers[n].coordinates.latitude, teachers[n].coordinates.longitude]).addTo(map);
}

function addToFav(n){
    teachers[n].favorite = !teachers[n].favorite;
    if(teachers[n].favorite) document.getElementById("popupFav").innerHTML = "&#09 &#9733;";
    else document.getElementById("popupFav").innerHTML = "&#09 &#9734;";
}

function closeInfo() {
    document.getElementById("info").style.display = "none";
    document.getElementById("bg").style.display = "none";
    map.remove();
    
    let newmap = document.createElement("div");
    newmap.id = "map";
    document.getElementById("inner-info").appendChild(newmap);
}
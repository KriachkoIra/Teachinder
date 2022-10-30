function openMap() {
    if(document.getElementById("teacherMap").style.display === 'none'){
        document.getElementById("teacherMap").style.display = "block";
        document.getElementById("info").style.height = "700px";
    } else{
        document.getElementById("teacherMap").style.display = "none";
        document.getElementById("info").style.height = "470px";
    }
}
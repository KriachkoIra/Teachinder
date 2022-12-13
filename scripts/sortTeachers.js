import { teachers } from "./prepareData.js";

window.sortTeachers = sortTeachers;

var nameSorted = false, nationSorted = false, ageSorted = false, specSorted = false;


function sortTeachers(parameter){
    let teachersCopy = [...teachers];
    
    if(parameter == "statName")
        teachersCopy.sort(function(a, b){return a.full_name.localeCompare(b.full_name)});
    else if(parameter == "statNationality")
        teachersCopy.sort(function(a, b){return a.country.localeCompare(b.country)});
    else if(parameter == "statAge")
        teachersCopy.sort(function(a, b){
            if(a.age == null) return 1;
            if(b.age == null) return -1;
            return a.age - b.age});
    else if(parameter == "statSpeciality") 
        teachersCopy.sort(function(a, b){return a.course.localeCompare(b.course)});
    
    if((parameter == "statName" && nameSorted) ||
      (parameter == "statNationality" && nationSorted) ||
      (parameter == "statAge" && ageSorted) ||
      (parameter == "statSpeciality") && specSorted) // reverse if the order should be descending
       teachersCopy.reverse();
    
    if(parameter == "statName") nameSorted = !nameSorted;
    else if(parameter == "statNationality") nationSorted = !nationSorted;
    else if(parameter == "statAge") ageSorted = !ageSorted;
    else if(parameter == "statSpeciality") specSorted = !specSorted;
    
    let element = document.getElementById("paginated-list");
    var child = element.lastElementChild; 
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }

    for (let i = 0; i < teachersCopy.length; i++) {
        let row = document.createElement("tr");
        let node1 = document.createElement("td");
        node1.innerHTML = teachersCopy[i].full_name;
        row.appendChild(node1);
        let node2 = document.createElement("td");
        node2.innerHTML = teachersCopy[i].course;
        row.appendChild(node2);
        let node3 = document.createElement("td");
        node3.innerHTML = teachersCopy[i].age;
        row.appendChild(node3);
        let node4 = document.createElement("td");
        node4.innerHTML = teachersCopy[i].gender;
        row.appendChild(node4);
        let node5 = document.createElement("td");
        node5.innerHTML = teachersCopy[i].country;
        row.appendChild(node5);
        element.appendChild(row);
    }

    setCurrentPage(1);
}
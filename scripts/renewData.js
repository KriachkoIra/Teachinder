function renewStats(teachers){ 
    let element = document.getElementById("paginated-list");
    var child = element.lastElementChild; 
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }

    for (let i = 0; i < teachers.length; i++) {
        let row = document.createElement("tr");
        let node1 = document.createElement("td");
        node1.innerHTML = teachers[i].full_name;
        row.appendChild(node1);
        let node2 = document.createElement("td");
        node2.innerHTML = teachers[i].course;
        row.appendChild(node2);
        let node3 = document.createElement("td");
        node3.innerHTML = teachers[i].age;
        row.appendChild(node3);
        let node4 = document.createElement("td");
        node4.innerHTML = teachers[i].gender;
        row.appendChild(node4);
        let node5 = document.createElement("td");
        node5.innerHTML = teachers[i].country;
        row.appendChild(node5);
        element.appendChild(row);
    }
    
    removeButtons();
    displayTable(teachers.length);
}
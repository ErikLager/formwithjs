function add(){
    let firstname = document.querySelector(".fname");
    firstname = firstname.value;

    let lastname = document.querySelector(".lname");
    lastname = lastname.value;

    let email = document.querySelector(".email");
    email = email.value;

    let table = document.querySelector("table");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML = email;
}
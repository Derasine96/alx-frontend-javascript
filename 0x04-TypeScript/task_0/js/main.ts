interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

let student1: Student = {
firstName: "John",
lastName: "Doe",
age: 20,
location: "Lagos"
};

let student2: Student = {
firstName: "Jane",
lastName: "Doe",
age: 22,
location: "Abuja"
};

let studentsList: Student[] = [student1, student2];

window.onload = () => {
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let headers = ['First Name', 'Location'];

let headerRow = document.createElement('tr');
headers.forEach(header => {
let th = document.createElement('th');
th.appendChild(document.createTextNode(header));
headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

studentsList.forEach(student => {
let row = document.createElement('tr');
let firstNameCell = document.createElement('td');
let locationCell = document.createElement('td');

firstNameCell.appendChild(document.createTextNode(student.firstName));
locationCell.appendChild(document.createTextNode(student.location));

row.appendChild(firstNameCell);
row.appendChild(locationCell);

tbody.appendChild(row);
});
table.appendChild(tbody);

document.body.appendChild(table);
};

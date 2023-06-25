let table1 = document.getElementById('table1');
let listItems = [];

document.getElementById('save1').addEventListener('click', function saveMyData() {
  let firstName1 = document.getElementById("firstName1").value;
  let lastName1 = document.getElementById("lastName1").value;
  let dateOfBirth = document.getElementById("dob").value;
  let gender = document.getElementById("gender").value;

  let item = {
    firstName: firstName1,
    lastName: lastName1,
    dateOfBirth: dateOfBirth,
    gender: gender
  };

  listItems.push(item);
  saveToLocalStorage();
  renderListItems();

  // Clear form input values
  document.getElementById("firstName1").value = "";
  document.getElementById("lastName1").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("gender").value = "";
});

// Save list items to local storage
function saveToLocalStorage() {
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

// Retrieve stored list items from local storage on page load
window.addEventListener('load', function() {
  let storedItems = localStorage.getItem('listItems');
  if (storedItems) {
    listItems = JSON.parse(storedItems);
    renderListItems();
  }
});

function renderListItems() {
  // Clear existing table rows
  table1.innerHTML = "";

  // Create table rows for each item
  listItems.forEach(function(item) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    td1.innerHTML = item.firstName;
    td2.innerHTML = item.lastName;
    td3.innerHTML = item.dateOfBirth;
    td4.innerHTML = item.gender;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table1.appendChild(tr);
  });
}

const container = document.querySelector(".container");

function localStorageloeschen() {
  localStorage.clear();
}

var Daten = new Array();
if (localStorage.getItem("Daten") == null) {
  var Daten = new Array();
} else {
  Daten = JSON.parse(localStorage.getItem("Daten"));
}
console.log(localStorage.getItem("Daten"));



if (localStorage.getItem("count") == null) {
  var count = 0;
} else {
  count = localStorage.getItem("count");
}
console.log(count);

if (localStorage.getItem("amount") == null) {
  var balance = 100;
} else {
  balance = localStorage.getItem("balance");
}


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
};

function safe() {
  description = document.getElementById('Description').value;
  date = document.getElementById('Date').value;
  category = document.getElementById('Category').value;
  amount = document.getElementById('Amount').value;

  localStorage.setItem("description", description);
  localStorage.setItem("date", date);
  localStorage.setItem("category", category);
  localStorage.setItem("amount", amount);

  console.log("Safe!!");

  console.log(localStorage.getItem("description"));
  console.log(localStorage.getItem("date"));
  console.log(localStorage.getItem("category"));
  console.log(localStorage.getItem("amount"));
  Daten[count] = new Object();
  Daten[count]["Description"] = description;
  Daten[count]["Date"] = date;
  Daten[count]["Category"] = category;
  Daten[count]["Amount"] = amount;
  balance = parseInt(balance) - parseInt(amount);
  Daten[count]["Balance"] = balance;
  localStorage.setItem("balance", balance);
  localStorage.setItem("Daten", JSON.stringify(Daten));
  count++;
  localStorage.setItem("count", count);
  console.log(balance);
}

function show() {
  var container = document.getElementById("show"),
    dl;
  if (container) {
    dl = container.appendChild(document.createElement("dl"));
    Daten.forEach(function (m, i) {
      var dd, dt, eigenschaft;
      dt = document.createElement("dt");
      dt.innerHTML = "Daten: ";
      dl.appendChild(dt);
      for (eigenschaft in m) {
        dd = document.createElement("dd");
        dd.innerHTML = eigenschaft + ": " + m[eigenschaft];
        dl.appendChild(dd);
      }
    });
  }
}



function reload() {
  location.reload();
}




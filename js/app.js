const container = document.querySelector(".container");

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

if (localStorage.getItem("wert") == null) {
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
  Description = document.getElementById('Description').value;
  datum = document.getElementById('Datum').value;
  kategorie = document.getElementById('Kategorie').value;
  wert = document.getElementById('Wert').value;

  localStorage.setItem("Description", Description);
  localStorage.setItem("datum", datum);
  localStorage.setItem("kategorie", kategorie);
  localStorage.setItem("wert", wert);

  console.log("Gespeichert!");

  console.log(localStorage.getItem("Description"));
  console.log(localStorage.getItem("datum"));
  console.log(localStorage.getItem("kategorie"));
  console.log(localStorage.getItem("wert"));
  Daten[count] = new Object();
  Daten[count]["Description"] = Description;
  Daten[count]["Datum"] = datum;
  Daten[count]["Kategorie"] = kategorie;
  Daten[count]["Wert"] = wert;
  balance = parseInt(balance) - parseInt(wert);
  Daten[count]["Balance"] = balance;
  localStorage.setItem("balance", balance);
  localStorage.setItem("Daten", JSON.stringify(Daten));
  count++;
  localStorage.setItem("count", count);
  console.log(balance);
}

function ausgeben() {
  var container = document.getElementById("ausgabe"),
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




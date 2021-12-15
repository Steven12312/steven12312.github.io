const container = document.querySelector(".container");

var Data = new Array();
if (localStorage.getItem("Data") == null) {
  var Data = new Array();
} else {
  Data = JSON.parse(localStorage.getItem("Data"));
}
console.log(localStorage.getItem("Data"));



if (localStorage.getItem("count") == null) {
  var count = 0;
} else {
  count = localStorage.getItem("count");
}
console.log(count);

if (localStorage.getItem("amount") == null) {
  var balance = 1000;
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

function localStorageloeschen() {
  localStorage.clear();
}

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
  Data[count] = new Object();
  Data[count]["Description"] = description;
  Data[count]["Date"] = date;
  Data[count]["Category"] = category;
  Data[count]["Amount"] = amount;
  balance = parseInt(balance) - parseInt(amount);
  Data[count]["Balance"] = balance;
  localStorage.setItem("balance", balance);
  localStorage.setItem("Data", JSON.stringify(Data));
  count++;
  localStorage.setItem("count", count);
  console.log(balance);
}

function show() {
  var container = document.getElementById("show"),
    dl;
  if (container) {
    dl = container.appendChild(document.createElement("dl"));
    Data.forEach(function (m, i) {
      var dd, dt, eigenschaft;
      dt = document.createElement("dt");
      dt.innerHTML = "Data: ";
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




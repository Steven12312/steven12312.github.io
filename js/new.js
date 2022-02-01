//Shop Funktionen 

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

function localStorageloeschen() {
  localStorage.clear();
}

function safe() {
  description = document.getElementById('Description').value;
  email = document.getElementById('Email').value;
  date = document.getElementById('Date').value;
  amount = document.getElementById('Amount').value;

  localStorage.setItem("description", description);
  localStorage.setItem("date", date);
  localStorage.setItem("email", email);
  localStorage.setItem("amount", amount);

  console.log("Safe!!");

  // console.log(localStorage.getItem("description"));
  // console.log(localStorage.getItem("date"));
  // console.log(localStorage.getItem("email"));
  // console.log(localStorage.getItem("amount"));
  // Data[count] = new Object();
  // Data[count]["Description"] = description;
  // Data[count]["Date"] = date;
  // Data[count]["Email"] = email;
  // Data[count]["Amount"] = amount;
  
  // localStorage.setItem("Amount", amount);
  // localStorage.setItem("Data", JSON.stringify(Data));
  // count++;
  // localStorage.setItem("count", count);
  // console.log(amount);
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


//Take Foto Option
function getUserMedia(options, successCallback, failureCallback) {
  var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia;
  if (api) {
    return api.bind(navigator)(options, successCallback, failureCallback);
  }
}

var theStream;

function getStream() {
  if (!navigator.getUserMedia && !navigator.webkitGetUserMedia &&
    !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
    alert('User Media API not supported.');
    return;
  }

  var constraints = {
    video: true
  };

  getUserMedia(constraints, function (stream) {
    var mediaControl = document.querySelector('video');
    if ('srcObject' in mediaControl) {
      mediaControl.srcObject = stream;
    } else if (navigator.mozGetUserMedia) {
      mediaControl.mozSrcObject = stream;
    } else {
      mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
    }
    theStream = stream;
  }, function (err) {
    alert('Error: ' + err);
  });
}

function takePhoto() {
  if (!('ImageCapture' in window)) {
    alert('ImageCapture is not available');
    return;
  }

  if (!theStream) {
    alert('Grab the video stream first!');
    return;
  }

  var theImageCapturer = new ImageCapture(theStream.getVideoTracks()[0]);

  theImageCapturer.takePhoto()
    .then(blob => {
      var theImageTag = document.getElementById("imageTag");
      theImageTag.src = URL.createObjectURL(blob);
    })
    .catch(err => alert('Error: ' + err));
}
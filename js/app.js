const container = document.querySelector(".container");
if ('localStorage' in window || 'sessionStorage' in window) {
  var selectedEngine;

  var logTarget = document.getElementById('target');
  var valueInput = document.getElementById('value');

  var reloadInputValue = function () {
  console.log(selectedEngine, window[selectedEngine].getItem('myKey'))
    valueInput.value = window[selectedEngine].getItem('myKey') || '';
  }
  
  var selectEngine = function (engine) {
    selectedEngine = engine;
    reloadInputValue();
  };

  function handleChange(change) {
    var timeBadge = new Date().toTimeString().split(' ')[0];
    var newState = document.createElement('p');
    newState.innerHTML = '' + timeBadge + ' ' + change + '.';
    logTarget.appendChild(newState);
  }

  var radios = document.querySelectorAll('#selectEngine input');
  for (var i = 0; i < radios.length; ++i) {
    radios[i].addEventListener('change', function () {
      selectEngine(this.value)
    });
  }
  
  selectEngine('localStorage');

  valueInput.addEventListener('keyup', function () {
    window[selectedEngine].setItem('myKey', this.value);
  });

  var onStorageChanged = function (change) {
    var engine = change.storageArea === window.localStorage ? 'localStorage' : 'sessionStorage';
    handleChange('External change in ' + engine + ': key ' + change.key + ' changed from ' + change.oldValue + ' to ' + change.newValue + '');
    if (engine === selectedEngine) {
      reloadInputValue();
    }
  }

  window.addEventListener('storage', onStorageChanged);

//document.addEventListener("DOMContentLoaded", showCoffees);
const showCoffees = () => {
  let output = "";

  coffees.forEach(
    ({ name, image }) =>
      (output += `
      <div class="card">
        <img class="card--avatar" src=${image} />
        <h1 class="card--title"> ${name} </h1>
        <a class="card--link" href="#">Taste</a>
      </div>
    `)
  );

  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

//Service Worker  
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
  if ('DeviceOrientationEvent' in window) {
    window.addEventListener('deviceorientation', deviceOrientationHandler, false);
  } else {
    document.getElementById('logoContainer').innerText = 'Device Orientation API not supported.';
  }
  
  function deviceOrientationHandler (eventData) {
    var tiltLR = eventData.gamma;
    var tiltFB = eventData.beta;
    var dir = eventData.alpha;
    
    document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);
    document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
    document.getElementById("doDirection").innerHTML = Math.round(dir);
  
    var logo = document.getElementById("imgLogo");
    logo.style.webkitTransform = "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)";
    logo.style.MozTransform = "rotate(" + tiltLR + "deg)";
    logo.style.transform = "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)"; }

   //Location
   var target = document.getElementById('target');
   var watchId;
   
   function appendLocation(location, verb) {
     verb = verb || 'updated';
     var newLocation = document.createElement('p');
     newLocation.innerHTML = 'Location ' + verb + ': ' + location.coords.latitude + ', ' + location.coords.longitude + '';
     target.appendChild(newLocation);
   }
   
  if ('geolocation' in navigator) {
     document.getElementById('askButton').addEventListener('click', function () {
       navigator.geolocation.getCurrentPosition(function (location) {
         appendLocation(location, 'fetched');
       });
       watchId = navigator.geolocation.watchPosition(appendLocation);
     });
   } else {
     target.innerText = 'Geolocation API not supported.';}

      //Foto funktion 
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
    }
   
    function getUserMedia(options, successCallback, failureCallback) {
      var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;
      if (api) {
        return api.bind(navigator)(options, successCallback, failureCallback);
      }
    }
    
    var theStream;
    var theRecorder;
    var recordedChunks = [];
    
    function getStream() {
      if (!navigator.getUserMedia && !navigator.webkitGetUserMedia &&
        !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
        alert('User Media API not supported.');
        return;
      }
      
      var constraints = {video: true, audio: true};
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
        try {
          recorder = new MediaRecorder(stream, {mimeType : "video/webm"});
        } catch (e) {
          console.error('Exception while creating MediaRecorder: ' + e);
          return;
        }
        theRecorder = recorder;
        console.log('MediaRecorder created');
        recorder.ondataavailable = recorderOnDataAvailable;
        recorder.start(100);
      }, function (err) {
        alert('Error: ' + err);
      });
    }
    
    function recorderOnDataAvailable(event) {
      if (event.data.size == 0) return;
      recordedChunks.push(event.data);
    }
    
    function download() {
    
    bannerImage = document.getElementById('imageTag');
    imgData = getBase64Image(bannerImage);
    localStorage.setItem("imgData", imgData); 
    
    function getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 720;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/jpg");
      return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
    
    var base64 = getBase64Image(document.getElementById("imageTag")); 
}
}
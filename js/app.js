const container = document.querySelector(".container");

//document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
//Gerätebewegung
  if ('LinearAccelerationSensor' in window && 'Gyroscope' in window) {
    document.getElementById('moApi').innerHTML = 'Generic Sensor API';
    
    let lastReadingTimestamp;
    let accelerometer = new LinearAccelerationSensor();
    accelerometer.addEventListener('reading', e => {
      if (lastReadingTimestamp) {
        intervalHandler(Math.round(accelerometer.timestamp - lastReadingTimestamp));
      }
      lastReadingTimestamp = accelerometer.timestamp
      accelerationHandler(accelerometer, 'moAccel');
    });
    accelerometer.start();
    
    if ('GravitySensor' in window) {
      let gravity = new GravitySensor();
      gravity.addEventListener('reading', e => accelerationHandler(gravity, 'moAccelGrav'));
      gravity.start();
    }
    
    let gyroscope = new Gyroscope();
    gyroscope.addEventListener('reading', e => rotationHandler({
      alpha: gyroscope.x,
      beta: gyroscope.y,
      gamma: gyroscope.z
    }));
    gyroscope.start();
    
  } else if ('DeviceMotionEvent' in window) {
    document.getElementById('moApi').innerHTML = 'Device Motion API';
    
    var onDeviceMotion = function (eventData) {
      accelerationHandler(eventData.acceleration, 'moAccel');
      accelerationHandler(eventData.accelerationIncludingGravity, 'moAccelGrav');
      rotationHandler(eventData.rotationRate);
      intervalHandler(eventData.interval);
    }
    
    window.addEventListener('devicemotion', onDeviceMotion, false);
  } else {
    document.getElementById('moApi').innerHTML = 'No Accelerometer & Gyroscope API available';
  }
  
  function accelerationHandler(acceleration, targetId) {
    var info, xyz = "[X, Y, Z]";
  
    info = xyz.replace("X", acceleration.x && acceleration.x.toFixed(3));
    info = info.replace("Y", acceleration.y && acceleration.y.toFixed(3));
    info = info.replace("Z", acceleration.z && acceleration.z.toFixed(3));
    document.getElementById(targetId).innerHTML = info;
  }
  
  function rotationHandler(rotation) {
    var info, xyz = "[X, Y, Z]";
  
    info = xyz.replace("X", rotation.alpha && rotation.alpha.toFixed(3));
    info = info.replace("Y", rotation.beta && rotation.beta.toFixed(3));
    info = info.replace("Z", rotation.gamma && rotation.gamma.toFixed(3));
    document.getElementById("moRotation").innerHTML = info;
  }
  
  function intervalHandler(interval) {
    document.getElementById("moInterval").innerHTML = interval; }

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

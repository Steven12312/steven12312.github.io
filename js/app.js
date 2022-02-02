const container = document.querySelector(".container")

//Current Location
// var target = document.getElementById('target');
// var watchId;

// function appendLocation(location, verb) {
//   verb = verb || 'updated';
//   var newLocation = document.createElement('p');
//   newLocation.innerHTML = 'Location ' + verb + ': ' + location.coords.latitude + ', ' + location.coords.longitude + '';
//   target.appendChild(newLocation);
// }

// if ('geolocation' in navigator) {
//   document.getElementById('askButton').addEventListener('click', function () {
//     navigator.geolocation.getCurrentPosition(function (location) {
//       appendLocation(location, 'fetched');
//     });
//     watchId = navigator.geolocation.watchPosition(appendLocation);
//   });
// } else {
//   target.innerText = 'Geolocation API not supported.';
// }




//Funktion to Load the Map 
//here we can define the Zoom level and were our Startpoint is wenn we Open our App
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 50.187877, lng: 8.916487 },
    zoom: 18,
    mapId: 'ff6cdabecf0dc222'
  });

  //We have created a Marker in our Map (Place of a Restourant)
  const marker = new google.maps.Marker({
    position: { lat: 50.187877, lng: 8.916487 },
    map,
    title: "Sambrothers",
    //here we have put an PNG as an Marker 
    icon: {
      url: "burger.png",
      scaledSize: new google.maps.Size(45, 40)
    },
    animation: google.maps.Animation.DROP
  });

  // Wre have created a Infobox on the Place where our Marker is
  const infoWindowOptions = {
    position: { lat: 50.187877, lng: 8.916487 },
    maxWidth: 200
  }

  const infowindow = new google.maps.InfoWindow(infoWindowOptions);
  infowindow.setContent(`
<a href="Sambrothers.html" button>Sambrothers</a>
`);

  const infoWindowOpenOptions = {
    map: map,
    anchor: marker,
    shouldFocus: false
  }
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

}
//Next Maker /////////////////////////////////////////////////////////////////////
//  const marker = new google.maps.Marker({
//    position: { lat: 50.187212, lng: 8.91663533 },
//   map,
//   title: "PizzaBella",
//   //here we have put an PNG as an Marker 
//   icon: {
//     url: "pizza.PNG",
//      scaledSize: new google.maps.Size(45, 40)
//  },
//   animation: google.maps.Animation.DROP
//  });

// Wre have created a Infobox on the Place where our Marker is
// const infoWindowOptions = {
//   position: { lat:  50.14720579999999, lng: 8.916487 },
//   maxWidth: 200
// }

// const infowindow = new google.maps.InfoWindow(infoWindowOptions);
// infowindow.setContent(`
// <a href="Sambrothers.html" button>Sambrothers</a>
// `);

// const infoWindowOpenOptions = {
//   map: map,
//   anchor: marker,
//   shouldFocus: false
// }
// marker.addListener("click", () => {
//   infowindow.open({
//     anchor: marker,
//     map,
//     shouldFocus: false,
//   });
// });



// new google.maps.Marker({
//   position: { lat: 50.14720579999999, lng: 8.824969099999999 },
//   map,
//   title: "Hello World!",

// });
// new google.maps.Marker({
//   map,
//   title: "Hello World!",

// });


//document.addEventListener("DOMContentLoaded")

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

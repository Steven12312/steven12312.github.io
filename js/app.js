const container = document.querySelector(".container")

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 50.13755268377812, lng: 8.85292860685411 },
    zoom: 18,
    mapId: 'ff6cdabecf0dc222'

  });

  //We have created a Marker in our Map (Place of a Restourant)
  const marker = new google.maps.Marker({
    position: { lat: 50.03843532768981, lng:  7.9972985574715425 },
    map,
    title: "Amoli_OldHome",
    //here we have put an PNG as an Marker 
    //50.03843532768981, 7.9972985574715425
    icon: {
      url: "Bilder/RD.png",
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
<a href="RD.html" button>Amoli</a>
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
//  
const marker = new google.maps.Marker({
position: { lat: 50.13755268377812, lng: 8.85292860685411 },
 map,
 title: "Mein Leben",
//   //here we have put an PNG as an Marker 
 icon: {
 url: "Herz.webp",
 scaledSize: new google.maps.Size(45, 40)
  },
 animation: google.maps.Animation.DROP
});

//Wre have created a Infobox on the Place where our Marker is
const infoWindowOptions = {
position: { lat:  50.13755268377812, lng: 8.85292860685411 },
maxWidth: 200
 }

const infowindow = new google.maps.InfoWindow(infoWindowOptions);
infowindow.setContent(`
<a href="bilder.html" button>Mein Leben </a>
`);

const infoWindowOpenOptions = {
 map: map,
 anchor: marker,
 shouldFocus: false }
 marker.addListener("click", () => {
infowindow.open({
   anchor: marker,
   map,
  shouldFocus: false,
  });
 });



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

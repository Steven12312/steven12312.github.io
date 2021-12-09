const container = document.querySelector(".container");


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });

  function initMap() {

    // A couple of places
    //50.187907618234846, 8.916696434405555
    var brunchPos = {lat: 50.187907618234846, lng: 8.916696434405555};
    var faboritPos = {lat: 41.3915233, lng: 2.1650537};

    // Create map, draw it in the targetElem and sets the cameraPosition
    var targetElem = document.getElementById('map');
    var cameraPosition = { zoom: 13, center: faboritPos };
    var map = new google.maps.Map(targetElem, cameraPosition);

    // We have already displayed the map, let's add markers

    // Create markers in the map
    var marker1 = new google.maps.Marker({ map: map, position: faboritPos });
    var marker2 = new google.maps.Marker({ map: map, position: brunchPos });

    // Now let's setup the autocomplete input, with which we can add more markers

    // Autocomplete input
    var input = document.getElementById('searchTextField');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    // Listen to autocomplete input
    autocomplete.addListener('place_changed', function() {

      var place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'. Select one of the results.");
        return;
      }

      // Add marker in map
      var marker = new google.maps.Marker({ map: map, position: place.geometry.location });
    });

  }

  // Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}


}




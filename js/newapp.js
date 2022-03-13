function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 50.13755268377812, lng: 8.85292860685411 },
      zoom: 18,
      mapId: 'ff6cdabecf0dc222'
  
    });

    //Old_Home (Rüdisheim)
    const marker = new google.maps.Marker({
      position: { lat: 50.03843532768981, lng:  7.9972985574715425 },
      map,
      title: "Amoli_OldHome",
      icon: {
        url: "Bilder/RD.png",
        scaledSize: new google.maps.Size(45, 40)
      },
      animation: google.maps.Animation.DROP
    });
    const infoWindowOptions = {
      position: { lat: 50.187877, lng: 8.916487 },
      maxWidth: 200
    }
  
    const infowindow = new google.maps.InfoWindow(infoWindowOptions);
    infowindow.setContent(`<a href="RD.html" button>Rüdesheim</a>`);
  
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

    //AmolisHome (Maintal)
    const marker1 = new google.maps.Marker({
        position: { lat: 50.13755268377812, lng: 8.85292860685411 },
        map,
        title: "Amoli_Home",
        icon: {
          url: "Bilder/Herz.webp",
          scaledSize: new google.maps.Size(45, 40)
        },
        animation: google.maps.Animation.DROP
      });
      const infoWindowOptions1 = {
        position: { lat: 50.13755268377812, lng: 8.85292860685411 },
        maxWidth: 200
      }
      const infowindow1 = new google.maps.InfoWindow(infoWindowOptions1);
    infowindow1.setContent(`
  <a href="bilder.html" button>Amoli's_Home</a>
  `);
    const infoWindowOpenOptions1 = {
      map: map,
      anchor: marker1,
      shouldFocus: false
    }
    marker1.addListener("click", () => {
      infowindow1.open({
        anchor: marker1,
        map,
        shouldFocus: false,
      });
    });

    //Dieburg
    const marker2 = new google.maps.Marker({
        position: { lat: 49.895585938589775, lng: 8.8367240512258  },
        map,
        title: "First Place",
        icon: {
          url: "Bilder/Dieburg.png",
          scaledSize: new google.maps.Size(45, 40)
        },
        animation: google.maps.Animation.DROP
      });
      const infoWindowOptions2 = {
        position: { lat: 49.895585938589775, lng: 8.8367240512258 },
        maxWidth: 200
      }
      const infowindow2 = new google.maps.InfoWindow(infoWindowOptions2);
    infowindow2.setContent(`
  <a href="bilder.html" button>Dieburg</a>
  `);
    const infoWindowOpenOptions2 = {
      map: map,
      anchor: marker2,
      shouldFocus: false
    }
    marker2.addListener("click", () => {
      infowindow2.open({
        anchor: marker2,
        map,
        shouldFocus: false,
      });
    });

//Köln
const marker3 = new google.maps.Marker({
    position: { lat: 50.963422550921976, lng: 6.957682445993567  },
    map,
    title: "Köln",
    icon: {
      url: "Bilder/Köln.png",
      scaledSize: new google.maps.Size(45, 40)
    },
    animation: google.maps.Animation.DROP
  });
  const infoWindowOptions3 = {
    position: { lat: 50.963422550921976, lng: 6.957682445993567 },
    maxWidth: 200
  }
  const infowindow3 = new google.maps.InfoWindow(infoWindowOptions3);
infowindow3.setContent(`
<a href="köln.html" button>Köln</a>
`);
const infoWindowOpenOptions3 = {
  map: map,
  anchor: marker3,
  shouldFocus: false
}
marker3.addListener("click", () => {
  infowindow3.open({
    anchor: marker3,
    map,
    shouldFocus: false,
  });
});

//Bruchköbel
const marker4 = new google.maps.Marker({
    position: { lat: 50.18792252009004, lng: 8.916817598034749  },
    map,
    title: "Stina",
    icon: {
      url: "Bilder/Herz.webp",
      scaledSize: new google.maps.Size(45, 40)
    },
    animation: google.maps.Animation.DROP
  });
  const infoWindowOptions4 = {
    position: { lat: 50.18792252009004, lng: 8.916817598034749 },
    maxWidth: 200
  }
  const infowindow4 = new google.maps.InfoWindow(infoWindowOptions4);
infowindow4.setContent(`
<a href="bilder.html" button>Stina</a>
`);
const infoWindowOpenOptions4 = {
  map: map,
  anchor: marker4,
  shouldFocus: false
}
marker4.addListener("click", () => {
  infowindow4.open({
    anchor: marker4,
    map,
    shouldFocus: false,
  });
});

//Frankfurt BDAY
const marker5 = new google.maps.Marker({
    position: { lat: 50.11035480949173, lng: 8.6051937961794  },
    map,
    title: "BDAY",
    icon: {
      url: "Bilder/Bday.jpg",
      scaledSize: new google.maps.Size(45, 40)
    },
    animation: google.maps.Animation.DROP
  });
  const infoWindowOptions5 = {
    position: { lat: 50.11035480949173, lng: 8.6051937961794 },
    maxWidth: 200
  }
  const infowindow5 = new google.maps.InfoWindow(infoWindowOptions5);
infowindow5.setContent(`
<a href="Bday.html" button>BDAY</a>
`);
const infoWindowOpenOptions5 = {
  map: map,
  anchor: marker5,
  shouldFocus: false
}
marker5.addListener("click", () => {
  infowindow5.open({
    anchor: marker5,
    map,
    shouldFocus: false,
  });
});

  }

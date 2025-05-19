function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 37.591646, lng: 14.978158 },
  });

  const iconUrls = ['./../image/fontane_loghi/fontane_logo-01.png','./../image/fontane_loghi/fontane_logo-02.png',
     './../image/fontane_loghi/fontane_logo-03.png','./../image/fontane_loghi/fontane_logo-04.png',
     './../image/fontane_loghi/fontane_logo-05.png','./../image/fontane_loghi/fontane_logo-06.png',
     './../image/fontane_loghi/fontane_logo-07.png','./../image/fontane_loghi/fontane_logo-08.png',
     './../image/fontane_loghi/fontane_logo-09.png','./../image/fontane_loghi/fontane_logo-10.png',
     './../image/fontane_loghi/fontane_logo-11.png','./../image/fontane_loghi/fontane_logo-12.png',
     './../image/fontane_loghi/fontane_logo-13.png','./../image/fontane_loghi/fontane_logo-14.png',
     './../image/fontane_loghi/fontane_logo-15.png','./../image/fontane_loghi/fontane_logo-16.png',
     './../image/fontane_loghi/fontane_logo-17.png','./../image/fontane_loghi/fontane_logo-18.png',
     './../image/fontane_loghi/fontane_logo-19.png','./../image/fontane_loghi/fontane_logo-20.png',
     './../image/fontane_loghi/fontane_logo-21.png','./../image/fontane_loghi/fontane_logo-22.png',
     './../image/fontane_loghi/fontane_logo-23.png','./../image/fontane_loghi/fontane_logo-24.png',
     './../image/fontane_loghi/fontane_logo-25.png','./../image/fontane_loghi/fontane_logo-26.png',
     './../image/fontane_loghi/fontane_logo-27.png','./../image/fontane_loghi/fontane_logo-28.png',
     './../image/fontane_loghi/fontane_logo-29.png','./../image/fontane_loghi/fontane_logo-30.png',
     './../image/fontane_loghi/fontane_logo-31.png','./../image/fontane_loghi/fontane_logo-32.png',
     './../image/fontane_loghi/fontane_logo-33.png','./../image/fontane_loghi/fontane_logo-34.png',
     './../image/fontane_loghi/fontane_logo-35.png',]; // Aggiungi qui i tuoi URL

  const iconSize = new google.maps.Size(30, 30);

  fetch('../utilities/fontane.json')
    .then(response => response.json())
    .then(locations => {
      console.log(locations);
      locations.forEach((location, index) => {
        console.log(location);
        const marker = new google.maps.Marker({
          map: map,
          position: { lat: location.lat, lng: location.lng },
          icon: {
            url: iconUrls[index], // Usa l'indice per ottenere l'URL corrispondente
            scaledSize: iconSize
          },
          title: location.name,
        });

        marker.addListener('click', () => {
          
          var gif = document.getElementById("animationGif");
          
          gif.style.display = "block";
          
          setTimeout(function() {
            gif.classList.add("fade-in");
          }, 100);


          setTimeout(function() {
            window.location.href = location.url;
          }, 1500);
        });
      });
    })
    .catch(error => console.error('Error loading location data:', error));
}


function changePage() {

  var gif = document.getElementById("animationGif");
  
  gif.style.display = "block";
  
  setTimeout(function() {
    gif.classList.add("fade-in");
  }, 100);


  setTimeout(function() {
    test=0
  }, 5000);

  if(test==0){
    return true;

  }
}
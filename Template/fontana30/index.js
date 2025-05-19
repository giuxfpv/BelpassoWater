function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 37.580833, lng: 14.980556 },
  });

  const iconUrls = ['./../image/fontane_loghi/fontane_logo-30.png',]; // Aggiungi qui i tuoi URL

  const iconSize = new google.maps.Size(30, 30);

  fetch('fontane.json')
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
          
          var overlay = document.getElementById("overlay");
          var gif = document.getElementById("animationGif");
          
          overlay.style.display = "block";
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

  var overlay = document.getElementById("overlay");
  var gif = document.getElementById("animationGif");
  
  overlay.style.display = "block";
  gif.style.display = "block";
  
  setTimeout(function() {
    gif.classList.add("fade-in");
  }, 100);


  setTimeout(function() {
    test=0
  }, 1500);

  if(test==0){
    return true;

  }
}
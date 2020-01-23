// On charge la carte

var mymap = L.map('map').setView([45.180243, 5.727591], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox/streets-v11'
}).addTo(mymap);

// On y ajoute nos markers pour les agences
var iconeAgencePrincipale = L.icon({
    iconUrl: 'https://www.shareicon.net/data/512x512/2016/07/06/791908_home_512x512.png',
    iconSize: [40, 40],
});

var iconeAgenceSecondaire = L.icon({
    iconUrl: 'http://images.clipartpanda.com/map-icon-vector-9T4x6GAac.png',
    iconSize: [40, 40],
});

var m1 = new L.marker([45.177124, 5.727326], {icon: iconeAgencePrincipale}).addTo(mymap).bindPopup("<b>Agence de Grenoble</b><br />Contact: 06.05.04.03.02<br />Adresse: 2 Rue Example");

L.marker([44.555727, 4.758136], {icon: iconeAgenceSecondaire}).addTo(mymap).bindPopup("<b>Agence de Montélimar</b><br />Contact: 06.05.04.03.02<br />Adresse: 2 Rue Example");
L.marker([44.921014, 4.916653], {icon: iconeAgenceSecondaire}).addTo(mymap).bindPopup("<b>Agence de Valence</b><br />Contact: 06.05.04.03.02<br />Adresse: 2 Rue Example");
L.marker([45.756613, 4.858008], {icon: iconeAgenceSecondaire}).addTo(mymap).bindPopup("<b>Agence de Lyon</b><br />Contact: 06.05.04.03.02<br />Adresse: 2 Rue Example");

// On utilise une animation lorsqu'on clique sur le marker de l'agence principale
// Si on aurait voulu utiliser l'API de Google, on aurait pu utiliser " marker.setAnimation(google.maps.Animation.BOUNCE); " pour lancer une animation sur le marker.
m1.on('click', function () {
    m1.bounce({duration: 500, height: 50});
});


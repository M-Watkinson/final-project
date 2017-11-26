var mymap = L.map('map').setView([29.357, -96.094,], 6.5);

L.tileLayer('https://api.mapbox.com/styles/v1/m-watkinson/cjag4j7my7p6r2sqapdemclex/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibS13YXRraW5zb24iLCJhIjoiY2phZzUwMm9kMWJ4bDMybzIweDhnOGwwYyJ9.xbqzMtOy-HJ7GmEu7XZVhQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for (var i=0; i < places.length; i++) {
  L.marker([places[i].latitude, places[i].longitude])
  .bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].rainfall + '</p>')
  .addTo(mymap);
}

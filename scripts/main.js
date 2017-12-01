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

var flmap = L.map('fl').setView([27.558, -81.112,], 6.4);

L.tileLayer('https://api.mapbox.com/styles/v1/m-watkinson/cjajvtjc5b7xm2rl8330yocfj/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibS13YXRraW5zb24iLCJhIjoiY2phZzUwMm9kMWJ4bDMybzIweDhnOGwwYyJ9.xbqzMtOy-HJ7GmEu7XZVhQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(flmap);

for (var i=0; i < areas.length; i++) {
  L.marker([areas[i].latitude, areas[i].longitude])
  .bindPopup('<h3>' + areas[i].placeName + '</h3>' + '<p>' + areas[i].rainfall + '</p>')
  .addTo(flmap);
}

var ricomap = L.map('rico').setView([18.172, -66.510,], 8.7);

L.tileLayer('https://api.mapbox.com/styles/v1/m-watkinson/cjajy7elebart2sntgl54gwse/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibS13YXRraW5zb24iLCJhIjoiY2phZzUwMm9kMWJ4bDMybzIweDhnOGwwYyJ9.xbqzMtOy-HJ7GmEu7XZVhQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(ricomap);

for (var i=0; i < locations.length; i++) {
  L.marker([locations[i].latitude, locations[i].longitude])
  .bindPopup('<h3>' + locations[i].placeName + '</h3>' + '<p>' + locations[i].rainfall + '</p>')
  .addTo(ricomap);
}

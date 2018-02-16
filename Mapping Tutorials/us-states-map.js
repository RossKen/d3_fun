// select body element
// var bodySelection = d3.select("body");

var mapboxAccessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

// lets draw a map
var map = new L.Map("map").setView([37.8, -96], 4);

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token=" + mapboxAccessToken, {
		id: 'mapbox.light'
}).addTo(map)

L.geoJson(statesData).addTo(map)

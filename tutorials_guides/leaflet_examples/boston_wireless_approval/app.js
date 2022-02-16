

const map = L.map('mapDiv').setView([42.361145, -71.057083], 12);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

let wirelessIcon = L.icon(
    {
       iconUrl: 'assets/antenna.png',
       iconSize: [20,20]
    });

L.geoJson(wirelessObj, {
    pointToLayer: function(feature, latlng){
        let marker = L.marker(latlng,{icon: wirelessIcon});
        marker.bindPopup(feature.properties.Vendor + '<br/>' + feature.properties.Intended_Commercial_Use);
        return marker;
    }
}).addTo(map);




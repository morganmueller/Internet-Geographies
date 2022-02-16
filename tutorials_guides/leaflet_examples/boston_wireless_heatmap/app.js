

const map = L.map('mapDiv').setView([42.361145, -71.057083], 12);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);


    let locations = wirelessObj.features.map(function(antenna) {
    let location = antenna.geometry.coordinates.reverse();
    location.push(1.5);
    console.log(location)
    return location;
    });

    let heat = L.heatLayer(locations, {radius: 75}).addTo(map);

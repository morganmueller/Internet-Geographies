

const map = L.map('mapDiv').setView([40.7648, -73.9808], 10 );

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

L.geoJson(nycBorough).addTo(map);

['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c']
function getColor(d) {
    return d > 90 ? '#810f7c' :
           d > 80  ? '#8856a7' :
           d > 60  ? '#8c96c6' :
           d > 50  ? '#b3cde3' :
                      '#edf8fb';
};

function style(feature) {
    return {
        fillColor: getColor(feature.properties.PERC_1PLUS),
        weight: 2,
        opacity: 1,
        color: 'gray',
        dashArray: '3',
        fillOpacity: 0.5
    };
}

L.geoJson(nycBorough, {style: style}).addTo(map);



function highlightFeature(e) {
    let layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.9
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);

}


function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();

}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(nycBorough, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

let info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>NYC Covid Vaccination Rates</h4>' +  (props ?
        '<b>' + props.BoroName + '</b><br />' + props.PERC_1PLUS +' Percent with at least one dose ' + '<br>' +  + props.PERC_FULLY + ' Percent fully vaccinated'
        : 'Hover over a state');
};

info.addTo(map);


let legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    let div = L.DomUtil.create('div', 'info legend'),
        grades = [50, 60, 80, 90],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);
let circle;
let markers = [
    L.marker([52.359419717009594, 4.909416979785766]),
    L.marker([52.35760012645642, 4.908305800852419]),
    L.marker([52.35804757370319, 4.9146431839996385])
];
let map = L.map('map', {
    zoomControl: false
}).setView([52.36015051507675, 4.908598859032622], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '',
    maxZoom: 18,
}).addTo(map);

L.control.zoom({
    position:'bottomleft'
}).addTo(map);

for(let marker of markers){
    console.log(marker);
    marker.addTo(map).on('click', getMarkerDetails);
}

function getMarkerDetails(e){
    console.log(e);
}

map.locate({setView: true, watch: true, maxZoom: 16});

map.on('locationfound', onLocationFound);

function onLocationFound(e) {
    let radius = e.accuracy;

    console.log(e);
    console.log(radius);

    // L.marker(e.latlng).addTo(map)
    //     .bindPopup("You are within " + radius + " meters from this point").openPopup();

    if(circle === undefined) {
        circle = L.circle(e.latlng, radius).addTo(map);
    } else {
        circle.setLatLng(e.latlng);
    }
}

function onLocationError(e) {
    alert(e.message);
}

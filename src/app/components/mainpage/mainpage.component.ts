import {Component, OnInit} from '@angular/core';

declare let L;

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  private circle: any;
  private markers: any[];
  private map: any;

  constructor() {
    this.markers = [
      L.marker([52.359419717009594, 4.909416979785766]),
      L.marker([52.35760012645642, 4.908305800852419]),
      L.marker([52.35804757370319, 4.9146431839996385])
    ];

  }

  ngOnInit() {
    const DEFAULT_LAT = 52.36015051507675;
    const DEFAULT_LONG = 4.908598859032622;
    const DEFAULT_ZOOM_LEVEL = 16;
    const MAX_ZOOM_LEVEL = 19;

    this.map = new L.map('map', {
      zoomControl: false
    }).setView([DEFAULT_LAT, DEFAULT_LONG], DEFAULT_ZOOM_LEVEL);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '',
      maxZoom: MAX_ZOOM_LEVEL,
    }).addTo(this.map);

    L.control.zoom({
      position: 'bottomleft'
    }).addTo(this.map);

    for (let marker of this.markers) {
      console.log(marker);
      marker.addTo(this.map).on('click', () => {
        console.log('test');
      });
    }

    this.map.on('locationfound', (e) => {
      let radius = e.accuracy;

      console.log(e);
      console.log(radius);

      // L.marker(e.latlng).addTo(map)
      //     .bindPopup("You are within " + radius + " meters from this point").openPopup();

      if (this.circle === undefined) {
        this.circle = new L.circle(e.latlng, radius).addTo(this.map);
      } else {
        this.circle.setLatLng(e.latlng);
      }
    });

    this.map.locate({setView: true, watch: true, maxZoom: MAX_ZOOM_LEVEL});
  }

  private onLocationFound(e): void {


  }

  private onLocationError(e): void {
    alert(e.message);
  }


}

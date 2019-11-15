import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../services/session.service";
import {MatDialog} from "@angular/material/dialog";
import {CreatePostDialogComponent} from "./create-post-dialog/create-post-dialog.component";
import {ChangePasswordDialogComponent} from "../profilepage/change-password-dialog/change-password-dialog.component";
import {Gps} from "../../model/gps";

declare let L;
declare let M;


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  private readonly INACCURATE_START_RADIUS: number = 15;
  private readonly DIALOG_WIDTH: string = "600px";
  private circle: any;
  private markers: any[];
  private map: any;
  private gpsCoordinates: Gps;

  constructor(
    private sessionService: SessionService,
    public dialog: MatDialog) {
    this.markers = [
      L.marker([52.359419717009594, 4.909416979785766]),
      L.marker([52.35760012645642, 4.908305800852419]),
      L.marker([52.35804757370319, 4.9146431839996385])
    ];

    console.log('component test');
    console.log(sessionService.getRepository().getAll());

  }

  openCreatePostDialog(): void {
    // Only allow the user to create a new post if we got its gps coordinates
    if (this.gpsCoordinates != null) {
      const dialogRef = this.dialog.open(CreatePostDialogComponent, {
        width: this.DIALOG_WIDTH,
        data: {coordinates: this.gpsCoordinates, map: this.map}
      });
    }
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
      marker.addTo(this.map).addEventListener('click', () => {
        console.log('test');
      });
    }

    this.map.addEventListener('locationfound', (e) => {
      let radius = e.accuracy;

      console.log(e);
      console.log(radius);

      // L.marker(e.latlng).addTo(map)
      //     .bindPopup("You are within " + radius + " meters from this point").openPopup();

      // Let the user know the location may be inaccurate
      if (radius > this.INACCURATE_START_RADIUS) {
        // M.toast({
        //   html: this.UNABLE_TO_GET_PRECISE_LOCATION,
        //   displayLength: this.TOAST_DURATION,
        //   classes: 'centered-toast'
        // });

        radius = this.INACCURATE_START_RADIUS; // Disallow the circle to be too big
      }

      if (this.circle === undefined) {
        this.circle = new L.circle(e.latlng, radius).addTo(this.map);
      } else {
        this.circle.setLatLng(e.latlng);
      }

      this.gpsCoordinates = new Gps(e.latlng.lat, e.latlng.lng);
    });

    this.map.locate({setView: true, watch: true, maxZoom: MAX_ZOOM_LEVEL});
  }

  private onLocationFound(e): void {


  }

  private onLocationError(e): void {
    alert(e.message);
  }


}

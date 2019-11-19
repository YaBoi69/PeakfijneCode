import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session.service';
import {MatDialog} from '@angular/material/dialog';
import {CreatePostDialogComponent} from './create-post-dialog/create-post-dialog.component';
import {ChangePasswordDialogComponent} from '../profilepage/change-password-dialog/change-password-dialog.component';
import {Gps} from '../../model/gps';
import {ShowInformationDialogComponent} from './show-information-dialog/show-information-dialog.component';
import {Post} from '../../model/post';
import {PointsService} from '../../services/points.service';
import {LoginOrRegisterDialogComponent} from "./login-or-register-dialog/login-or-register-dialog.component";
import {User} from "../../model/user";
import {Observable} from "rxjs";

declare let L;
declare let M;


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  private readonly INACCURATE_START_RADIUS: number = 15;
  private readonly DIALOG_WIDTH: string = '600px';
  private circle: any;
  private posts: Post[];
  private map: any;
  private gpsCoordinates: Gps;
  private currentUser: User;

  constructor(
    private sessionService: SessionService,
    private pointsService: PointsService,
    public dialog: MatDialog) {
    this.posts = sessionService.getRepository().getAll();
    sessionService.currentUser.subscribe(currentUser => this.currentUser = currentUser);
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

  openShowInformationDialog() {
    this.dialog.open(ShowInformationDialogComponent, {
      width: this.DIALOG_WIDTH
    });
  }
  openSignInDialog() {
    this.dialog.open(LoginOrRegisterDialogComponent, {
      width: this.DIALOG_WIDTH
    });
  }


    ngOnInit() {

    const DEFAULT_LAT = 52.36015051507675;
    const DEFAULT_LONG = 4.908598859032622;
    const DEFAULT_ZOOM_LEVEL = 16;
    const MAX_ZOOM_LEVEL = 19;
    const communityCreatedPostIcon = L.icon({
      iconUrl: 'assets/img/community-created-post.png',
      iconSize: [48, 48],
      iconAnchor: [10, 46],
      popupAnchor: [0, -48],
    });

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

    // TODO: Assign the right icon to each marker by looking at the created by attribute of each post
    for (const post of this.posts) {
      const marker = L.marker([post.latlng.latitude, post.latlng.longitude], {icon: communityCreatedPostIcon});
      const popup = marker.bindPopup(post.message);

      popup.addTo(this.map).addEventListener('click', () => {
        this.pointsService.postAddView(post);
        console.log(post.getViews());
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
  private signOff(){
    this.sessionService.signOff();
  }
}

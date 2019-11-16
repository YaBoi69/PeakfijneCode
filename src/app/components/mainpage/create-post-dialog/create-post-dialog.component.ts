import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Gps} from "../../../model/gps";
import {MatSnackBar} from "@angular/material/snack-bar";

declare let L;

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.scss']
})
export class CreatePostDialogComponent implements OnInit {
  private readonly POST_SUCCESSFULLY_CREATED = "Your post is successfully created 🎉";
  private readonly SNACKBAR_DURATION = 5000;
  private gpsCoordinates:Gps;
  private map: any;
  private postContent: string;

  constructor(
    public dialogRef: MatDialogRef<CreatePostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {coordinates: Gps, map: any},
    private _snackBar: MatSnackBar) {
    this.gpsCoordinates = data.coordinates;
    this.map = data.map;
  }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onCreate() {
    let marker = L.marker([this.gpsCoordinates.latitude, this.gpsCoordinates.longitude]);
    let popup = marker.bindPopup(this.postContent);

    popup.addTo(this.map).addEventListener('click', () => {
      console.log('test');
    });

    this.dialogRef.close();
    this.openSnackBar(this.POST_SUCCESSFULLY_CREATED);
    this.resetData();
  }

  resetData(){
    this.postContent = null;
    this.gpsCoordinates = null;
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: this.SNACKBAR_DURATION,
    });
  }
}

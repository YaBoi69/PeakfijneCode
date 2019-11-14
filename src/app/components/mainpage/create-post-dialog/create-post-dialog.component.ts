import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Post} from "../../../model/post";
import {Gps} from "../../../model/gps";

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.scss']
})
export class CreatePostDialogComponent implements OnInit {
  private gpsCoordinates:Gps;

  constructor(
    public dialogRef: MatDialogRef<CreatePostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Gps) {
    console.log(data);
    this.gpsCoordinates = data;
  }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onCreate() {

  }
}

import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material";
import {DeleteProfileDialogComponent} from "../delete-profile-dialog/delete-profile-dialog.component";

@Component({
  selector: 'app-profile-settings-dialog',
  templateUrl: './profile-settings-dialog.component.html',
  styleUrls: ['./profile-settings-dialog.component.scss']
})
export class ProfileSettingsDialogComponent implements OnInit {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ProfileSettingsDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteProfileDialogComponent, {
      width: '600px'
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-delete-profile-dialog',
  templateUrl: './delete-profile-dialog.component.html',
  styleUrls: ['./delete-profile-dialog.component.scss']
})
export class DeleteProfileDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteProfileDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

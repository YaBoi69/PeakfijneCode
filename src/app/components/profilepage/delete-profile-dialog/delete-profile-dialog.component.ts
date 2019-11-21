import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {SessionService} from '../../../services/session.service';

@Component({
  selector: 'app-delete-profile-dialog',
  templateUrl: './delete-profile-dialog.component.html',
  styleUrls: ['./delete-profile-dialog.component.scss']
})
export class DeleteProfileDialogComponent implements OnInit {
  private passWord: string;
  private passwordCheck: string;
  private deleteCheckBox: boolean;
  private currentUser: User;
  hide = true;

  constructor(public dialogRef: MatDialogRef<DeleteProfileDialogComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.passwordCheck = 'Niels';
    this.deleteCheckBox = false;
  }

  deleteProfile() {
    console.log("waarom delete je account?")
    if (SessionService.currentUser) {
      SessionService.currentUser.deactivateUser();
    }
  }
}

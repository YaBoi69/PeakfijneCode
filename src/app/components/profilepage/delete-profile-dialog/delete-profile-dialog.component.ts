import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {SessionService} from '../../../services/session.service';
import {User} from "../../../model/user";

@Component({
  selector: 'app-delete-profile-dialog',
  templateUrl: './delete-profile-dialog.component.html',
  styleUrls: ['./delete-profile-dialog.component.scss']
})
export class DeleteProfileDialogComponent implements OnInit {
  private password: string;
  private passwordCheck: string;
  private deleteCheckBox: boolean;
  hide = true;
  constructor(public dialogRef: MatDialogRef<DeleteProfileDialogComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.passwordCheck = SessionService.currentUser.getPassword();
    this.deleteCheckBox = false;
  }

  deleteProfile() {
    if (SessionService.currentUser) {
        SessionService.currentUser.deactivateUser();
    }
  }
}

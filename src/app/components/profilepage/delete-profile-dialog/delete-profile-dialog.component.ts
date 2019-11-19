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
  private currentUser: User;
  hide = true;
  constructor(public dialogRef: MatDialogRef<DeleteProfileDialogComponent>, private sessionService: SessionService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.currentUser = this.sessionService.currentUser;
    this.passwordCheck = this.currentUser.getPassword();
    this.deleteCheckBox = false;
  }

  deleteProfile() {
    if (this.currentUser) {
        this.currentUser.deactivateUser();
    }
  }
}

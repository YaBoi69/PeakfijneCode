import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {SessionService} from '../../../services/session.service';

@Component({
  selector: 'app-delete-profile-dialog',
  templateUrl: './delete-profile-dialog.component.html',
  styleUrls: ['./delete-profile-dialog.component.scss']
})
export class DeleteProfileDialogComponent implements OnInit {
  private nickName: string;
  private nickNameCheck: string;
  private deleteCheckBox: boolean;

  constructor(public dialogRef: MatDialogRef<DeleteProfileDialogComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.nickNameCheck = 'Niels';
    this.deleteCheckBox = false;
  }

  deleteProfile() {
    if (SessionService.currentUser) {
      SessionService.currentUser.deactivateUser();
    }
  }
}

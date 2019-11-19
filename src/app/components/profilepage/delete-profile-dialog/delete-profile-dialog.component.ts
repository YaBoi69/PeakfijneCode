import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {SessionService} from '../../../services/session.service';
import {User} from "../../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-profile-dialog',
  templateUrl: './delete-profile-dialog.component.html',
  styleUrls: ['./delete-profile-dialog.component.scss']
})
export class DeleteProfileDialogComponent implements OnInit {
  private passWord: string;
  private passwordCheck: string;
  private currentUser: User;
  private deleteCheckBox: boolean;
  private currentUser: User;
  hide = true;

  constructor(public router: Router, public dialogRef: MatDialogRef<DeleteProfileDialogComponent>, private sessionService: SessionService) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.passwordCheck = 'wachtwoord123';
    this.deleteCheckBox = false;
  }
  
  deleteProfile() {
    console.log("waarom delete je account?");
    if (this.sessionService.currentUser != null) {
      this.sessionService.currentUser.subscribe(currentUser => this.currentUser.deactivateUser());
      this.router.navigate(['']);
      this.dialogRef.close();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SessionService} from "../../../services/session.service";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";



@Component({
  selector: 'app-login-or-register-dialog',
  templateUrl: './login-or-register-dialog.component.html',
  styleUrls: ['./login-or-register-dialog.component.scss']
})
export class LoginOrRegisterDialogComponent implements OnInit {
  hide = true;
  private form: NgForm;
  private nickName: string;
  private eMail: string;
  private passWord: string;
  private readonly SNACKBAR_DURATION = 5000;

  constructor(public sessionService: SessionService, public dialogRef: MatDialogRef<LoginOrRegisterDialogComponent>, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  /**
   *log in function
   */
  signIn() {
    if(this.sessionService.signIn(this.eMail, this.passWord) == true) {
      this.dialogRef.close();
      this.openSnackBar("Log In Succesfull")
    }else{
      this.openSnackBar("Something went wrong")
    }
  }


  /**
   * register function
   */
  signUp() {
    if(this.sessionService.signUp(this.eMail, this.nickName, this.passWord)) {
      this.dialogRef.close();
      this.openSnackBar("Register Succesfull")
    }else{
      this.openSnackBar("Something went wrong")
    }
  }
  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: this.SNACKBAR_DURATION,
    });
  }
}

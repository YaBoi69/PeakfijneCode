import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SessionService} from "../../../services/session.service";



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

  constructor(public sessionService: SessionService) { }

  ngOnInit() {
  }

  /**
   *log in function
   */
  signIn() {
    this.sessionService.signIn(this.eMail, this.passWord);
  }


  /**
   * register function
   */
  signUp() {
    this.sessionService.signUp(this.eMail, this.nickName, this.passWord);
  }
}

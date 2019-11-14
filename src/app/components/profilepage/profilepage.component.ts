import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialog, MatIconRegistry} from "@angular/material";
import {ChangePasswordDialogComponent} from "./change-password-dialog/change-password-dialog.component";
import {ProfileSettingsDialogComponent} from "./profile-settings-dialog/profile-settings-dialog.component";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit {
  @ViewChild('profileForm', {static: false}) private profileForm: NgForm;
  private nickName: string;
  private eMail: string;

  constructor(public dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'back',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/img/go-back-left-arrow.svg'));
  }
  ngOnInit() {
    this.nickName = "Niels";
    this.eMail = "nielsbier72@gmail.com";
  }
  openPasswordDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '600px'
    });
  }
  openSettingsDialog(): void{
    const dialogRef = this.dialog.open(ProfileSettingsDialogComponent, {
      width: '600px'
    });
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialog} from "@angular/material";
import {ChangePasswordDialogComponent} from "./change-password-dialog/change-password-dialog.component";
import {DeleteProfileDialogComponent} from "./delete-profile-dialog/delete-profile-dialog.component";


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit {
  @ViewChild('profileForm', {static: false}) private profileForm: NgForm;
  private nickName: string;
  private eMail: string;

  constructor(public dialog: MatDialog) {
  }
  ngOnInit() {
    this.nickName = "Niels";
    this.eMail = "nielsbier72@gmail.com";
  }
  openPasswordDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '600px'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // this.animal = result;
    // });
  }
  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteProfileDialogComponent, {
      width: '600px'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // this.animal = result;
    // });
  }
}

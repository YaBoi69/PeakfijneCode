import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  @ViewChild('profileForm', {static: false}) private profileForm: NgForm;
  isReadOnly: boolean;
  private nickName: string;

  constructor() {
  }

  ngOnInit() {
    this.nickName = "Niels";
    this.isReadOnly = true;
    $('.modal').modal();
  }

  toggle() {
    if (this.isReadOnly === true) {
      this.isReadOnly = false;
    } else {
      this.isReadOnly = true;
    }

  }
}

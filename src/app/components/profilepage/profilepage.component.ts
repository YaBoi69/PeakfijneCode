import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import $ = require('jquery');

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  @ViewChild('profileForm', {static: false}) private profileForm: NgForm;
  isReadOnly: boolean;

  constructor() {
  }

  ngOnInit() {
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

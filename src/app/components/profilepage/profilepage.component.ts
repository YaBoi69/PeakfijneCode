import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit {
  @ViewChild('profileForm', {static: false}) private profileForm: NgForm;
  private nickName: string;

  constructor() {
  }

  ngOnInit() {
    this.nickName = "Niels";
  }
}

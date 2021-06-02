import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.page.html',
  styleUrls: ['./drive.page.scss'],
})
export class DrivePage implements OnInit {

  slideOpts = {
    slidesPerView: 1.5
  };

  constructor() { }

  ngOnInit() {
  }

}

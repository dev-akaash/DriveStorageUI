import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    slidesPerView: 1.5
  };

  constructor(
    private router: Router
  ) {}

  onDrive() {
    this.router.navigateByUrl('/drive');
  }

}

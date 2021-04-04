import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { customRoute } from './services/routing.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent extends customRoute {
  title = 'colony-game';

  constructor(router: Router) {
    super(router);
  }
}

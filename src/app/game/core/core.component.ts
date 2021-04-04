import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customRoute } from '../../services/routing.service';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.less']
})
export class CoreComponent extends customRoute implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  ngOnInit(): void {
  }
}

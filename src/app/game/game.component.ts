import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EngineService} from './engine/engine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {
  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: EngineService, private router: Router) 
  {    
  }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

  isHomeRoute() {
    //this.engServ.homeRender();
    
    return this.router.url === '/';
  }
}

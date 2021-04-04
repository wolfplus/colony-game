import { WindowRefService } from '../../services/window-ref.service';
import {ElementRef, Injectable, NgZone} from '@angular/core';
import * as BABYLON from 'babylonjs';
import { Planet } from './Planet/Planet';

@Injectable({ providedIn: 'root' })
export class EngineService {
  private canvas: HTMLCanvasElement;
  private engine: BABYLON.Engine;
  private camera: BABYLON.FreeCamera;
  private scene: BABYLON.Scene;
  private light: BABYLON.Light;

  private sphere: BABYLON.Mesh;
  private planet: Planet;

  public constructor(
    private ngZone: NgZone,
    private windowRef: WindowRefService,
  ) {}

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    // Then, load the Babylon 3D engine:
    this.engine = new BABYLON.Engine(this.canvas,  true);

    // create a basic BJS Scene object
    this.scene = new BABYLON.Scene(this.engine);
    this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    // create a FreeCamera, and set its position to (x:5, y:10, z:-20 )
    this.camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(5, 10, -20), this.scene);

    // target the camera to scene origin
    this.camera.setTarget(BABYLON.Vector3.Zero());

    // attach the camera to the canvas
    this.camera.attachControl(this.canvas, false);

    // create a basic light, aiming 0,1,0 - meaning, to the sky
    this.light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);

    this.planet = new Planet('planet', {      
    terrainSeed: 'Rogue ll', // 'Foo' was also a good initial value
    type: 'terra',
    landMassSize: 50,
    roughness: 2,
    seaLevel: 25,
    atmosphereDensity: 2,
    atmosphereColor: 'blue'}, this.scene);
console.log('flouuz');

    // simple rotation along the y axis
    this.scene.registerAfterRender(() => {
      this.planet.rotate (
        new BABYLON.Vector3(0, 1, 0),
        0.02,
        BABYLON.Space.LOCAL
      );
    });    
  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      const rendererLoopCallback = () => {
        this.scene.render();
      };

      if (this.windowRef.document.readyState !== 'loading') {
        this.engine.runRenderLoop(rendererLoopCallback);
      } else {
        this.windowRef.window.addEventListener('DOMContentLoaded', () => {
          this.engine.runRenderLoop(rendererLoopCallback);
        });
      }

      this.windowRef.window.addEventListener('resize', () => {
        this.engine.resize();
      });
    });
  }
}

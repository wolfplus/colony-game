import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WindowRefService } from './services/window-ref.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { NavigationComponent } from './game/navigation/navigation.component';
import { CoreComponent } from './game/core/core.component';
import { HomeComponent } from './game/core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    NavigationComponent,
    CoreComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WindowRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

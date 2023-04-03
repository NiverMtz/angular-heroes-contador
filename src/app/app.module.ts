import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { LOTRModule } from './lotr/lotr.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    LOTRModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoJogosComponent } from './video-jogos.Component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoJogosComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

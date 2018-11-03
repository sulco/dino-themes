import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrexComponent } from './dinos/trex/trex.component';
import { StegoComponent } from './dinos/stego/stego.component';
import { PteroComponent } from './dinos/ptero/ptero.component';
import { TriceComponent } from './dinos/trice/trice.component';
import { BrachioComponent } from './dinos/brachio/brachio.component';

@NgModule({
  declarations: [
    AppComponent,
    TrexComponent,
    StegoComponent,
    PteroComponent,
    TriceComponent,
    BrachioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AppModule class: voeg modules en componenten toe
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WerelddeelComponent } from './werelddeel/werelddeel.component';
import { FormsModule } from '@angular/forms';
import { WerelddeelDetailComponent } from './werelddeel-detail/werelddeel-detail.component'; // <-- NgModel lives here

// Elk component moet hier declared worden
@NgModule({
  declarations: [
    AppComponent,
    WerelddeelComponent,
    WerelddeelDetailComponent
  ],
  // import Modules van de Angular bibliotheek
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

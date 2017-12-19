import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { CapitalizePipe } from './capitalize.pipe';
import { JokerService } from './joker.service';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [JokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

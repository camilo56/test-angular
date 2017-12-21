import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { CapitalizePipe } from './capitalize.pipe';
import { JokerService } from './joker.service';
import { TestComponent } from './test/test.component';
import { UserTestComponent } from './user-test/user-test.component';
import { ListTestComponent } from './list-test/list-test.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    CapitalizePipe,
    TestComponent,
    UserTestComponent,
    ListTestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [JokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

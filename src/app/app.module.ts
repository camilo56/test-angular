import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { CapitalizePipe } from './capitalize.pipe';
import { JokerService } from './joker.service';
import { TestComponent } from './test/test.component';
import { UserTestComponent } from './user-test/user-test.component';
import { ListTestComponent } from './list-test/list-test.component';
import { FormTestComponent } from './form-test/form-test.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    CapitalizePipe,
    TestComponent,
    UserTestComponent,
    ListTestComponent,
    FormTestComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [JokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

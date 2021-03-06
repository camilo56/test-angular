import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { JokerService } from '../joker.service';

@Component({
  selector: 'app-joke',
  template: ` <div class="jumbotron">
                <h1 id="title">{{title}}</h1>
                <h5 id="title">{{title | capitalize}}</h5>
                <h6>{{joke}}</h6>
                <button id="mybtn" class="btn btn-primary btn-lg" (click)="getJoke()">Get next joke</button>
              </div>
            `
})
export class JokeComponent implements OnInit {

  joke: string;
  title = 'Chuck Norris Jokes';

  constructor(private jokerService: JokerService) { }

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.jokerService.getJoke()
      .subscribe(joke => this.joke = joke);
  }

}

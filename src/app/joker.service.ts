import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JokerService {

  url = 'http://api.icndb.com/jokes/random/';

  constructor(private http: Http) { }

  getJoke(): Observable<any> {
    return this.http.get(this.url)
      .map(response => response.json().value.joke);
  }

  getJokeId(id): Observable<any> {
    return this.http.get(this.url + id)
      .map(response => response.json().value.joke);
  }

  postJson(): Observable<any> {
    const body = `title=foo&body=bar`;

    return this.http.post('https://jsonplaceholder.typicode.com/posts', body, this.makeHeaders())
      .map(response => response.json());
  }

  getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(response => response.json());
  }

  makeHeaders() {
    const headers = new Headers();
    headers.append('API-TOKEN', 'Camilo1991');
    return{
      headers
    };
  }
}

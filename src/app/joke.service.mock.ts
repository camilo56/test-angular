import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

export class MockJokeService {

  getUsers(): Observable<any[]> {

    return Observable.of([
        {
            'id': 503,
            'name': 'camiloHimura',
            'username': 'camilo56',
            'email': 'camiloColmenares@hotmail.com',
        },
        {
            'id': 502,
            'name': 'Stick',
            'username': 'StickChachetes',
            'email': 'Stick@hotmail.com',
        },
        {
            'id': 501,
            'name': 'July',
            'username': 'JulyCantaleta',
            'email': 'July@hotmail.com',
        }
    ]);
  }
}

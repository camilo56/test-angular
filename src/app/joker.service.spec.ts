import { inject, fakeAsync, tick, TestBed } from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { Http, Connection, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions, HttpModule} from '@angular/http';

import { JokerService } from './joker.service';
import { USERMOCK } from './mock.respose';

fdescribe('JokerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        JokerService,
        { provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },
      ]
    });

    fakeAsync((userService, mockBackend) => {
      const mockResponse = new ResponseOptions({body: JSON.stringify(USERMOCK)});
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(mockResponse));
      });
    });

  });

  it('Service Created', inject([JokerService], (service: JokerService) => {
    expect(service).toBeTruthy();
  }));

  it('Take data',
    inject([JokerService, MockBackend], fakeAsync((userService, mockBackend) => {
      userService.getJoke(1).subscribe(response => expect(response).toString());
      //Run service
      tick();
    }))
  );

  it('Test url',
    inject([JokerService, MockBackend], fakeAsync((userService, mockBackend) => {
      expect(userService.url).toBe('http://api.icndb.com/jokes/random');
    }))
  );

});

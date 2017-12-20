import { inject, fakeAsync, tick, TestBed } from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { Http, Connection, ConnectionBackend, BaseRequestOptions,
        Response, ResponseOptions, HttpModule, RequestMethod} from '@angular/http';

import { JokerService } from './joker.service';
import { USERMOCK } from './mock.respose';

fdescribe('JokerService', () => {
  beforeEach(() => {

    /*Give jasmine the angular's context about our service*/
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

  });

  it('Service Created', inject([JokerService], (service: JokerService) => {
    expect(service).toBeTruthy();
  }));

  it('Take data',
    inject([JokerService, MockBackend], fakeAsync((JokerService, mockBackend) => {

      let dataResponse, dataUrl;
      // Arrange
      mockBackend.connections.subscribe((connection: MockConnection) => {
        dataUrl = connection.request.url;
        connection.mockRespond(new Response( new ResponseOptions({body: JSON.stringify(USERMOCK)}) ));
      });
      // Act
      JokerService.getJoke().subscribe(response => dataResponse = response);
      tick();

      // Assert
      expect(dataUrl).toEqual('http://api.icndb.com/jokes/random/');
      expect(dataResponse).toBeDefined();
      expect(dataResponse).toEqual(USERMOCK.value.joke);
    }))
  );

  it('Take data with params',
    inject([JokerService, MockBackend], fakeAsync((JokerService, mockBackend) => {

      let dataResponse, dataUrl;
      // Arrange
      mockBackend.connections.subscribe((connection: MockConnection) => {
        dataUrl = connection.request.url;
        connection.mockRespond(new Response( new ResponseOptions({body: JSON.stringify(USERMOCK)}) ));
      });
      // Act
      JokerService.getJokeId('1991').subscribe(response => dataResponse = response);
      tick();

      // Assert
      expect(dataUrl).toEqual('http://api.icndb.com/jokes/random/1991');
      expect(dataResponse).toBeDefined();
      expect(dataResponse).toEqual(USERMOCK.value.joke);
    }))
  );

  it('Take data error',
    inject([JokerService, MockBackend], fakeAsync((JokerService, mockBackend) => {

      let dataResponse, dataError;
      // Arrange
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockError( new Error('Error') );
      });
      // Act
      JokerService.getJoke().subscribe(response => dataResponse = response,
                                        error => dataError = error);
      tick();

      // Assert
      expect(dataResponse).toBeUndefined();
      expect(dataError).toBeDefined();
    }))
  );

  it('Test protocol',
    inject([JokerService, MockBackend], fakeAsync((JokerService, mockBackend) => {

      let dataResponse, dataMethod;
      // Arrange
      mockBackend.connections.subscribe((connection: MockConnection) => {
        dataMethod = connection.request.method;
        connection.mockRespond(new Response( new ResponseOptions({body: JSON.stringify(USERMOCK)}) ));
      });
      // Act
      JokerService.getJoke().subscribe(response => dataResponse = response);
      tick();

      // Assert
      expect(dataMethod).toBe(RequestMethod.Get);
    }))
  );

  it('Test Header',
    inject([JokerService, MockBackend], fakeAsync((JokerService, mockBackend) => {

      let dataResponse, dataHeader;
      // Arrange
      mockBackend.connections.subscribe((connection: MockConnection) => {
        dataHeader = connection.request.headers.get('API-TOKEN');
        connection.mockRespond(new Response( new ResponseOptions({body: JSON.stringify(USERMOCK)}) ));
      });
      // Act
      JokerService.postJson().subscribe(response => dataResponse = response);
      tick();

      // Assert
      expect(dataHeader === null).toBeFalsy();
      expect(dataHeader).toBe('Camilo1991');
    }))
  );

});

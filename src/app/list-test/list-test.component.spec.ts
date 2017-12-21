import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTestComponent } from './list-test.component';
import { UserTestComponent } from '../user-test/user-test.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { JokerService } from '../joker.service';
import { MockJokeService } from '../joke.service.mock';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import { HttpModule } from '@angular/http';

describe('ListTestComponent', () => {
  let element: DebugElement;
  let jokerService: JokerService;
  let component: ListTestComponent;
  let fixture: ComponentFixture<ListTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTestComponent, UserTestComponent ],
      imports: [ HttpModule ],
      providers: [
        {provide: JokerService, useClass: JokerService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
    jokerService = fixture.debugElement.injector.get(JokerService);
  });

  // it('should call onInit', () => {
  //   const mockResponse = Observable.of(
  //     [{ 'id': 1, 'name': 'camiloHimura',
  //     'username': 'camilo56', 'email': 'camiloColmenares@hotmail.com',
  //   }]);

  //   const spy = spyOn(jokerService, 'getUsers').and.returnValue(mockResponse);
  //   fixture.detectChanges();

  //   expect(jokerService.getUsers).toHaveBeenCalled();
  //   expect(component.selectedUser).toEqual('camiloHimura');
  // });

  it('should call user', () => {
    fixture.detectChanges();

    const mockResponse = Observable.of(
      { 'id': 1, 'name': 'camiloHimura',
      'username': 'camilo56', 'email': 'camiloColmenares@hotmail.com',
      });

    const spy = spyOn(jokerService, 'getUser').and.returnValue(mockResponse);
    component.getUser(1);

    expect(jokerService.getUser).toHaveBeenCalled();
    expect(component.selectedUser).toEqual('camiloHimura');
    expect(jokerService.getUser).toHaveBeenCalledWith(1);
  });

});

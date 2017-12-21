import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTestComponent } from './list-test.component';
import { UserTestComponent } from '../user-test/user-test.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { JokerService } from '../joker.service';
import { MockJokeService } from '../joke.service.mock';

describe('ListTestComponent', () => {
  let component: ListTestComponent;
  let fixture: ComponentFixture<ListTestComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTestComponent, UserTestComponent ],
      providers: [
        {provide: JokerService, useClass: MockJokeService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should have three users', () => {
    expect(component.users.length).toBe(3);
  });

  it('should have app-user-test', () => {
    const ele = fixture.debugElement.query(By.css('app-user-test'));
    expect(ele).toBeTruthy();
  });

  it('should recive event from component child', () => {
    const button = fixture.debugElement.query(By.css('app-user-test button.btnThrow'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.getUser).toEqual(component.users[0].name);
  });

});

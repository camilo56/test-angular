import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestComponent } from './user-test.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UserTestComponent', () => {
  let component: UserTestComponent;
  let fixture: ComponentFixture<UserTestComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should show email when the user chicked botton ', () => {
    const button = fixture.debugElement.query(By.css('button.btnEmail'));
    const paragraph = element.query(By.css('p.hellow')).nativeElement;
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(paragraph.textContent).toEqual('Tu email: Camilo56@gmail.com');
  });

  it('Should thrwo event to it´s father', () => {
    let data: string;
    component.throwEvent.subscribe(info => data = info);
    const button = fixture.debugElement.query(By.css('button.btnThrow'));
    button.triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(data).toEqual('Camilo56');
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { DebugElement } from '@angular/core';
import { By } from 'selenium-webdriver';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Has property name', () => {
    expect(component.name).toBe('camilo');
  });

  it('should the name be in template', () => {
    expect(element.nativeElement.querySelector('p').textContent).toEqual('camilo');
  });

  it('change the name´s value', () => {
    component.name = 'camilo56';
    fixture.detectChanges();
    expect(element.nativeElement.querySelector('p').textContent).toEqual('camilo56');
  });

  it('Confirm input default´s value', () => {
    expect(component.user).toString();
    expect(component.user).toEqual('Cristian');
  });

  it('Confirm input default´s value in template', () => {
    fixture.detectChanges();
    expect(element.nativeElement.querySelector('p.input').textContent).toEqual('input - Cristian');
  });


});

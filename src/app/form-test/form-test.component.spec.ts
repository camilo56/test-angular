import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormTestComponent } from './form-test.component';

describe('FormTestComponent', () => {
  let component: FormTestComponent;
  let fixture: ComponentFixture<FormTestComponent>;
  let el, input, form;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ FormTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be form create', () => {
    expect(component.testForm).toBeTruthy();
  });

  it('should be field create', () => {
    expect(component.testFormField).toBeTruthy();
  });

  it('should be name create', () => {
    expect(component.testFormName).toBeTruthy();
  });

  describe('Test field', () => {

    it('should have required', () => {
      component.testFormField.setValue('12345');
      expect(component.testFormField.valid).toBeTruthy();
    });

    it('should have a error', () => {
      component.testFormField.setValue('');
      expect(component.testFormField.invalid).toBeTruthy();
    });

    it('validates and triggers events for form', async(() => {

      input = fixture.debugElement.query(By.css('input#filed')).nativeElement;
      input.value = '84754654';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const msgs = el.querySelectorAll('.ui.message');
        expect(msgs.length).toEqual(1);
        expect(msgs[0].innerHTML).toContain('SKU is invalid');
      });
    }));

    it('validates required', async(() => {

      input = fixture.debugElement.query(By.css('input#filed')).nativeElement;
      input.value = '';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const msgs = el.querySelectorAll('.ui.message');
        expect(msgs.length).toEqual(1);
        expect(msgs[0].innerHTML).toContain('SKU is required');
      });
    }));

  });
});

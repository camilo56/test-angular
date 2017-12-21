import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorMilo } from './validator';
import { FormControl } from '@angular/forms';

describe('validators', () => {
  it('test', () => {
    const mockControl = new FormControl();
    mockControl.setValue('camilo');
    const response = ValidatorMilo.validate(mockControl);
    expect(response.invalid).toBeDefined();
    expect(response.invalid).toBeTruthy();
  });

  it('test 2', () => {
    const mockControl = new FormControl();
    mockControl.setValue('123camilo');
    const response = ValidatorMilo.validate(mockControl);
    expect(response).toBeNull();
  });

});

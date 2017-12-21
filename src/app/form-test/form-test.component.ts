import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorMilo } from './validator';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  testForm: FormGroup;
  testFormField: FormControl;
  testFormName: FormControl;
  constructor() {
    this.makeForm();
  }

  ngOnInit() {
  }

  private makeForm() {
    this.testFormField = new FormControl('', [Validators.required, ValidatorMilo.validate]);
    this.testFormName = new FormControl('', [Validators.required, ValidatorMilo.validate]);

    this.testForm = new FormGroup({
      field: this.testFormField,
      name: this.testFormName
    });
  }

  onSubmit(form: any) {
    console.log(form);
  }

}

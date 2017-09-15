import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
function ratingRange(c: AbstractControl): {[key: string]: boolean} | null {
  // return type  {[key: string]: boolean} | null
  if (c.value !== undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
    return { 'range': true};
  }
  return null;

}
class Customer {
  firstname: string;
  lastname: string;
  email: string;
  rating: string;
}
@Component({
  selector: 'app-template-form2',
  templateUrl: './template-form2.component.html',
  styleUrls: ['./template-form2.component.css']
})
export class TemplateForm2Component implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern('')]],
      rating: ['', ratingRange]
    });
  }

}

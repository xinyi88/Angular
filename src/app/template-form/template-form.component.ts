import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // step 1
import { SelectItem } from 'primeng/primeng';
import { Signup } from './signup';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model = new Signup('', '',  '', 'Please select...', 20, null);
  // model: Signup;
  classifyVal = ['class 1', 'class 2'];
  cities: SelectItem[];
  selectedCity: string;

  constructor() {
    this.cities = [];
    this.cities.push({label: 'Select City', value: null});
    this.cities.push({label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}});
    this.cities.push({label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}});
    this.cities.push({label: 'London', value: {id: 3, name: 'London', code: 'LDN'}});
    this.cities.push({label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}});
    this.cities.push({label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}});
  }

  ngOnInit() {
  }
  // step 2
  registerUser(form: NgForm) {
    console.log(form.value);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ratingRange(c): {[key: string]: boolean} | null {
    // return type  {[key: string]: boolean} | null
    if (c.value !== undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
      return { 'range': true};
    }
    return null;
  }
}

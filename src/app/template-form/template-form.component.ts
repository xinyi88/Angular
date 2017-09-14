import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // step 1
import { Signup } from './signup';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model = new Signup('', '', 'Please select...');
  // model: Signup;

  classifyVal = ['class 1', 'class 2', 'class 3'];
  constructor() { }

  ngOnInit() {
  }
  // step 2
  registerUser(form: NgForm) {
    console.log(form.value);
  }
}

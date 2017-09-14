import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // step 1
import { Signup } from './signup';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model = new Signup('', '');
  // model: Signup;
  constructor() { }

  ngOnInit() {
  }
  // step 2
  registerUser(form: NgForm) {
    console.log(form.value);
  }
}

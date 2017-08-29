import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  public happyText = 'Manager is on vacation';

  public myTodos = [
    'Wash Coffee Mug',
    'Take a shower',
    'Say hi to the new hire'
  ];
  constructor() { }

  ngOnInit() {
    // ngOnInit will be executed during the initialization of each component
    this.happyText = 'Manager is sick';
  }
  makeHappier() {
    this.happyText = 'Manager got fired';
  }
}

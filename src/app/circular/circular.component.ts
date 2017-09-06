import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {
  private _setterGetter = '';
  private _forParent = '';
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

  // normal usage: get and set to init private parameter
  set name(name: string){
    this._setterGetter = name;
  }
  get name(): string{
    return this._setterGetter;
  }

  @Input()
  set child(name: string){
    this._forParent = (name && name.trim()) || '<no name set>';
  }
  get child(): string{
    return this._forParent;
  }
}

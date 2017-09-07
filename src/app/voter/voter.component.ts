import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  _name: string;
  // child component exposes an EventEmitter property with which it emits
  // events when sth happens
  @Output() onVoted = new EventEmitter<boolean>();

  voted = false;
  constructor() { }

  ngOnInit() {
  }
  vote(agreed: boolean) {
    // click function -> onVoted emit this to parent component
    this.onVoted.emit(agreed);
    this.voted = true;
  }

  @Input()
  set name(name: string) {
    this._name = name || '<No name set>';
  }
  get name(): string {
    return this._name;
  }
}

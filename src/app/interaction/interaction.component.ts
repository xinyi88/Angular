import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {
  @Input() childNumber: number;
  constructor() { }

  ngOnInit() {
  }

}

// like dll, namespace in C#
import { Component } from '@angular/core';

// like attribute in C#
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  twoWayBinding = '';
  parentNumber: any= {
    number: 15
  };
  public list = [ 'Mr.', 'Ms.', ' ', 'Sr.'];
}

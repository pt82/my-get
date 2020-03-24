import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app123';
  desc = 'my super app123'
  products = [
{
  title:'прод1',
  desc:'описание прод',
},
{
  title:'прод2',
  desc:'описание прод2',
}
  ]
}

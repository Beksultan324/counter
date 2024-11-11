import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public count = 0;
  public change(val: boolean) {
    val ? ++this.count : --this.count;
  }
}

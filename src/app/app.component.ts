import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cardTitle: string = '';

  public onCardTitleChange(value: string): void {
    this.cardTitle = value;
  }
}

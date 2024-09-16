import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { CardType } from './app.values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cardContainerTitle: string = '';
  public cardTitle: string = '';

  public cardStatus$: Observable<CardType> = this.appService.getCardStatus();

  constructor(
    private appService: AppService,
  ) { }

  public onCardTitleChange(value: string): void {
    this.cardTitle = value;
  }
}

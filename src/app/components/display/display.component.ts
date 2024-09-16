import { AppService } from '../../app.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {
  public cardContent: string = '';
  public cardSubtitle: number = 0;
  public cardTitle: string = '';

  @Output() public cardTitleChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private appService: AppService,
  ) { }

  protected onCardTitleChange(value: string): void {
    this.cardTitleChange.emit(value);
  }

  protected onCardContentChange(value: string): void {
    this.appService.setCardContent(value);
  }

  protected onCardSubtitleChange(value: number): void {
    this.appService.setCardSubtitle(value);
  }
}

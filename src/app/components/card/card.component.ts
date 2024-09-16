import { AppService } from '../../app.service';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public cardContent$: Observable<string> = this.appService.getCardContent();
  public cardSubtitle$: Observable<number> = this.appService.getCardSubtitle();

  @Input() public cardTitle: string = '';

  constructor(
    private appService: AppService,
  ) { }
}

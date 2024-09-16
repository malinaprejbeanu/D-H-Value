import { AppService } from '../../app.service';
import { CardType } from '../../app.values';
import { Component, HostBinding, Input } from '@angular/core';
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

  @HostBinding('attr.state') @Input() public type: CardType = CardType.DEFAULT;

  public get classes(): string {
    return ['custom-card__' + this.type]
      .filter((cssClass: string) => !!cssClass)
      .join(' ');
  }

  constructor(
    private appService: AppService,
  ) { }
}

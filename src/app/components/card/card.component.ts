import { AppService } from '../../app.service';
import { CardType } from '../../app.values';
import { Component, Input } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public readonly cardType = CardType;

  private cardContainerTitleValue: string = '';
  private cardContent: string = '';
  private cardTitleValue: string = '';

  public cardContent$: Observable<string> = this.appService.getCardContent().pipe(
    tap((value: string) => {
      this.cardContent = value;
      this.setState();
    })
  );
  public cardSubtitle$: Observable<number> = this.appService.getCardSubtitle();

  public isVisible: boolean = false;
  public state: CardType = CardType.DISABLED;

  @Input() public set cardTitle(value: string) {
    this.cardTitleValue = value;
    this.setState();
  }
  public get cardTitle(): string {
    return this.cardTitleValue;
  }
  @Input() public set cardContainerTitle(value: string) {
    this.cardContainerTitleValue = value;
    this.setState();
  }
  public get cardContainerTitle(): string {
    return this.cardContainerTitleValue;
  }

  public get classes(): string {
    return ['custom-card__' + this.state]
      .filter((cssClass: string) => !!cssClass)
      .join(' ');
  }

  constructor(
    private appService: AppService,
  ) { }

  public onSelect(value: boolean): void {
    if (this.state === CardType.DISABLED) {
      return;
    }

    this.isVisible = value;

    if (value) {
      this.appService.increaseSubtitle();
      this.state = CardType.ACTIVE;
      this.appService.setCardStatus(this.state);
    } else {
      this.state = this.cardTitleValue && this.cardContent && this.cardContainerTitleValue ? CardType.DEFAULT : CardType.DISABLED;
      this.appService.setCardStatus(this.state);
    }
  }

  public onMouseEnter(): void {
    if (this.state === CardType.DISABLED) {
      return;
    }
    this.state = CardType.HOVER;
    this.appService.setCardStatus(this.state);
  }

  public onMouseLeave(): void {
    if (this.isVisible) {
      this.state = CardType.ACTIVE;
      this.appService.setCardStatus(this.state);
      return;
    }
    this.state = this.cardTitleValue && this.cardContent && this.cardContainerTitleValue ? CardType.DEFAULT : CardType.DISABLED;
    this.appService.setCardStatus(this.state);
  }

  private setState(): void {
    this.state = this.cardTitleValue && this.cardContent && this.cardContainerTitleValue ? CardType.DEFAULT : CardType.DISABLED;
    this.appService.setCardStatus(this.state);
  }
}

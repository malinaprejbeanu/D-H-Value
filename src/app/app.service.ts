import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CardType } from './app.values';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private cardContent$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private cardStatus$: BehaviorSubject<CardType> = new BehaviorSubject<CardType>(CardType.DEFAULT);
  private cardSubtitle$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public getCardContent(): Observable<string> {
    return this.cardContent$.asObservable();
  }

  public getCardSubtitle(): Observable<number> {
    return this.cardSubtitle$.asObservable();
  }

  public getCardStatus(): Observable<CardType> {
    return this.cardStatus$.asObservable();
  }

  public setCardContent(value: string): void {
    this.cardContent$.next(value ?? '');
  }

  public setCardStatus(value: CardType): void {
    this.cardStatus$.next(value);
  }

  public increaseSubtitle(): void {
    let value: number = this.cardSubtitle$.getValue() ?? 0;
    value++;
    this.cardSubtitle$.next(value);
  }
}

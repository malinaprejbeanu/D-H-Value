import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private cardContent$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private cardSubtitle$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public getCardContent(): Observable<string> {
    return this.cardContent$.asObservable();
  }

  public getCardSubtitle(): Observable<number> {
    return this.cardSubtitle$.asObservable();
  }

  public setCardContent(value: string): void {
    this.cardContent$.next(value ?? '');
  }

  public setCardSubtitle(value: number): void {
    this.cardSubtitle$.next(value ?? 0);
  }
}

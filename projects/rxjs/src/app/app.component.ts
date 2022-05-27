import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, NEVER, Observable } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';
import { IApi } from './models/api';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs';
  data$: Observable<IApi[]>;
  financeAction = new BehaviorSubject<string>('');
  readonly financeObs$ = this.financeAction.asObservable();

  constructor(private dataService: DataService) {
    var apiData$ = this.dataService.getData$().pipe(
      shareReplay(1),
      catchError(err => NEVER)
    );
    let tempDataArray = [];


    this.data$ = this.financeObs$.pipe(
      switchMap(value => apiData$.pipe(
        map(data => data.filter(item => item.Category === value || ((value === '')?true:false)))
      ))
    );

  }

  filterFinance(event: any) {
    event.checked
      ? this.financeAction.next('Finance')
      : this.financeAction.next('');
  }
}

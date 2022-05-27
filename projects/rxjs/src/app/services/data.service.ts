import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators'
import { IApi } from '../models/api';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  
  constructor(private httpClient: HttpClient) { }

  getData$(): Observable<IApi[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };

    return this.httpClient.get<IApi[]>("../assets/data.json").pipe(
      // map(d => d.entries),
      catchError(err => throwError(err))
    )
  }
}

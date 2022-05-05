import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  // create observable for response
  response$: Subject<Object> = new Subject();

  constructor(private http: HttpClient) { }

  request(method: string, url: string, body: string, headers: any): void {
    this.http.request(method, url, { body, headers }).pipe(
      map(response => {
        this.response$.next(response);
        console.log(response)
        return response;
      })
    ).subscribe();
  }
}

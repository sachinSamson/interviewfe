import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
public endpoint = 'http://localhost:3000/';
  public httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
  constructor(private http: HttpClient) {

  }
  
private extractData(res: Response) {
  let body = res;
  return body || { };
}
getdata(): Observable<any> {
  return this.http.get(this.endpoint + 'users').pipe(
    map(this.extractData));
}

adddata (product,age): Observable<any> {
  console.log(product);
  return this.http.post<any>(this.endpoint + 'users?name='+ product + '&age=' +age, this.httpOptions).pipe(
    tap((product) => console.log(`added product w/ id=${product.id}`))
  );
}
}

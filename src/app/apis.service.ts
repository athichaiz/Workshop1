import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './imovie';

@Injectable({
  providedIn: 'root'
})
export class APIsService {
  
  constructor(private http: HttpClient) { }
  getmovie(Movieid:string): Observable<Array<IMovie>>{
    return this.http.get<Array<IMovie>>('https://638492184ce192ac605bc39a.mockapi.io/Movie/' + Movieid)
  }
}

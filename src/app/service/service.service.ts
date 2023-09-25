import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  addcart(data : any): Observable<any> {
    return this.http.post("http://localhost:3000/shop",data);
  }
  getcart(): Observable<any> {
    return this.http.get("http://localhost:3000/shop");
  }

}

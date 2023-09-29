import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API = environment.BASE_URL;
  constructor(private http : HttpClient) { }

  addcart(data : any): Observable<any> {
    return this.http.post(this.API,data);
  }
  getcart(): Observable<any> {
    return this.http.get(this.API);
  }

}

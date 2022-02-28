import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private readonly http: HttpClient) {}

  getHelloWorld(): Observable<any> {
    const httpHeaders = {
        headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        })
    }
    return this.http.get(environment.api_url, httpHeaders)
  }
}

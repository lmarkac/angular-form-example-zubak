import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  submitForm(data: FormData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

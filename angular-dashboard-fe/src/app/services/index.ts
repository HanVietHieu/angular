import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../helper/const';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}
  // GET request
  getApi(url: string): Observable<any> {
    // return this.http.get(`${API_URL}/get-all-project?id=ALL`);
    let data: any = null;
    try {
        data = this.http.get(url);
    } catch (error) {
        console.log(error);
    }
    return data
  }

  // POST request
  postApi(url: string, project: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let data: any = null;
    try {
      data = this.http.post(url, project, { headers });
    } catch (error) {
      console.log(error);
    }
    return data;
  }

  // PUT request
  putRequestApi(project: any, url: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, project, { headers });
  }
}

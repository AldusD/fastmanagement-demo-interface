import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../models/Application';
import { enviroment } from 'src/enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root'
})

export class ApplicationsServiceService {

  baseUrl: string = enviroment.API;

  constructor(private http: HttpClient) {}

  listApproved(): Observable<{ approved: string[] }> {
    return this.http.get<{ approved: string[] }>(this.baseUrl + "/api/v1/hiring/approved");
  }

  list(): Observable<{ application: Application[] }> {
    return this.http.get<{ application: Application[] }>(this.baseUrl + "/api/v1/hiring/all");
  }

  create(name: string): Observable<number> {
    return this.http.post<number>(this.baseUrl + "/api/v1/hiring/start", { nome: name });
  }

  schedule(id: number): Observable<void> {
    return this.http.post<void>(this.baseUrl + "/api/v1/hiring/schedule", { codCandidato: id });
  }

  approve(id: number): Observable<void> {
    return this.http.post<void>(this.baseUrl + "/api/v1/hiring/approve", { codCandidato: id });
  }

  disqualify(id: number): Observable<void> {
    return this.http.post<void>(this.baseUrl + "/api/v1/hiring/disqualify", { codCandidato: id });
  }
}

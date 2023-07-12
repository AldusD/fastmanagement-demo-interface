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

  list(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + "/api/v1/hiring/approved");
  }
}

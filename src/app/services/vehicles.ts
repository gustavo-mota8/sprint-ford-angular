import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo, Veiculos, VeiculosAPI } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root',
})
export class Vehicles {
  
  
  private apiUrl = "http://localhost:3001";

  
  constructor (private http: HttpClient) {}

  getVeiculos(): Observable<VeiculosAPI> {

    return this.http.get<VeiculosAPI>(`${(this.apiUrl)}/vehicles`);
  }
}

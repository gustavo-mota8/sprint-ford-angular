import { Component } from '@angular/core';
import { Menu } from "../../componentes/menu/menu";
import { Veiculo } from '../../models/veiculo.model';
import { Vehicles } from '../../services/vehicles';

@Component({
  selector: 'app-dashboard',
  imports: [Menu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {


  public veiculos: Veiculo[]=[];


  constructor (private vehicles: Vehicles) {}

  buscarVeiculos (): void {

    this.vehicles.getVeiculos().subscribe(


    (dadosRecebidos) => {

      this.veiculos = dadosRecebidos;

    },
    (erro) => {

      console.error("Erro: " + erro);

    })

  }
}



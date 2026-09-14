import { Component } from '@angular/core';
import { Menu } from "../../componentes/menu/menu";
import { Veiculo, VeiculosAPI, DadosVeiculo } from '../../models/veiculo.model';
import { Vehicles } from '../../services/vehicles';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [Menu, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',

})


export class Dashboard {

vin: string = "";

dadosVeiculo: DadosVeiculo | null = null;

mensagemErro: string = "";


  vehicles: Veiculo[]=[];

  selecionado: Veiculo | null = null;



  constructor (private vehicle: Vehicles) {}


  ngOnInit(): void {

    this.vehicle.getVeiculos().subscribe(
      response => {

        this.vehicles = response.vehicles;
      }
    )
  }
  veiculoSelecionado(event: Event): void{

    const idSelecionado = (event.target as HTMLSelectElement).value;
    
    if(idSelecionado) {
      
      this.selecionado = this.vehicles.find(v => v.id == Number (idSelecionado)) || null;
    }
    else {

      this.selecionado = null;
    }
  }

    containerImagemCarro = {

    'display':  'flex',
    'justify-content': 'center'

  };

    estiloImagemCarro = {

    'height': '40vh',
    'margin-top': '70px'
     
    
   
  };


  buscarVeiculo(): void {

  this.mensagemErro = "";

  if (!this.vin.trim()) {
    this.dadosVeiculo = null;
    this.mensagemErro = "Insira um código VIN.";
    return;
  }

this.vehicle.getDadosVeiculo(this.vin.trim()).subscribe({

    next: (response) => {
      this.dadosVeiculo = response;
    },

    error: (error) => {
      this.dadosVeiculo = null;

      this.mensagemErro =
        error.error?.message || "Erro ao buscar o veículo.";
    }

  });

}
}
  
  





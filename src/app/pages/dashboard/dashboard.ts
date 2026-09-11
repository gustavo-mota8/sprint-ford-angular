import { Component } from '@angular/core';
import { Menu } from "../../componentes/menu/menu";
import { Veiculo, VeiculosAPI } from '../../models/veiculo.model';
import { Vehicles } from '../../services/vehicles';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [Menu, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',

})
export class Dashboard {


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
}
  
  
 





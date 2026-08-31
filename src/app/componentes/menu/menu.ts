import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-menu',
  imports: [RouterLink, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  elemento = false;

  mostrarElemento() {

    this.elemento = !this.elemento;

  var aside = document.querySelector(".menu-lateral");


    
  } 

}

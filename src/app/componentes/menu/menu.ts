import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Auth } from '../../services/auth';


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


  } 

  constructor (private auth: Auth) {}

  logout(): void {

    this.auth.logout();
    
  }

}

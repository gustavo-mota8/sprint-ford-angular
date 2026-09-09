import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const rost = inject(Router);

  const logado = sessionStorage.getItem("logado");


if (logado == "true") {


  return true;

}

  return rost.createUrlTree(["/login"]);


  
};

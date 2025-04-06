import {inject } from '@angular/core';
import {  CanActivateFn} from '@angular/router';
import {GetAuthFromLocalStorageUseCase} from "@domain/use-cases/auth/get-auth-from-local-storage.use-case";


export const authGuard: CanActivateFn = (route, state) => {
  const $getAuthFromLocalStorageUseCase = inject(GetAuthFromLocalStorageUseCase)
  const data = $getAuthFromLocalStorageUseCase.execute();



  if(!data) return false;

  const {user, accessToken} = data;

  if (!user || !accessToken) {
    //authSvc.logout()
    // logged in so return true
    return false
  }

  let expiration = (JSON.parse(atob(accessToken.split('.')[1]))).exp;
console.log(Math.floor((new Date().getTime()/1000))>=expiration)
  if(Math.floor((new Date().getTime()/1000))>=expiration){
   // authSvc.logout();
    return false;
  }
  return true;

}

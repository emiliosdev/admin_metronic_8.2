import {AuthRepository} from "@domain/repositories/auth.repository";
import {AuthRepositoryImpl} from "@data/auth/auth.repository.impl";

export const authProvider  ={
  provide : AuthRepository,
  useClass: AuthRepositoryImpl
}

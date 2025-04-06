import {Injectable} from "@angular/core";
import {BaseUseCase} from "@core/base-use-case";
import {ApiResponse} from "@core/api-response";
import {AuthParams, AuthResponse} from "@domain/models/auth/auth.model";
import {AuthRepository} from "@domain/repositories/auth.repository";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class LoginAuthUseCase implements BaseUseCase<ApiResponse<AuthResponse>, AuthParams>{
  constructor(private repo:AuthRepository) {
  }

  execute(params: AuthParams): Observable<ApiResponse<AuthResponse>> {
       return this.repo.login(params)
    }

}

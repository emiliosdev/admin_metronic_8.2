import {Observable} from "rxjs";
import {ApiResponse} from "@core/api-response";
import {AuthParams, AuthResponse} from "@domain/models/auth/auth.model";

export abstract class AuthRepository {
  abstract login(params:AuthParams):Observable<ApiResponse<AuthResponse>>;
  abstract setAuthFromLocalStorage(params: AuthResponse): boolean
  abstract getAuthFromLocalStorage( ): AuthResponse| undefined
}

import {inject, Injectable} from "@angular/core";
import {AuthRepository} from "@domain/repositories/auth.repository";
import {Config} from "@core/config/config";
import {HttpClient} from "@angular/common/http";
import {AuthParams, AuthResponse} from "@domain/models/auth/auth.model";
import {Observable} from "rxjs";
import {ApiResponse} from "@core/api-response";

@Injectable({
  providedIn: 'root'
})
export class AuthRepositoryImpl implements AuthRepository {
  getAuthFromLocalStorage(): AuthResponse | undefined {
    try {
      const lsValue = localStorage.getItem(this.authLocalStorageToken);
      if (!lsValue) {
        return undefined;
      }

      const authData = JSON.parse(lsValue);
      return authData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  login(params: AuthParams): Observable<ApiResponse<AuthResponse>> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.url}/login`, params);
  }
  setAuthFromLocalStorage(auth: AuthResponse): boolean {
    if (auth && auth.accessToken) {
      localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
      return true;
    }
    return false;
  }
  private url =`${ Config.URL_SERVICIOS}/auth`
  private http = inject(HttpClient);
  private authLocalStorageToken = `${Config.appVersion}-${Config.USERDATA_KEY}`;


}

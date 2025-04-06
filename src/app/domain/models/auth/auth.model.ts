import {UserModel} from "@domain/models/auth/user.model";


export interface AuthParams {
  email: string;
  password: string;
}


export class AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: Date;
  user: UserModel;

  setAuth(auth: AuthResponse) {
    this.accessToken = auth.accessToken;
    this.refreshToken = auth.refreshToken;
    this.expiresIn = auth.expiresIn;
  }
}

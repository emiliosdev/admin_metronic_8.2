import {Injectable} from "@angular/core";
import { AuthResponse} from "@domain/models/auth/auth.model";
import {AuthRepository} from "@domain/repositories/auth.repository";

@Injectable({
  providedIn: 'root',
})
export class SetAuthFromLocalStorageUseCase {
  constructor(private repo:AuthRepository) {
  }

  execute(params: AuthResponse) {
        return this.repo.setAuthFromLocalStorage(params)
    }
}

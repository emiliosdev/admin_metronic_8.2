import {Injectable} from "@angular/core";
import {AuthRepository} from "@domain/repositories/auth.repository";

@Injectable({
  providedIn: 'root',
})
export class GetAuthFromLocalStorageUseCase {
  constructor(private repo:AuthRepository) {
  }

  execute( ) {
        return this.repo.getAuthFromLocalStorage()
    }
}

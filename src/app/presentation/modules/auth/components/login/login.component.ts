import {Component, OnInit, OnDestroy, ChangeDetectorRef, inject, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import {finalize, first} from 'rxjs/operators';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {LoginAuthUseCase} from "@domain/use-cases/auth/login-auth.use-case";
import {UserModel} from "@domain/models/auth/user.model";
import {AsyncPipe, NgClass, NgTemplateOutlet} from "@angular/common";
import {AuthService} from "@presentation/modules/auth/auth.service";
import {ToasterService} from "@presentation/shared/services/toaster.service";
import {SetAuthFromLocalStorageUseCase} from "@domain/use-cases/auth/set-auth-from-local-storage.use-case";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [ReactiveFormsModule, NgTemplateOutlet, NgClass, AsyncPipe, RouterLink]
})
export class LoginComponent implements OnInit, OnDestroy {
  private _tS = inject(ToasterService)
  private $loginUseCase = inject(LoginAuthUseCase)
  private $setAuthFromLocalStorageUseCase = inject(SetAuthFromLocalStorageUseCase)
  // KeenThemes mock, change it to:
  defaultAuth: any = {
    email: 'admin@demo.com',
    password: 'demo',
  };
  loginForm: FormGroup;
  hasError: boolean;
  returnUrl: string;
  isLoading$ = signal(false);

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    // redirect to home if already logged in
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.initForm();
    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [
        this.defaultAuth.email,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  submit() {
    this.hasError = false;

    this.isLoading$.set(true)
    const loginSubscr = this.$loginUseCase.execute({
      email: this.f.email.value,
      password: this.f.password.value
    })
      .pipe(first(), finalize(()=>this.isLoading$.set(false)))

      .subscribe((response) => {
        if (response.code==="1") {
          this._tS.toastr({
            type: 'success',
            message: response.message
          })
          this.$setAuthFromLocalStorageUseCase.execute(response.payload)
          console.log(this.returnUrl)
         this.router.navigate([this.returnUrl]).then()
          setTimeout(()=>{
         //   document.location.reload()
          }, 400)
        } else {
          this.hasError = true;
        }
      });
    this.unsubscribe.push(loginSubscr);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}

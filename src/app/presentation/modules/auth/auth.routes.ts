import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "@presentation/modules/auth/components/login/login.component";
import { RegistrationComponent } from "@presentation/modules/auth/components/registration/registration.component";
import { ForgotPasswordComponent } from "@presentation/modules/auth/components/forgot-password/forgot-password.component";
import { LogoutComponent } from "@presentation/modules/auth/components/logout/logout.component";

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
        data: { returnUrl: window.location.pathname },
      },
      // {
      //   path: 'registration',
      //   component: RegistrationComponent,
      // },
      // {
      //   path: 'forgot-password',
      //   component: ForgotPasswordComponent,
      // },
      // {
      //   path: 'logout',
      //   component: LogoutComponent,
      // },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },

]

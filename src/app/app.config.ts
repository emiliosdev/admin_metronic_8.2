import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {   TranslateModule } from '@ngx-translate/core';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {featureProviders} from "./providers";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        // authInterceptor,
        // loaderInterceptor,
        // errorInterceptor,
      ]),
    ),
    importProvidersFrom(
      TranslateModule.forRoot(),
      SweetAlert2Module.forRoot(),
    ),
    provideAnimationsAsync(),
    provideToastr({
      preventDuplicates: true,
      positionClass: 'toast-top-center',
    }),

    ...featureProviders
  ]
};

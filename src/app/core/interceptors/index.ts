import { LoaderInterceptor } from './loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefixInterceptor } from './api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './error-handler.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
];

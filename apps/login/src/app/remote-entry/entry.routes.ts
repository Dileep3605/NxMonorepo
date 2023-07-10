import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('../modules/login/login.component').then(
            (comp) => comp.LoginComponent
          ),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('../modules/forgot-password/forgot-password.component').then(
            (comp) => comp.ForgotPasswordComponent
          ),
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
    ],
  },
];

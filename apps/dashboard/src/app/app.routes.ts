import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule('login', './Module').then((m) => m.RemoteEntryModule),
    title: 'Login App',
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Module').then((m) => m.RemoteEntryModule),
    title: 'Login App',
  },
  {
    path: 'landing-page',
    loadChildren: () =>
      loadRemoteModule('landing-page', './Module').then(
        (m) => m.RemoteEntryModule
      ),
    title: 'Home App',
  },
  {
    path: 'signup',
    loadChildren: () =>
      loadRemoteModule('signup', './Module').then((m) => m.RemoteEntryModule),
  },
];

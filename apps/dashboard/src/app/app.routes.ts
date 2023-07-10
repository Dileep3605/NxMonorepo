import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { accountGuard } from './guards/account/account.guard';
import { authGuard } from './guards/auth/auth.guard';
import { startsWith } from './constants/router.utils';
import { WrapperComponent } from './modules/customElementLoader/custom-element-loader.component';

export const appRoutes: Route[] = [
  {
    path: 'privacy-policy',
    loadChildren: () =>
      loadRemoteModule('privacy-policy', './Module').then(
        (m) => m.RemoteEntryModule
      ),
    canActivate: [accountGuard],
  },
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule('login', './Module').then((m) => m.RemoteEntryModule),
    title: 'Login App',
    canActivate: [accountGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Module').then((m) => m.RemoteEntryModule),
    title: 'Login App',
    canActivate: [accountGuard],
  },
  {
    path: 'landing-page',
    loadChildren: () =>
      loadRemoteModule('landing-page', './Module').then(
        (m) => m.RemoteEntryModule
      ),
    title: 'Home App',
    canActivate: [authGuard],
  },
  {
    path: 'signup',
    loadChildren: () =>
      loadRemoteModule('signup', './Module').then((m) => m.RemoteEntryModule),
    canActivate: [accountGuard],
  },
  {
    matcher: startsWith('react-remote'),
    component: WrapperComponent,
    ...accountGuard,
    data: {
      importName: 'react-remote',
      elementName: 'react-remote-element',
      isDifferentFramework: true,
      framework: 'react',
      filesUrl: ['http://localhost:4204/main.js'],
    },
  },
];

import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry: any = {
  'react-remote': () =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      exposedModule: './Module',
    }),
  'vue': () =>
    loadRemoteModule({
      type: 'script',
      remoteEntry:
        'https://microservicerccmonorepo.appskeeper.in/published/vue-remote/remoteEntry.js',
      remoteName: 'vueRemote',
      exposedModule: './web-component',
    }),
};

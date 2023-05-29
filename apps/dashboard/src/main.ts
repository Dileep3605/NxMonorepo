import { setRemoteDefinitions } from '@nrwl/angular/mf';

fetch('/assets/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions)) // This tells webpack where each of our Remote applications has been deployed to!
  .then(() => import('./bootstrap').catch((err) => err));

 //import('./bootstrap').catch((err) => console.error(err));

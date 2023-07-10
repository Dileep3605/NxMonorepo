import { Component } from '@angular/core';

@Component({
  selector: 'nx-angular-login-entry',
  styles: [
    `
      .title-color {
        color: green;
      }
    `,
  ],
  template: `<router-outlet></router-outlet>`,
})
export class RemoteEntryComponent {}

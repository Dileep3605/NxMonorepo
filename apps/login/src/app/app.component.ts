import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'nx-angular-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  #title = inject(Title);

  ngOnInit(): void {
    this.#title.setTitle('Login App');
  }
}

import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { AlertsModule, AlertsService } from '@nx-angular/alerts';
import { ReduxService } from '../../services/redux.service';
import { GlobalUserAuthToken } from '../../store/actions/global/global.action';

@Component({
  selector: 'nx-angular-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatProgressBarModule,
    AlertsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  #formBuilder = inject(FormBuilder);
  #router = inject(Router);
  #storageService = inject(StorageService);
  #aletsService = inject(AlertsService);
  #reduxService = inject(ReduxService);
  loader = false;
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.#formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.loader = true;
    this.form.disable();
    setTimeout(() => {
      const token =
        'eyJ1c2VySWQiOiIxMjMiLCJ1c2VybmFtZSI6ImpvaG5fZG9lIiwicm9sZSI6ImFkbWluIn0';
      this.#reduxService.dispatchAction('LoginApp', GlobalUserAuthToken(token));
      this.loader = false;
      this.#storageService.addLocalStorage('token', token);
      this.form.enable();
      this.#router.navigate(['/landing-page']);
      this.#aletsService.snackbarSuccess('Logged in successfully');
    }, 3000);
  }

  forgotPassword() {
    this.#router.navigate(['/forgot-password']);
  }
}

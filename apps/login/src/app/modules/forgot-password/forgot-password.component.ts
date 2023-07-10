import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PATTERN } from '../../constant/patterns';
import { POPUP_MESSAGES } from '../../constant/messages';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const materials = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
];

@Component({
  selector: 'nx-angular-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ...materials],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  showSpinner = false;
  subTitle = POPUP_MESSAGES.forgotPasswordTitle;
  subscription: Subscription[] = [];
  #formBuilder = inject(FormBuilder);
  #router = inject(Router);
  buttonLabel = 'Send';
  routeLink = {
    LOGIN: 'login',
  };

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * Create forgot password form
   */
  createForm(): void {
    this.forgotForm = this.#formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(PATTERN.email)]],
    });
  }

  /**
   * Get the form control using control key
   * @param control
   * @returns
   */
  getControl(control: string): FormControl {
    return this.forgotForm.controls[control] as FormControl;
  }

  /**
   * Method For Calling Validating Email
   * @returns
   */
  validateEmail(): void {
    if (this.forgotForm.invalid || this.forgotForm.disabled) {
      return;
    }
    //const data = { ...this.forgotForm.value };
    const body = {
      email: this.forgotForm.get('email')?.value?.toLowerCase(),
    };
  }

  backToLogin() {
    this.#router.navigate(['/login']);
  }
}

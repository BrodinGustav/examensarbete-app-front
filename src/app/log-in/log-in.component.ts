import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router, RouterLink } from '@angular/router';
import { RegisterRequest } from '../models/register-request';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-log-in',
  imports: [NgIf, ReactiveFormsModule, RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  logInForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {

    this.logInForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }); {
    };
  }





ngOnInit(): void {}

onSubmit(): void {
  if(this.logInForm.valid) {

  const data: RegisterRequest = this.logInForm.value;  //konverterar formvärden till ett RegisterRequest
  this.registerService.register(data).subscribe({         //Anropar register-tjänst. Sätter subscribe till observable
    next: response => {
      console.log('Godkänd registrering!', response);

      //Skicka vidare användare
      this.router.navigate(['/home']);

    },
    error: err => {
      console.error('Registrering misslyckades:', err);
    }
  });
}
  }
}

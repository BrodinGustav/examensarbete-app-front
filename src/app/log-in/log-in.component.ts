import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogInService } from '../services/log-in.service';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { LogInRequest } from '../models/log-in-request';

@Component({
  selector: 'app-log-in',
  imports: [NgIf, ReactiveFormsModule, RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  logInForm: FormGroup;


  constructor(private fb: FormBuilder, private loginService: LogInService, private router: Router) {

    this.logInForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }); {
    };
  }





  ngOnInit(): void { }

  onSubmit(): void {
    if (this.logInForm.valid) {

      const data: LogInRequest = this.logInForm.value;  //konverterar formvärden till ett LoginRequest

      this.loginService.login(data).subscribe({         //Anropar login-tjänst. Sätter subscribe till observable
        next: response => {

          console.log('Inloggning svar från server:', response);

          if (response && response['jwt-token']) {

            localStorage.setItem('email', this.logInForm.value.email);
            console.log("Email lagrat i localStorage:", this.logInForm.value.email);
            console.log('Godkänd Inlogg!', response);

            //Skicka vidare användare
            this.router.navigate(['/home']);

          } else {
            console.log("Inloggning misslyckades.");
          }
        },
        error: err => {
          console.error('Inloggning misslyckades:', err);
          if (err.status === 401) {
            console.log("Felaktiga inloggningsuppgifter.");
          } else if (err.status === 500) {
            console.log("Serverfel.");
          }
        }
      });
    }
  }
}

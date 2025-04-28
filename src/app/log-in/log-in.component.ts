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

  errorMessage: string = '';

  constructor(private fb: FormBuilder, private loginService: LogInService, private router: Router) {

    //Validering för formulär via FormGroup
    this.logInForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }); {
    };
  }



  ngOnInit(): void { }

  onSubmit(): void {

    //Formulärvalidering för login
    if (this.logInForm.valid) {

      //Hämtar värden från formulär
      const data: LogInRequest = this.logInForm.value;

      //Anropar login-tjänst. Sätter subscribe till observable
      this.loginService.login(data).subscribe({
        next: response => {

          console.log('Inloggning svar från server:', response);

          //Om JWT finns
          if (response && response['jwt-token']) {


            localStorage.setItem('email', this.logInForm.value.email);
            console.log("Email lagrat i localStorage:", this.logInForm.value.email);
            console.log('Godkänd Inlogg!', response);

            localStorage.setItem('userId', response.id.toString());
            localStorage.setItem('jwt-token', response['jwt-token']);


            //Skicka vidare användare
            this.router.navigate(['/home']);

          } else {
            console.log("Inloggning misslyckades.");
            this.errorMessage = "Fel användarnamn/lösenord."

          }
        },
        error: err => {
          console.error('Inloggning misslyckades:', err);

          if (err.status === 401) {
            this.errorMessage = err.error?.message || "Fel användarnamn/lösenord.";

          } else if (err.status === 500) {
            this.errorMessage = "Serverfel. Försök igen senare.";

          } else {

            this.errorMessage = "Något gick fel. Försök igen.";
          }
        }
      });
    }
  }
}

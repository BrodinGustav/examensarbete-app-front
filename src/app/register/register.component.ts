import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterRequest } from '../models/register-request';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {

    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.valid) {

      const data: RegisterRequest = this.registerForm.value;  //konverterar formvärden till ett RegisterRequest
      this.registerService.register(data).subscribe({         //Anropar register-tjänst. Sätter subscribe till observable
        next: response => {
          console.log('Godkänd registrering!', response);

          //Skicka vidare användare
          this.router.navigate(['/log-in']);

        },
        error: err => {
          console.error('Registrering misslyckades:', err);
        }
      });
    }
  }

}

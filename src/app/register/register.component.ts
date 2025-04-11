import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
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


export class RegisterComponent {

  registerForm: FormGroup;



  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {



    //Formulärvalidering via FormGroup
    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: ['', Validators.required],
    }, {

      //funktion för lösenordsvaliderare
      validators: this.passwordMatchValidator

    });
  }

//Kontroll om för bekräftelse av lösenord
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}



ngOnInit(): void {}

onSubmit(): void {

  //Formulärvalidering för registrering
  if(this.registerForm.valid) {

    //Hämt formulärdata kontrollerar mot interface
  const data: RegisterRequest = this.registerForm.value;

  //Anropar register-tjänst. Sätter subscribe till observable
  this.registerService.register(data).subscribe({
    next: response => {

      console.log('Godkänd registrering!', response);
      console.log('E-post från backend-svar:', response.email);

      //Skicka vidare användare
      this.router.navigate(['/login']);

    },
    error: err => {
      console.error('Registrering misslyckades:', err);
    }
  });
}
  }

}

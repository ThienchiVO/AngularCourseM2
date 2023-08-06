import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicalAct } from '../../models/MedicalAct';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'phalanger-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hidePassword = true;

  registerForm = new FormGroup({
    lastname: new FormControl<string>('', Validators.required),
    firstname: new FormControl<string>('', Validators.required),
    profession: new FormControl<string>('', Validators.required),
    address: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.required),
    phone_number: new FormControl<string>('', Validators.required),
    medical_acts: new FormControl<MedicalAct[]>([], Validators.required),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  register(): void {
    this.authenticationService.register().subscribe(response => {
      if (response.status === 200) {
        this.router.navigate(['/']);
      } else {
        alert('register failed');
      }
    });
  }

  backTologin(): void {
    this.router.navigate(['/login']);
  }
}

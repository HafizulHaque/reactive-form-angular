import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm !: FormGroup;

  genders: string[] = ['male', 'female', 'other'];

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'userData': new FormGroup({
        'userName': new FormControl(null, Validators.required),
        'userEmail': new FormControl(null, [Validators.required, Validators.email])
      }),
      'userGender': new FormControl('male')
    });
  }

  onSubmit(){
    console.log(this.registerForm);
    // this.registerForm.reset();
  }

}

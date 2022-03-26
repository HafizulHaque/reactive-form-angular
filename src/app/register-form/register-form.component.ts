import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      'userName': new FormControl('John Doe'),
      'userEmail': new FormControl('john@example.com'),
      'userGender': new FormControl('male')
    });
  }

  onSubmit(){
    console.log(this.registerForm);
  }

}

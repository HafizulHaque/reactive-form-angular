import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm !: FormGroup;

  forbiddenNames=['anna', 'nemo', 'nymeria'];

  genders: string[] = ['male', 'female', 'other'];

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'userData': new FormGroup({
        'userName': new FormControl(null, [Validators.required, Validators.minLength(8), this.validateForbiddenNames.bind(this)]),
        'userEmail': new FormControl(null, [Validators.required, Validators.email])
      }),
      'userGender': new FormControl('male'),
      'userBirthday': new FormControl(null, [Validators.required]),
      'userGradYear': new FormControl(null, [Validators.required, this.validateGradAfterBirthday]),
      'hobbies': new FormArray([])
    });
  }

  onAddHobby(){
    let control : FormControl = new FormControl(null, Validators.required);
    (<FormArray>this.registerForm.get('hobbies')).push(control);
  }


  onSubmit(){
    console.log(this.registerForm);
    // this.registerForm.reset();
  }

  getHobbiesControl() : any {
    return (<FormArray>this.registerForm.get('hobbies')).controls;
  }

  getUserDataControl(): any {
    return (<FormGroup>this.registerForm.get('userData')).controls;
  }

  validateGradAfterBirthday(gradControl: FormControl): {[key: string]: any} | null {
    return null;
  }

  validateForbiddenNames(control: FormControl): {[key: string]: boolean} | null {
    if(this.forbiddenNames.indexOf(control.value) !== -1){
      //found match with the forbidden names
      return {'forbiddenName': true};
    }
    //no forbidden name match - return valid 
    return null;
  }
}

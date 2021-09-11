import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  get alternative() {
    return this.registrationForm.get('alternativeEmails') as FormArray;
  }
  addAlternativeEmails() {
    //  console.log(this.alternativeEmails);
    this.alternative.push(this.fb.control(''));

  }
  constructor(private fb: FormBuilder) { }
  registrationForm = this.fb.group({
    email: [''],
    phone: [''],
    alternativeEmails: this.fb.array([])
  });
  
  onSubmit(values: any){
    console.log(values.value);
    
 }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  checkSubmit =false ;
  ngOnInit(): void {
  }

registrationForm = this.fb.group({
  firstname:['new text', Validators.required],
  lastname:['',Validators.required],
  phone:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  email:[''],
}) ;
get f(){
  return this.registrationForm.controls ;
}
onsubmit(){
  this.checkSubmit =true;
  console.log('dgdsg',this.f);
  
}



}

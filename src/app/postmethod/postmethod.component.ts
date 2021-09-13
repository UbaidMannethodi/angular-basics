import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-postmethod',
  templateUrl: './postmethod.component.html',
  styleUrls: ['./postmethod.component.css']
})
export class PostmethodComponent implements OnInit {

  constructor( private serv:PostserviceService) { }
  public data = {
    name: '',
    place: '',
    age: null,
    salary: null
  }
  ngOnInit(): void {
  
  }

  onSubmit(){
     this.serv.getEmployees(this.data).subscribe((res)=>{
       console.log(res);
       
     });
  }

}

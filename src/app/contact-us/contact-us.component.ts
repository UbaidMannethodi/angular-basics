import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
   postData :any =[];
  constructor(private getApi:ApiCallService) { }

  ngOnInit(): void {

     this.getApi.getPost().subscribe((data)=>{
            this.postData =data;
     })

  }

}

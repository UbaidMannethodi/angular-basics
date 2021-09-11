import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './api-call.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="document" ;

  postArray:any = [];
  constructor(private getApi: ApiCallService) { }
  ngOnInit() {
    // this.getApi.getPost().subscribe((data) => {
      // console.log(data);
      // this.postArray = data;


      // for (let item of this.postArray) {
      //   console.log(item.title);

      // }


    // });
  }

}


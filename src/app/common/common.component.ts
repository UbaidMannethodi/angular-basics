import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  className: string =' btn btn-primary';
   title:string = 'submit' ;
   @Input() params: any
  constructor() { }

  ngOnInit(): void {
    // console.log(this.params);
    if(this.params){
      this.title = this.params ;
    }
    
  }

}

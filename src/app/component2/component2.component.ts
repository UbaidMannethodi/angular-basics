import { Component, OnInit } from '@angular/core';
import { ServiceExampleService } from '../service-example.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  public comp2Array: any = [];
  constructor(private serv:ServiceExampleService) { }

  ngOnInit(): void {

   this.comp2Array=this.serv.getdistricts();
   console.log("com2",this.comp2Array);
   

  }

}

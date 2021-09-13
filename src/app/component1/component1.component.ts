import { Component, OnInit } from '@angular/core';
import { ServiceExampleService } from '../service-example.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
public comp1Array: any =[];
  constructor(private serv:ServiceExampleService) { }

  ngOnInit(): void {

    this.comp1Array = this.serv.getdistricts();
    console.log('data',this.comp1Array);
    

  }
    
}

 
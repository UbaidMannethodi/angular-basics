import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceExampleService {


  constructor() { }


  public array = [
    { id: 1, name: 'Leanne Graham'},
    { id: 2, name: 'fhbsxnfsxnf'},
    { id: 3, name: 'vn xcxvn x'},
    { id: 4, name: 'xvcncnxfn'}, 
  ];
  
      getdistricts(){
        return <any> (this.array) ;
      }
 



}

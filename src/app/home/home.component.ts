import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   btnTitle: string = "Login" ;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


gotoAbout(){
  // navigate to about us page
  // this.router.navigate(['/about-us']);

  // quary params and fragments using script
  this.router.navigate(['/edit-student',4,'edit'],{queryParams: {allowEdit: true},fragment: "loading"});
  
}
}
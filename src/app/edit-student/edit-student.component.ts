import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // get value of queryparams and fragments 
    // console.log(this.route.snapshot.queryParams);

    // right way
    console.log(
      this.route.queryParams.subscribe((queryPaams)=>{
        console.log(queryPaams);
        
      })
    );
    
    // fragment
    console.log(
      this.route.fragment.subscribe((fragment)=>{
        console.log(fragment);
        
      })
    );
    
    
  }

}

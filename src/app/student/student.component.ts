import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentId: number | undefined;
  studentName: string | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //setting value from url to variable, ! not a  right way
    // this.studentId = this.route.snapshot.params['id'];
    // this.studentName = this.route.snapshot.params['name'];

    // using observable
    this.route.params.subscribe((params)=>{
      this.studentId = params['id'];
      this.studentName = params['name'];
    })

  }
}

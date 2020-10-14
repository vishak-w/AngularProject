import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(public httpcli:HttpClient,public stud:StudentserviceService) { }

  ngOnInit(): void {

    this.httpcli.get('http://localhost:3000/register').subscribe((res:any)=>
    this.stud.student=res
    )
  }
  deleteStudent(i:number)
  {
   this.stud.deleteStudents(i).subscribe((res:any)=>
   {
console.log(res);
   })
  }

}

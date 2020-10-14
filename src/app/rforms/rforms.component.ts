import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { student } from '../student';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css']
})
export class RformsComponent implements OnInit {

  constructor(public httpcli:HttpClient,public studs:StudentserviceService) { }
  register: FormGroup
  registerStudent(id:string,name:string,age:string,lastname:string,address:string)
  {
    this.httpcli.post('http://localhost:3000/register',{id,name,age,lastname,address}).subscribe((res:any)=>
    this.studs=res
    )
  console.log(this.register.value)
  }
  ngOnInit(): void {
    this.register=new FormGroup
    (
      {
        id:new FormControl(null,{validators:[Validators.required,Validators.maxLength(10)]}),
        name:new FormControl(null,{validators:[Validators.required,Validators.maxLength(10)]}),
        age:new FormControl(null,{validators:[Validators.required,Validators.maxLength(10)]}),
        address:new FormControl(null,{validators:[Validators.required,Validators.maxLength(50)]}),
        lastname:new FormControl(null,{validators:[Validators.required,Validators.maxLength(10)]})
      }
      )
  }

  }



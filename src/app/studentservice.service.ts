import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(public httpcli:HttpClient) { }
  student:Array<student>=[];

  deleteStudents(i:number)
  {
   return this.httpcli.delete('http://localhost:3000/register'+ "/" +i);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor(private http :HttpClient) {

   }
   addData(data:any)
   {
    return this.http.post(" http://localhost:3000/student",data)
   }

   getData()
   {
    return this.http.get("http://localhost:3000/student")
   }
   
   ondel(id:any){
    return this.http.delete("http://localhost:3000/student/"+id)
   }

   onupdate(data:any)
   {
    return this.http.put("http://localhost:3000/student/"+data.id,data)
   }

  }


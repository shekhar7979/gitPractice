import { Component } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
public state:any=[ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra",]

public showflag:any;
public alldata:any=[];

// onEdit variables for tow way data binding
public idd:any;
public fn:any;
public ln:any;
public adr:any;
public ct:any;
public st:any;
public zp:any;
public bd:any;
public ge:any;
public el:any;
public ph:any;

constructor( private api:CollegeService){
this.getAllData();

}

onsubmit(data:any){
  console.log(data.value);
  this.api.addData(data.value).subscribe(
    ((res:any)=>{
      console.log(res);
      this.getAllData()
     
    }),
    ((err:any)=>{
      console.log(err);
    })
  )
}


getAllData(){
  this.api.getData().subscribe((res)=>{console.log(res)
    this.alldata=res;
  })
}


// To delete
onDel(data:any)
{
  console.log(data.id)
  this.api.ondel(data.id).subscribe(
    ((res:any)=>{
      console.log(res);
      this.getAllData()
    }),
    ((err:any)=>{
      console.log(err);
    })
  )
}

// ToEdit
onEdit(data:any){
this.fn=data.fname
this.ln=data.lname
this.adr=data.addr
this.ct=data.city
this.st=data.state
this.zp=data.zip
this.bd=data.dob
this.ge=data.gen
this.el=data.eml
this.ph=data.mob
this.idd = data.id;
}



onUpdate(data:any){
  return this.api.onupdate(data.value).subscribe(
    ((res:any)=>{
      console.log(res);
      this.getAllData()
    }),
    ((err:any)=>{
      console.log(err);
    })
    
  )


}
}

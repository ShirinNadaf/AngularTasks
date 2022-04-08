import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   lastname:string;
//   email:string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen',lastname: 'hshs',email:'xy@gmail.com'},
//   {position: 2, name: 'Helium',lastname: 'aaa',email:'xy@gmail.com'},
// ];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any;
  displayedColumns: string[] = ['image','name','lastname','email'];

  constructor(private userdataService:DataService,private router:Router) {
   
   }
  ngOnInit(): void {
    this.userdataService.getUserData().subscribe(data =>{
      this.userList=data.data;
      console.log(this.userList)
    });
  }
  sendToProfilePage(val:any){
    console.log(val.id);
    localStorage.setItem('id',val.id);
    this.router.navigate(['user-profile'])
  }

}

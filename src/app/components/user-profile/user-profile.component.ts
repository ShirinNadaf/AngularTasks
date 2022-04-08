import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private dataService:DataService) { }
      myId:any;
      userDetails:any;
      displayedColumns: string[] = ['image','name','lastname','email','support'];

  ngOnInit(): void {
    if(localStorage.getItem('id')){
        this.myId=localStorage.getItem('id');
        console.log(this.myId);
        this.dataService.getUserDetails(this.myId).subscribe((data:any)=>{
          console.log(data);
          this.userDetails=data;
        })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { UninamesService } from '../../services/uninames.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['/home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private uninameService:UninamesService) { 
    // this.uninameService.GetProfileInfo().subscribe((profile:any)=>{
    //   this.ProfileInfo=profile
    //   console.log(this.ProfileInfo);
    // })
  }

  public ProfileInfo:any=[];

  ngOnInit() {
  }

}

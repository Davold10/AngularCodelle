import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private spotifyService:SpotifyService) { 
    this.spotifyService.GetNewReleases().subscribe((releases:any)=>{
      
      this.NewReleases=releases.albums.items;
    })
  }

  public NewReleases:Array<any>=[]

  ngOnInit() {
  }

}

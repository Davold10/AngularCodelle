import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public searchFilter:Array<string>=['track', 'artist']

  public searchResults:any=[]

  constructor(private spotifyService:SpotifyService , private router:Router) { }

  ngOnInit() {
  }

  public GotoArtist(id){
    this.router.navigate(['/artist',id])
    
  }

  public search(filter, termino){
    if(filter=='null' || termino=="" || termino==" ") return
    this.spotifyService.searchdata(filter, termino).subscribe((data:any)=>{
      if(data.tracks){
      this.searchResults=data.tracks.items;
      } else{
        this.searchResults=data.artists.items;
      }
      console.log(this.searchResults);
    })
  }

}

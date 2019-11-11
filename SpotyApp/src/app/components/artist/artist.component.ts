import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  public TopTracks: any;

  public ArtistInfo: any;

  public idArtist: string = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.idArtist = this.activatedRoute.snapshot.paramMap.get('id');

    this.spotifyService.getTopTracksArtist(this.idArtist).subscribe((data:any) => {
      this.TopTracks = data.tracks
      this.spotifyService.getArtistInfo(this.idArtist).subscribe((data) => {
        this.ArtistInfo = data
      })
    })
  }

  ngOnInit() {
  }

}

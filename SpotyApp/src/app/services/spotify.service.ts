import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  private headers= new HttpHeaders({
    'Authorization': 'Bearer BQAboycibYg9egHYDLow50cExwUNveJjP7Fl9ASrSv7kNaXRjGIJ2z7QshsCmQFsRdj3Lyoov_f-iqZHS-8'})

  private URL:string='https://api.spotify.com/v1'

  public GetNewReleases(){
    return this.http.get(`${this.URL}/browse/new-releases?country=MX&limit=10`, {headers:this.headers});
  }

  public searchdata( type, termino){

    termino = encodeURI(termino)

    let urlSend:string=`${this.URL}/search?q=${termino}&type=${type}&market=MX&limit=9`

    return this.http.get(urlSend,{headers:this.headers})

  }
  
  public getTopTracksArtist(idArtist){
    let urlSend=`${this.URL}/artists/${idArtist}/top-tracks?country=MX`;
    return this.http.get(urlSend,{headers:this.headers});
  }
  public getArtistInfo(idArtsit){
    let urlSend=`${this.URL}/artists/${idArtsit}`
    return this.http.get(urlSend,{headers:this.headers});
  }
}

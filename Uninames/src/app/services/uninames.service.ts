import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UninamesService {

  constructor(private http:HttpClient) { }

  public URL:string='https://uinames.com/api/?ext&amount=1'

  public GetProfileInfo(){
    return this.http.get(`${this.URL}`)
  }
}

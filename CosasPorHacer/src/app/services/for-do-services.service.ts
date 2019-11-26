import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { contentThing } from '../Interfaces/thing.interface';

@Injectable({
  providedIn: 'root'
})
export class ForDoServicesService {

  private urlGlobal = 'http://10.2.47.29:5000';

  public postThing(thing) {

    let url = `${this.urlGlobal}/v1/things`
    return this.http.post(url, thing)

  }

  public getThings(): Observable<Object> {
    let url = `${this.urlGlobal}/v1/things`
    return this.http.get(url);
  }

  public putThing(thing:contentThing){
    let url = `${this.urlGlobal}/v1/things/${thing._id}`
    return this.http.put(url,thing)

  }

  public deleteThing(thingID){
    let url = `${this.urlGlobal}/v1/things/${thingID}`
    return this.http.delete(url);
  }

  constructor(private http: HttpClient) { }
}

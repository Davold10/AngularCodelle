import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styles: []
})
export class HerosComponent implements OnInit {

  public HeroesRecibidos:Array<any>=[];

  public loading:boolean=true;
  
  constructor(private router:Router, public HeroeService:HeroeService) {
   }

  ngOnInit() {
    this.HeroesRecibidos=this.HeroeService.ReturnHeroes();
    setTimeout(() => {
      this.loading=false;
    }, 400);
    
  }

  public MandarInformacion(idHero){
    this.router.navigate(['heroInformation',idHero])
  }
}

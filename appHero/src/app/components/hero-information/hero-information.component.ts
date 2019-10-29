import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-hero-information',
  templateUrl: './hero-information.component.html',
  styleUrls: ['./hero-information.component.css']
})
export class HeroInformationComponent implements OnInit {

  public Marvel:boolean = false;
  public DC:boolean = false;

  public HeroeFlitrado:any={};

  constructor(private ActivatedRouter:ActivatedRoute, private HeroeService:HeroeService, private router:Router) { 

    const IdHeroeURL =this.ActivatedRouter.snapshot.paramMap.get('id');

    this.HeroeFlitrado = this.HeroeService.buscarHeroe(IdHeroeURL);

  }

  public ShowLogo(){
   if(this.HeroeFlitrado.casa === "DC"){
     this.DC =! this.DC
   } else{
    this.Marvel =! this.Marvel
   }
   console.log('Marvel >'+ this.Marvel );
   console.log('DC >'+ this.DC );
   
  }

  ngOnInit() {
    this.ShowLogo();
  }
  public RegresarHeroes(){
    this.router.navigate(['heroes'])
  }

}

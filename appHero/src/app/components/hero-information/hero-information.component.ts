import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-hero-information',
  templateUrl: './hero-information.component.html',
  styleUrls: ['./hero-information.component.css']
})
export class HeroInformationComponent implements OnInit {

  public HeroeFlitrado:any={};

  constructor(private ActivatedRouter:ActivatedRoute, private HeroeService:HeroeService) { 

    const IdHeroeURL =this.ActivatedRouter.snapshot.paramMap.get('id');

    this.HeroeFlitrado = this.HeroeService.buscarHeroe(IdHeroeURL)

  }

  ngOnInit() {
    console.log('hola soy el ngOnInit');
    
  }

}

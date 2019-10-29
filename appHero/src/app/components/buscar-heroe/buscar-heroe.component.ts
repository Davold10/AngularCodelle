import {Component,OnInit} from '@angular/core';
//nos ayuda a obtener parametros
import { ActivatedRoute, Router } from '@angular/router';
import {HeroeService} from '../../services/heroe.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: []
})
export class BuscarHeroeComponent implements OnInit {

  private termino: string = "";

  public heroesFiltrados: any = {};

  public loading:boolean=true;

  constructor(private ActivatedRoute: ActivatedRoute, private HeroeService: HeroeService, private router:Router) {

    this.ActivatedRoute.params.subscribe((terminoURL) => {
      this.loading=true;
      this.termino = terminoURL.termino
      console.log(this.termino);
      this.heroesFiltrados = this.HeroeService.buscarHeroes(this.termino);
      console.log(this.heroesFiltrados);
      this.loading=false;
    })
  }
  public MandarInformacion(idHero){
    this.router.navigate(['heroInformation',idHero])
  }

  ngOnInit() {}

}

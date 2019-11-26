import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForDoServicesService } from '../../services/for-do-services.service';
import { contentThing, Thing } from '../../Interfaces/thing.interface';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public Formulario: FormGroup;

  public Things: contentThing[];

  public obtenerThing() {
    const Toast = Swal.mixin({
      toast: true,
      // position: 'top-start',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
    
    console.log(this.Formulario.value);

    this._ForDoThings.postThing(this.Formulario.value).subscribe(
      (data) => {
        Toast.fire({
          icon: 'success',
          title: 'Guardado correctamente'
        })
        this.Formulario.reset();
      })

    // this._ForDoThings.postThing(this.Formulario.value).subscribe((data)=> {
    //   console.log(data);
    // })


  }

  public ShowThings() {
    this._ForDoThings.getThings().subscribe((data: Thing) => { 
      this.Things = data.Things }
    )
  }

  private crearFormulario() {
    this.Formulario = new FormGroup({
      thing: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
    
    
  }
  
  public CambiarStatus(thing:contentThing){
    thing.complete =! thing.complete
    this._ForDoThings.putThing(thing).subscribe(
      (data)=>{

      },
      (error)=>{console.log(error.statusText);
      }
    );
  }

  public EliminarTarea(thingID){
    Swal.fire({
      title: 'Eliminar esta tarea?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this._ForDoThings.deleteThing(thingID).subscribe(
          ()=>{
            Swal.fire(
              'Eliminada!',
              'Su tarea ha sido eliminada correctamente',
              'success'
            )
          }
        );
        
      }
    })
  }


  constructor(private _ForDoThings: ForDoServicesService) {
    this.ShowThings();
  }

  ngOnInit() {
    this.crearFormulario();
  }

}

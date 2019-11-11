import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { CargarUsuario } from '../../store/actions';
import { UsuarioModel } from '../../models/usuario.model';
import { usarioReducer } from '../../store/reducers';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit {

  user: UsuarioModel;
  loading:boolean;
  error
  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }
  
  
  ngOnInit() {
    
    this.router.params.subscribe(params=>{
      const id = params['id'];

      this.store.dispatch(new CargarUsuario(id));
    });

    this.store
      .select('usuario')
      .subscribe(usuarioState=> {
        this.user = usuarioState.user
        this.loading = usuarioState.loading;
        this.error = usuarioState.error;
      })
  }

}

import { InsumoService } from './../insumo.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Insumo } from 'src/app/model';

@Component({
  selector: 'app-insumo-cadastro',
  templateUrl: './insumo-cadastro.component.html',
  styleUrls: ['./insumo-cadastro.component.css']
})
export class InsumoCadastroComponent implements OnInit {

  insumo = new Insumo();

  constructor(
    private service: InsumoService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    private router: Router
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.insumo)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Insumo '+this.insumo.nome+' cadastrado'});
      form.reset();
    });
  }

  carregarEstado(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => { //ErrowFunction
        this.insumo = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.insumo)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Insumo '+this.insumo.nome+' alterado'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
      this.router.navigate(['insumo']);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.insumo.id);
  }

  ngOnInit() {
    const codigoInsumo = this.rota.snapshot.params['id'];
    if(codigoInsumo){
      this.carregarEstado(codigoInsumo);
    }
  }

}

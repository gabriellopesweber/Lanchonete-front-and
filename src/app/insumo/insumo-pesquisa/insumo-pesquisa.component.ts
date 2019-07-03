import { MessageService, ConfirmationService } from 'primeng/api';
import { InsumoService } from './../insumo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insumo-pesquisa',
  templateUrl: './insumo-pesquisa.component.html',
  styleUrls: ['./insumo-pesquisa.component.css']
})
export class InsumoPesquisaComponent implements OnInit {

  insumo = [];

  nomeBusca:string;

  constructor(
    private service:InsumoService,
    private msg:MessageService,
    private confirmation:ConfirmationService
  ) { }

  confirmarExclusao(insumo:any){
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir '+insumo.nome+'?',
      accept: () => {
        this.excluir(insumo);
      }
    });
  }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.insumo=dados;
    });
  }

  excluir(insumo: any){
    this.service.excluir(insumo.id)
    .then(() => {
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Success', detail:'Insumo '+insumo.nome+' deletado'});
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

}

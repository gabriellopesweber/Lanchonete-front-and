import { ProdutoService } from './../produto.service';
import { Produto } from '../../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto = new Produto();
  //insumo: Insumo[];

  constructor(
    private service: ProdutoService,
    //private categoriaService: CategoriasService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.pesquisarProduto();
  }

  pesquisarProduto(){
    this.service.pesquisar("")
    .then((dados)=>{
      this.produto=dados;
    });
  }

  //salvar(form: FormControl) {
   // this.ProdutoService.adicionar(this.produto)
    //.then( ()=>{
   //   this.messageService.add({severity:'success', summary:'Cadastro', detail:'Produto '+this.produto.nome+' cadastrado'});
   //   form.reset();
   // });
 // }

}

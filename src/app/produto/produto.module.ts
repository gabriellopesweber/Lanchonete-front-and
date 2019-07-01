import { ProdutoService } from './produto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';

@NgModule({
  declarations: [ProdutoCadastroComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProdutoCadastroComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }

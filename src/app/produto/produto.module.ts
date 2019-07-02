import { ProdutoService } from './produto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import {PickListModule} from 'primeng/picklist';


@NgModule({
  declarations: [ProdutoCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    PickListModule,
    ButtonModule
  ],
  exports: [
    ProdutoCadastroComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }

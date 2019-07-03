import { InsumoService } from './insumo.service';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ToastModule } from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/ConfirmDialog';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import {SplitButtonModule} from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {MessageService} from "primeng/api"
import {RouterModule} from '@angular/router';
import { InsumoPesquisaComponent } from './insumo-pesquisa/insumo-pesquisa.component';
import { InsumoCadastroComponent } from './insumo-cadastro/insumo-cadastro.component';

@NgModule({
  declarations: [InsumoPesquisaComponent, InsumoCadastroComponent],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    SplitButtonModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[
    InsumoService,
    MessageService
  ]
})
export class InsumoModule { }

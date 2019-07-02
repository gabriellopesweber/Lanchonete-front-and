import { InsumoService } from './insumo.service';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/ConfirmDialog';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InsumoPesquisaComponent } from './insumo-pesquisa/insumo-pesquisa.component';

@NgModule({
  declarations: [InsumoPesquisaComponent],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    MessageService
  ],
  providers:[
    InsumoService
  ]
})
export class InsumoModule { }

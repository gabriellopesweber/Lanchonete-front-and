import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsumoPesquisaComponent } from './insumo-pesquisa/insumo-pesquisa.component';
import { ConfirmDialogModule } from 'primeng/ConfirmDialog';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [InsumoPesquisaComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToastModule,
    FormsModule,
    SplitButtonModule,
    HttpClientModule,
    TooltipModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule

  ]
})
export class InsumoModule { }

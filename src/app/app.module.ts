import { InsumoPesquisaComponent } from './insumo/insumo-pesquisa/insumo-pesquisa.component';
import { InsumoModule } from './insumo/insumo.module';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoCadastroComponent } from './produto/produto-cadastro/produto-cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationService } from 'primeng/api';

import {Routes, RouterModule} from '@angular/router';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';



const rotas: Routes = [
  {path: '', redirectTo:'produto', pathMatch:'full'},
  {path: 'produto', component: ProdutoCadastroComponent},
  {path: 'insumo', component: InsumoPesquisaComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(rotas),
    SidebarModule,
    ButtonModule,
    AppRoutingModule,
    InsumoModule,
    ProdutoModule

  ],
  providers: [ConfirmationService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

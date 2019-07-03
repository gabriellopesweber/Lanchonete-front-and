import { InsumoCadastroComponent } from './insumo/insumo-cadastro/insumo-cadastro.component';
import { InsumoModule } from './insumo/insumo.module';
import { InsumoPesquisaComponent } from './insumo/insumo-pesquisa/insumo-pesquisa.component';
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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

const rotas: Routes = [
  {path: '', redirectTo:'insumo', pathMatch:'full'},
  {path: 'insumo', component: InsumoPesquisaComponent},
  {path: 'insumo/novo', component: InsumoCadastroComponent},
  {path: 'insumo/:id', component: InsumoCadastroComponent},
];

@NgModule({
  declarations: [
    AppComponent,
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
    NgbModule,
    NgbAlertModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

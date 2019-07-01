import { ProdutoModule } from './produto/produto.module';
import { ProdutoCadastroComponent } from './produto/produto-cadastro/produto-cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Routes, RouterModule} from '@angular/router';



const rotas: Routes = [
  {path: '', redirectTo:'produto', pathMatch:'full'},
  {path: 'produto', component: ProdutoCadastroComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutoModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

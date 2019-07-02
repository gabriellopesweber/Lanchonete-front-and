import { Injectable } from '@angular/core';
import { Produto } from '../model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtosURL = 'http://localhost:8080/produto';
  urlFiltro;

  constructor(private http: HttpClient) { }

  adicionar(produto: Produto): Promise<any>{
    return this.http.post(this.produtosURL, produto)
    .toPromise();
  }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/categorias/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/categorias';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

}

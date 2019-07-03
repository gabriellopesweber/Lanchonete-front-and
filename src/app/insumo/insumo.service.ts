import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Insumo } from '../model';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  insumoURL = 'http://localhost:8080/insumo';
  urlFiltro;

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/insumo/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/insumo';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.insumoURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(insumo: Insumo): Promise<any>{
    return this.http.post(this.insumoURL, insumo)
    .toPromise();
  }

  alterar(insumo: Insumo): Promise<any>{
    return this.http.put(this.insumoURL+'/'+insumo.id, insumo)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Insumo> {
    return this.http.get<Insumo>(this.insumoURL+'/'+codigo).toPromise();
  }
}

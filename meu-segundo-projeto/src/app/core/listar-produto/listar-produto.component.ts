import { ProductsService } from './../../services/products.service';
import { Products } from '../../models/Products';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  produtos: Products [] = []

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.productsService.list().subscribe(
      (res: Products []) => {
        console.log(res);
        this.produtos = res;
      }
    );
  }

  deletar(id: number) {
    this.productsService.delete(id).subscribe(
      (res: any) => {
        this.listar();
      }
    );
  }

  editar(id: number) {
    this.router.navigate(['editar/produto', id]);
  }
}

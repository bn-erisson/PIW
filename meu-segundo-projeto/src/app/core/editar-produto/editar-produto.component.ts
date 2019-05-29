import { ProductsService } from './../../services/products.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Products } from '../../models/Products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: Products = new Products();

  constructor( private activatedRoute: ActivatedRoute, 
               private productsService: ProductsService,
               private router: Router) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];

    this.productsService
  }

}

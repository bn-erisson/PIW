import { Products } from '../../models/Products';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-produto',
  templateUrl: './registrar-produto.component.html',
  styleUrls: ['./registrar-produto.component.css']
})
export class RegistrarProdutoComponent implements OnInit {

  product: Products;

  constructor(private productService: ProductsService) {
    this.product = new Products();
    // porque o parenteses ?
   }

  ngOnInit() {
  }

  onSubmit(){
    this.productService.register(this.product).subscribe(
      (res: Products) => {
        console.log(`Produto de id ${res.id} adicionado!`);
        // porque o console? tentei não colocar mas deu erro :/
      }
    );
  }

}

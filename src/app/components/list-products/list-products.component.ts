import { Component, OnInit} from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] =[

    /*{
    id: 1,
    name: 'Coca Cola',
    description: 'Coca Cola 1LT',
    price: 1,
    stock: 30
    },
    {
      id: 2,
      name: 'Super Corona',
      description: 'Super Corona 650ml',
      price: 1,
      stock: 30
      },*/
]

loading: boolean = false;
constructor( private _productService: ProductService, private toastr: ToastrService){

}

ngOnInit(): void {
  this.getListProduct();
}

getListProduct(){

  this.loading=true;

  setTimeout(() => {
    this._productService.getLlistProducts().subscribe((data: Product[]) => {
      this.listProducts = data;
      this.loading = false;
      //console.log(data);
    })

  }, 2000);

}

deleteProduct(id: number){
  this.loading = true;
  this._productService.deleteProduct(id).subscribe(() =>{
    this.getListProduct();
    this.toastr.warning('Product deleted successfully');
  })
}
}

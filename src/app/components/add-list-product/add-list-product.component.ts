import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-list-product',
  templateUrl: './add-list-product.component.html',
  styleUrl: './add-list-product.component.css'
})

export class AddListProductComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter : ActivatedRoute){
    this.form = this.fb.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
    })
    this.id= Number(aRouter.snapshot.paramMap.get('id'));
    //console.log(this.id);
  }

ngOnInit(): void {

  if(this.id !=0){
    //Es editar
    this.operacion = 'Editar ';
    this.getProduct(this.id);
  }
}

getProduct(id:number){
  this.loading = true;
  this._productService.getProduct(id).subscribe((data:Product) => {
    console.log(data);
    this.loading = false;
    this.form.setValue({
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock
    })
  })
}

addProduct(){
  //Extrae valores del form
  //  console.log(this.form.value.name);
  //  console.log(this.form.get('name')?.value)

  const product: Product = {
    name: this.form.value.name,
    description: this.form.value.description,
    price: this.form.value.price,
    stock: this.form.value.stock
  }

  if (this.id !== 0) {
    //editar
    this.loading = true;
    product.id = this.id;
    this._productService.updateProduct(this.id, product).subscribe(() => {
      this.loading = false;
      this.toastr.success(`El producto ${product.name} fue actualizado con exito`,
        'Producto saved');
      this.router.navigate(['/']);
    })

  } else {
    //agregar
    this.loading = true;
    this._productService.saveProduct(product).subscribe(() => {
      console.log('Producto saved successfully');
      this.loading = false;
      this.toastr.success(`El producto ${product.name} actualizado con exito`,
        'Producto saved');
      this.router.navigate(['/']);
    })
  }
}

}

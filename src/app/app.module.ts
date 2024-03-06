import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modulos
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';


//componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddListProductComponent } from './components/add-list-product/add-list-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProgressbarComponent } from './shared/progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddListProductComponent,
    ListProductsComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true
    }), // ToastrModule added
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

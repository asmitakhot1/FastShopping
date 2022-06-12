import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  result: IProduct[] = [];
  public totalItem: number=0;
  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getData().subscribe((data: IProduct[]) => {
      console.log(data);
      this.result = data;
      // for cart use------------------------

      this.result.forEach((a: any) => {

        Object.assign(a, { quantity: 1, total: a.Price })
      });
    });
    this.cartService.getProducts().subscribe(res =>{
      this.totalItem = res.length;
    });
  }
  searchText: string = '';
    addtocart(item: any){
      this.cartService.addtoCart(item);
    }

    onSearchTextEntered(searchValue: string){
      this.searchText = searchValue;
      console.log(this.searchText);
      }
  }


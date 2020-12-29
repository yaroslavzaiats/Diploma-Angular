import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './shop-page/card/card.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './shop-page/search.pipe';
import { DiscountComponent } from './home-page/discount/discount.component';
import { CartService } from './shop-page/cart.service';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'shop', component: ShopPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShopPageComponent,
    CardComponent,
    SearchPipe,
    DiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'}),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

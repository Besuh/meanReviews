import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs';


import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantNewComponent } from './restaurant/restaurant-new/restaurant-new.component';
import { RestaurantEditComponent } from './restaurant/restaurant-edit/restaurant-edit.component';
import { RestaurantReviewsComponent } from './restaurant/restaurant-reviews/restaurant-reviews.component';
import { ReviewsNewComponent } from './restaurant/reviews-new/reviews-new.component';
import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantUpdateComponent } from './restaurant/restaurant-update/restaurant-update.component';

const appRoutes: Routes = [
  { path: '', component: RestaurantComponent },
  { path: 'new', component: RestaurantNewComponent },
  { path: 'edit/:id', component: RestaurantEditComponent },
  { path: 'reviews/:id', component: RestaurantReviewsComponent },
  { path: 'newReview/:id', component: ReviewsNewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantListComponent,
    RestaurantNewComponent,
    RestaurantEditComponent,
    RestaurantReviewsComponent,
    ReviewsNewComponent,
    RestaurantUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }

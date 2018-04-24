import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import "rxjs";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import "rxjs/add/operator/map"
import { Review } from './review';

@Injectable()
export class RestaurantService {

  constructor(private _http: Http) {
    this._http = _http;
   }

  create(restaurant: Restaurant){
    return this._http.post("/restaurant", restaurant)
    .map(data => data.json()).toPromise()

  }
  createReview(review: Review){
    console.log(review)
    console.log("the review",review)
    return this._http.post("/review", review)
    .map(data => data.json()).toPromise()
  }
  destroy(restaurant: Restaurant){
    console.log("im here");
    console.log(restaurant._id);
    return this._http.delete("/restaurants/"+ restaurant._id)
    .map(data => data.json()).toPromise()
  }
  update(restaurant: Restaurant){
    return this._http.put("/restaurant/"+restaurant._id, restaurant)
    .map(data => data.json()).toPromise()
  }

  getRestaurants(){
    return this._http.get("/restaurants")
    .map(data => data.json()).toPromise()
  }
  getRestaurant(restaurant: Restaurant){
    return this._http.get("/restaurant/"+ restaurant._id)
    .map(data => data.json()).toPromise()
  }
  getRestaurantId(id: String){
    console.log(id)
    return this._http.get("/restaurant/"+ id)
    .map(restaurant => restaurant.json()).toPromise()
  }
}

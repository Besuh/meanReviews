import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Restaurant } from './../restaurant';
import { RestaurantService } from '../restaurant.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Review } from './../review';

@Component({
  selector: 'app-reviews-new',
  templateUrl: './reviews-new.component.html',
  styleUrls: ['./reviews-new.component.css']
})
export class ReviewsNewComponent implements OnInit {
  restaurant: Restaurant;
  restaurantEdit: Restaurant = new Restaurant();
  restaurants: Array<Restaurant> = [];
  newReview = new Review();
  error = new Object();
  errorz: Array<Object>;

  constructor(private _restaurantService: RestaurantService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) =>{
      let restaurantId = params['restaurantId'];
      console.log(params.id)
    });
    this.getRestaurant();

  }
  getRestaurant() {
    this.activatedRoute.params.subscribe((params: Params) =>{
      let restaurantId = params['restaurantId'];
      console.log(params.id);
      this._restaurantService.getRestaurantId(params.id)
      .then(restaurant =>{ this.restaurantEdit =restaurant; console.log(this.restaurantEdit)})
      .catch(err => console.log(err));
    });
    console.log("donezo");
  }
  update(){
    this._restaurantService.update(this.restaurantEdit)
    .then(status => this.router.navigate(["/reviews",this.restaurantEdit._id]))
    .catch(err => console.log(err))
  }
  create() {
    this.errorz = new Array<Object>();
    this._restaurantService.createReview(this.newReview)
    .then(status => {if("errors" in status) {this.error = status; this.errorz.push(this.error); console.log(this.error)}else{this.restaurantEdit.reviews.push(status);this.update();this.router.navigate([""])}})
    .catch(err => console.log("?"));
    console.log(this.newReview)
    this.newReview = new Review();
    
    this.ngOnInit;
  }

}

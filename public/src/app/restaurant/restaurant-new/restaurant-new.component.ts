import { Component, OnInit } from '@angular/core';
import { Restaurant } from './../restaurant';
import { RestaurantService } from './../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-new',
  templateUrl: './restaurant-new.component.html',
  styleUrls: ['./restaurant-new.component.css']
})
export class RestaurantNewComponent implements OnInit {
  newRestaurant = new Restaurant();
  error = new Object();
  errorz: Array<Object>;
  constructor(private _restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
  }
  create() {
    this.errorz = new Array<Object>();
    this._restaurantService.create(this.newRestaurant)
    .then(status => {if (status === "Already exists") {this.error = status; this.errorz.push(this.error); console.log("herew we go",this.error)} else if("errors" in status) {this.error = status; this.errorz.push(this.error);}else{this.router.navigate([""])}})
    .catch(err => console.log(err));
    console.log(this.newRestaurant)
    this.newRestaurant = new Restaurant();
    
    this.ngOnInit;
  }
}

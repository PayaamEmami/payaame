import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-promo',
  templateUrl: './home-promo.component.html',
  styleUrls: ['./home-promo.component.css']
})
export class HomePromoComponent implements OnInit {
  problemPath = '';

  constructor() {
    this.problemPath='../../assets/img/promo/problem.jpg';
   }

  ngOnInit() {
  }

}

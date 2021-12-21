import { Component, OnInit } from '@angular/core';
import { ToppingService } from 'src/app/core/topping.service';

@Component({
  selector: 'app-toppings-list',
  templateUrl: './toppings-list.component.html',
  styleUrls: ['./toppings-list.component.css']
})
export class ToppingsListComponent implements OnInit {

  constructor(public service: ToppingService) { }

  ngOnInit(): void {
  }

}

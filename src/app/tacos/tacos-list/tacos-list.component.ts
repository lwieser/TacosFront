import { Component, OnInit } from '@angular/core';
import { TacosService } from 'src/app/core/tacos.service';

@Component({
  selector: 'app-tacos-list',
  templateUrl: './tacos-list.component.html',
  styleUrls: ['./tacos-list.component.css']
})
export class TacosListComponent {
  constructor(public tacosService: TacosService) { }
}

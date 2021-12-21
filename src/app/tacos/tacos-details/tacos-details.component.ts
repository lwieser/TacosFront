import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TacosService } from 'src/app/core/tacos.service';

@Component({
  selector: 'app-tacos-details',
  templateUrl: './tacos-details.component.html',
  styleUrls: ['./tacos-details.component.css']
})
export class TacosDetailsComponent implements OnInit {
  tacos: any;
  avaibleToppings: any[] = [];
  toppings: any[] = [];

  constructor(private tacosService: TacosService, private activatedRouted: ActivatedRoute) {
    this.activatedRouted.params.subscribe(x => {
      this.tacosService.get(x.id).subscribe({
        next: (tacos) => {
          this.tacos = tacos;
          this.load();
        }
      })
    })
  }

  ngOnInit(): void {

  }


  load() {
    this.tacosService.getAvaibleToppings(this.tacos.id).subscribe({
      next: (res: any[]) => {
        this.avaibleToppings = res;
      }
    })

    this.tacosService.getToppings(this.tacos.id).subscribe({
      next: (res: any[]) => {
        this.toppings = res;
      }
    })
  }
  addTopping(t: any) {
    this.tacosService.addTopping(this.tacos.id, t).subscribe({ next: () => { this.load } })
  }
}

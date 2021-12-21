import { Component, Input, OnInit } from '@angular/core';
import { ServiceGeneric } from 'src/app/core/service-generic';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent implements OnInit {
  @Input() service?: ServiceGeneric;

  tacos: any[] = [];
  showAddModal = false;
  currentTacos: any = {};

  ngOnInit(): void {
    if(this.service){
      this.load();
    }
  }

  load() {
    this.service?.getAll().subscribe({
      next: (taocs) => {
        this.tacos = taocs;
      }
    })
  }

  afterSave() {
    this.showAddModal = false;
    this.load();
  }

  edit(tacos: any) {
    this.currentTacos = tacos;
    this.showAddModal = true;
  }

  remove(tacos: any) {
    this.service?.remove(tacos).subscribe({
      next: () => {
        this.load();
      }
    })
  }

  create() {
    this.currentTacos = {};
    this.showAddModal = true;
  }
}

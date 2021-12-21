import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceGeneric } from 'src/app/core/service-generic';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {
  @Output() objectAdded = new EventEmitter();
  @Input() tacos: any = {};
  @Input() tacosService?: ServiceGeneric;


  ngOnInit(): void {
  }

  save() {
    if (this.tacos.id) {
      this.tacosService?.update(this.tacos).subscribe({
        next: () => {
          this.objectAdded.emit();
        }
      });
    } else {
      this.tacosService?.add(this.tacos).subscribe({
        next: () => {
          this.objectAdded.emit();
        }
      });
    }
  }
}

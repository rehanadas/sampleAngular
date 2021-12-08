import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() data!: { id: number, name: string }[]
  @Output() item = new EventEmitter< { id: number, name: string }>();
  constructor() { }

  ngOnInit(): void {
  }

  detailview(data: any) {
this.item.emit(data);
  }
}

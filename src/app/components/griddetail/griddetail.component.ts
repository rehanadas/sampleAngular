import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-griddetail',
  templateUrl: './griddetail.component.html',
  styleUrls: ['./griddetail.component.css']
})
export class GriddetailComponent implements OnInit {
  @Input() data!: { id: number, name: string }
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Planet} from '../../models/planet';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input()
  displayedColumns: string[];
  @Input()
  planets: Planet[];
  constructor() { }

  ngOnInit() {
  }

}

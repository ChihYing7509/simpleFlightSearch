import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  flightNumber: string;
  carrier: string;
  origin: string;
  departure: string;
  destination: string;
  arrival: string;
  aircraft: string;
  distance: number;
  travelTime: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  displayedColumns: string[] = ['status', 'departure', 'arrival', 'travelTime', 'distance', 'flightNumber'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}

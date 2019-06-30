import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  displayedColumns: string[] = ['status', 'departure', 'arrival', 'travelTime', 'distance', 'flightNumber'];
  dataSource = new MatTableDataSource([]);
  length = 0;


  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,) {

     if (this.router.getCurrentNavigation().extras.state) {
      let data = this.router.getCurrentNavigation().extras.state.res;

      data.map(x => {
        x['departuredate'] = moment(x.departure).format('YYYY-MM-DD');
        x['departuretime'] = moment(x.departure).format('LT');
        x['arrivaldate'] = moment(x.arrival).format('YYYY-MM-DD');
        x['arrivaltime'] = moment(x.arrival).format('LT');
        let d = x.travelTime.split(':');
        x['duration'] = Number(d[0]) + ' hr ' + Number(d[1]) + ' mn'
      }
      )

      this.dataSource = new MatTableDataSource(data);
      this.length = data.length;
     }
  }

  show() {
    return this.length === 0;
  }
}

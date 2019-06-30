import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from '@angular/router';
import { Flight } from '../../models/flight';
import { NgForm } from '@angular/forms';
import { log } from 'util';

const DATE_ERROR = 'Please select a departing date.';
const FROM_ERROR = 'Please enter a valid origin airport.';
const TO_ERROR = 'Please enter a valid destionation airport.';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dateError: string;
  orgError: string;
  dstError: string;

  constructor(private searchSearvice: SearchService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
  }

  searchFlight(f: NgForm) {

    this.resetErrors();

    let num = f.value.flight;
    let org = f.value.from;
    let dst = f.value.to;
    let date =f.value.date;

    if (!date) {
      this.dateError = DATE_ERROR;
      return;
    }

    if (!num) {
      if (!org) {
        this.orgError = FROM_ERROR;
        if (!dst) { this.dstError = TO_ERROR; }
        return;
      }
      if (!dst) {
        this.dstError = TO_ERROR;
        return;
      }
      org = org.toUpperCase();
      dst = dst.toUpperCase();
    }

    this.searchSearvice.getFlightResults(num, org, dst, date).subscribe(
      (res : Flight[]) => {
        let extras: NavigationExtras = {
          state: {
            res : res
          }
        }
        this.router.navigateByUrl('/results', extras);
      },
      err => {
        alert(err);
      }
    );
  }

  dateOnChange() {
    this.dateError = null;
  }

  orgOnChange() {
    this.orgError = null;
  }

  dstOnChange() {
    this.dstError = null;
  }

  resetErrors(){
    this.dateError = null;
    this.orgError = null;
    this.dstError = null;
  }

}

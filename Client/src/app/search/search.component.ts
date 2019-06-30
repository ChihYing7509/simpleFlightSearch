import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from '@angular/router';
import { Flight } from '../../models/flight';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchSearvice: SearchService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
  }

  searchFlight(f: NgForm) {

    let num = f.value.flight;
    let org = f.value.from;
    let dst = f.value.to;
    let date =f.value.date;

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
}

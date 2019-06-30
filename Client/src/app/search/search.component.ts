import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from '@angular/router';
import { Flight } from '../../models/flight';

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

  searchFLight() {

    let num = "2005";
    let org = "";
    let dst = "";
    let date ="2018-01-31";

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

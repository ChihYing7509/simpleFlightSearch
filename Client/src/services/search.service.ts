import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Flight } from "../models/flight";


@Injectable()
export class SearchService {


  constructor(private http: HttpClient) {}

  getFlightResults(num: string, org: string, dst: string, date: string) {

    return this.http.get(`http://localhost:3000/search?num=${num}&org=${org}&dst=${dst}&date=${date}`);
  }
}

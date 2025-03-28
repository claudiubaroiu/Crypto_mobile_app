import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { SearchResponseModel } from "../models/search-response.model";
import { Currency } from "../models/currency.model";

@Injectable({ providedIn: "root" })
export class CurrencyService {
  private ROOT_URL = `https://api.coingecko.com/api/v3`;

  constructor(private http: HttpClient) {}

  getCurrencyData(): Observable<Currency | SearchResponseModel[]> {
    let params = new HttpParams().set("vs_currency", "usd");

    return this.http.get<Currency | SearchResponseModel[]>(
      `${this.ROOT_URL}/coins/markets`,
      {
        params,
      }
    );
  }
  searchCoin(query: string) {
    return this.http
      .get<Currency | SearchResponseModel>(
        `${this.ROOT_URL}/search?query=${query}`
      )
      .pipe(
        map((r) => {
          return r["coins"];
        })
      );
  }
}

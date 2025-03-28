import { Component, OnInit } from "@angular/core";
import {
  ActivityIndicator,
  EventData,
  ItemEventData,
  SearchBar,
} from "@nativescript/core";
import { Store } from "@ngrx/store";
import { CoinsActions } from "../../actions";
import { Observable } from "rxjs";
import { getAllCoins } from "../../reducer/state";
import { debounce } from "throttle-debounce";
import { SearchResponseModel } from "../../models/search-response.model";
import { Currency } from "../../models/currency.model";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { CommonModule } from "@angular/common";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CoinListComponent } from "../coin-list/coin-list.component";

@Component({
  selector: "ns-coins",
  templateUrl: "./coins.component.html",
  imports: [NativeScriptCommonModule, CommonModule, CoinListComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CoinsComponent implements OnInit {
  currencies$: Observable<Currency | SearchResponseModel[]>;
  isBusy: boolean = true;
  isActivityVisible = true;
  pageNumber = 1;
  searchTerm = "";
  constructor(private store: Store) {
    this.currencies$ = store.select(getAllCoins);
  }

  ngOnInit(): void {
    this.currencies$.subscribe((data) => {
      if (data && (Array.isArray(data) ? data.length > 0 : true)) {
        this.isBusy = false;
        this.isActivityVisible = false;
      }
    });

    this.store.dispatch(CoinsActions.CoinsLoaded());
  }

  onLoadMoreCoins(event) {
    this.pageNumber++;
  }
  coinTap(event) {
    const coin = event.view.bindingContext as Currency;
  }
  onSearchLayoutBarLoaded(event) {
    if (event.object.android) {
      event.object.android.clearFocus();
    }
  }
  onSearchBarLoaded(event) {
    if (event.object.android) {
      event.object.android.clearFocus();
    }

    this.store.dispatch(CoinsActions.CoinsLoaded());
  }
  searchCoin(args: EventData) {
    const sb = args.object as SearchBar;
    this.onSearchBarLoaded(args);
    this.clearCoins();
    this.searchTerm = sb.text;
    this.onSearchBarLoaded(args);
  }
  onSearchBarClear(args) {
    this.searchTerm = "";
    this.clearCoins();
    this.onSearchBarLoaded(args);
  }
  clearCoins() {
    this.pageNumber = 1;
    //clear
  }
  onBusyChanged(args) {
    let indicator: ActivityIndicator = <ActivityIndicator>args.object;
  }
  textSearchDebounce = debounce(300, (searchBarArgs) => {
    const searchBar = <SearchBar>searchBarArgs.object;
    const searchValue = searchBar.text.toLowerCase();

    if (searchValue == "") {
      return [];
    } else {
      this.store.dispatch(
        CoinsActions.SearchAction({ searchTerm: searchBar.text })
      );
    }
  });
  onTextChanged(args) {
    this.textSearchDebounce(args);
  }
}

import { Component, Input, Output } from "@angular/core";
import { Currency } from "../../models/currency.model";
import { SearchResponseModel } from "../../models/search-response.model";
import { EventEmitter } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NO_ERRORS_SCHEMA } from "@angular/core";

@Component({
  moduleId: module.id,
  standalone: true,
  selector: "coin-list",
  templateUrl: "./coin-list.component.html",
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CoinListComponent {
  private _items: SearchResponseModel[] = [];

  @Input()
  set items(value: Currency | SearchResponseModel[] | null) {
    if (Array.isArray(value)) {
      this._items = value;
    } else {
      this._items = value ? [value as unknown as SearchResponseModel] : [];
    }
  }

  get items(): SearchResponseModel[] {
    return this._items;
  }

  @Output() itemTap: EventEmitter<any> = new EventEmitter();
  @Output() onLoadMoreItems: EventEmitter<any> = new EventEmitter();

  ngOnChanges() {}
}

import { Component, OnInit } from "@angular/core";
import { Currency } from "../../models/currency.model";
import { ActivatedRoute } from "@angular/router";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

@Component({
  selector: "ns-coin-detail",
  standalone: true,
  templateUrl: "./coin-detail.component.html",
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CoinDetailComponent implements OnInit {
  item: Currency;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}

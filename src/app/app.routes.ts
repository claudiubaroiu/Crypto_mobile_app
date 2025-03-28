import { Routes } from "@angular/router";
export const routes: Routes = [
  {
    path: "",
    redirectTo: "currency",
    pathMatch: "full",
  },
  {
    path: "currency",
    loadChildren: () =>
      import("./currency/currency.routes").then((m) => m.currencyRoutes),
  },
];

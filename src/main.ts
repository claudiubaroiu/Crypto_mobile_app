import {
  bootstrapApplication,
  provideNativeScriptHttpClient,
  provideNativeScriptNgZone,
  provideNativeScriptRouter,
  runNativeScriptAngularApp,
} from "@nativescript/angular";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { routes } from "./app/app.routes";
import { AppComponent } from "./app/app.component";
import { provideStore } from "@ngrx/store";
import { provideState } from "@ngrx/store";
import * as fromCoins from "./app/currency/reducer/state";
import { provideEffects } from "@ngrx/effects";
import { CurrencyEffects } from "./app/currency/effects";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";

/**
 * Disable zone by setting this to true
 * Then also adjust polyfills.ts (see note there)
 */
const EXPERIMENTAL_ZONELESS = false;

runNativeScriptAngularApp({
  appModuleBootstrap: () => {
    return bootstrapApplication(AppComponent, {
      providers: [
        provideHttpClient(withInterceptorsFromDi()),

        provideStore({}),
        provideState(fromCoins.FEATURE_KEY, fromCoins.reducers),
        provideEffects(CurrencyEffects),
        provideNativeScriptHttpClient(withInterceptorsFromDi()),
        provideNativeScriptRouter(routes),
        EXPERIMENTAL_ZONELESS
          ? provideExperimentalZonelessChangeDetection()
          : provideNativeScriptNgZone(),
      ],
    });
  },
});

      📱 Crypto Tracker Mobile App
  Aceasta este o aplicație mobilă dezvoltată în Angular + NativeScript, care afișează o listă de criptomonede în timp real, folosind date de la CoinGecko API. Aplicația este construită în stil modern, folosind componente standalone, NgRx pentru state management, și este pregătită pentru scalare cu pagini multiple.
  ⚙️ Tehnologii utilizate
---Angular v19 – Framework principal pentru structurarea aplicației

---NativeScript v8.9 – Permite dezvoltarea aplicației mobile în Angular

---NgRx v19 – Pentru gestionarea stării globale într-un mod reactiv

---RxJS – Pentru programare reactivă și streamuri de date

---Coingecko Public API – Sursă de date pentru criptomonede

---TypeScript v5.6 – Limbaj principal

---Tailwind CSS – Pentru styling rapid și flexibil

  🧠 Funcționalități
---🔍 Căutare criptomonede – Căutare în timp real cu debounce

---🔄 Listă criptomonede – Se încarcă automat la pornirea aplicației

---⚡ NgRx Effects – Preluarea datelor din API se face în mod reactiv

---✅ Se afișează:

1.Numele criptomonedei

2.Simbolul

3.Imaginea (logo)

4.Poziția în clasamentul pieței (market cap rank)

---📂 Structură modulară – Separare clară pe feature: actions, effects, reducers, models, components, services

🔄 Fluxul aplicației
1.Aplicația pornește cu bootstrapApplication() în main.ts.

2.La încărcare, este trimisă acțiunea CoinsActions.CoinsLoaded().

3.CurrencyEffects interceptează această acțiune și face un request către currency.service.ts.

4.API-ul returnează datele criptomonedelor → sunt trimise în LoadCurrencySuccess.

5.Reducerul actualizează state.data cu aceste monede.

6.Componentele (CoinsComponent, CoinListComponent) observă aceste date prin store și le afișează cu *ngFor.


  🚀 Pornire aplicație Android (NativeScript)
1.ns clean
2.ns run android



    🛠 Asigură-te că:

---Ai SDK-ul Android configurat (ANDROID_HOME)

---Ai un emulator sau un device conectat

---Ai instalat @nativescript/android și nativescript CLI


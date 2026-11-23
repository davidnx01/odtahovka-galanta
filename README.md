# Odťahová služba Galanta — redizajn webu (neoficiálny návrh)

> Neoficiálny návrh — nie je to oficiálny web podniku. Ukážka redizajnu od [webdavid.sk](https://webdavid.sk); objednávky tu nefungujú.

Nový vizuál pre [odtahovka-galanta.sk](https://odtahovka-galanta.sk). Texty a fotografie sú pôvodné z ich webu (stav 9. 10. 2026), zmenený je dizajn, štruktúra a technika. Statický web: `index.html`, `o-nas/index.html`, `assets/`. Generátor: `python3 _build/build.py`.

## Verzia 3 (23. 11. 2026) — podľa Lukášovej dizajn knižnice
- **Koncept „Stredová čiara“:** prerušovaná stredová čiara cesty z ich loga je jediný motív (spodok hero, cenník, pätička); kosoštvorec výstražnej tabule z loga je drobný znak pred každým nadtitulkom.
- **Rodina A (ostrá):** polomer 0 všade, verzálkové nadpisy s prestrkaním 0, žiadne tiene okrem lepiacej hlavičky.
- **Tokeny:** kontajner 1280 (12 stĺpcov, medzera 24), padding sekcie 20 / 32, rytmus 120 / 60 (farebná plocha celý rytmus), H1 80 → 44, H2 52 → 32, text 16 / 150 %.
- **Písmo:** Mona Sans (jedna rodina; nadpisy šírka 75 Bold, text šírka 100).
- **Farby:** akcia = ich žltá `#fff200` (len plochy s čiernym písmom; fráza v nadpise ako žltý pás), text a tmavá plocha `#111214`, svetlá plocha `#f2f2f0`. Tmavé plochy 2× (hero, núdzová služba), žltá plocha 1× (výzva).
- **Sekcia na mieru:** nonstop dispečing v hero so živým časom Europe/Bratislava (sú nonstop, stav je vždy pravdivý), telefón, príchod do 30 minút, žiadne skryté poplatky.
- Presahy: fotky z odťahov a referencie bežia za pravý okraj okna. Pravý prvok hero a dvojstĺpcov začína na úrovni nadtitulku (zmerané pri 1024 / 1440 / 2000: rozdiel 0 px).

## Zmeny v textoch (len typografia)
- `50€` → `50 €`, `0,60€/km` → `0,60 €/km`, `1300kg` → `1 300 kg`.
- Vynechané podľa pravidiel neoficiálnych návrhov: kontaktný formulár („Napíšte nám správu“) a pätička „Copyright ©2026 Odťahovka Galanta. Všetky práva vyhradené.“ Pri spustení vrátiť / napojiť.
- Nový text rozhrania: „Práve teraz“ pri živom čase.

## Pred spustením overiť
- Recenzie (Marek F., Ivan P., Lukáš S.) majú pevné relatívne dátumy („Pred 2 týždňami“, „3 dni dozadu“) a pôvod nie je doložený — odporúčanie: súhrn z Google so zdrojom.
- Na webe nie je adresa ani e-mail — doplniť od klienta, ak ich chce uvádzať.
- Živý web odtahovka-galanta.sk 23. 11. 2026 nešiel otvoriť (neplatný TLS certifikát) — obsah je zo snímky z 9. 10. 2026.

## Fotky (`assets/img/`)
Všetky z odtahovka-galanta.sk/wp-content/uploads (WhatsApp fotky z 13. 11. 2025, logo vo svetlej aj tmavej verzii, favicon). Zmenšené a prevedené do WebP, bez úprav obsahu.

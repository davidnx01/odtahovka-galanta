# Odťahová služba Galanta — redizajn webu (neoficiálny návrh)

> Neoficiálny návrh — nie je to oficiálny web podniku. Ukážka redizajnu od [webdavid.sk](https://webdavid.sk); formulár ani objednávky tu nefungujú.

Nový vizuál pre [odtahovka-galanta.sk](https://odtahovka-galanta.sk). Texty a fotografie sú pôvodné z ich webu (stav 9. 10. 2026), zmenený je dizajn, štruktúra a technika.

Statický web bez build kroku: `index.html`, `o-nas/index.html`, `assets/` (CSS, JS, fotky vo WebP).

## Koncept: reflexná dopravná tabuľa v noci
- **Asfalt ako zem** (`#090b0e → #1c2129`), ich žltá `#fff101` ako reflexná fólia — len CTA, kľúčové čísla a jedna ozdoba.
- **Jedna ozdoba:** žltý kosoštvorec „24/7 NONSTOP“ — rovnaký tvar ako ich logo (výstražná tabuľa).
- **Cenník ako biela dodatková tabuľa** — jediná svetlá plocha na stránke, paušál 50 € a ceny za km veľkým písmom.
- **Živý prvok:** hodiny Europe/Bratislava pri „K dispozícii 24 hodín denne…“ (sú nonstop, takže stav je vždy pravdivý).
- Písmo: **Big Shoulders Display** (nadpisy, čísla — typ smerových tabúľ) + **Overpass** (text, odvodené od Highway Gothic).
- Vlastné jednotné ikony (SVG) namiesto pôvodných stock ilustrácií.

## Čo nový web rieši oproti pôvodnému
- Obsah je viditeľný hneď — pôvodný web skrýva sekcie animáciou pri scrollovaní (bez nej ostávajú biele plochy).
- Telefón je na každej obrazovke: hlavička, hero, pás faktov, žltá výzva, cenník, kontakt + fixná lišta „Zavolať“ na mobile.
- „O nás“ v menu vedie na skutočnú podstránku (pôvodne kotva na domovskej stránke).
- Pôvodná sekcia „Kontaktné informácie“ neobsahovala žiadny kontakt (len formulár) → teraz telefón a dostupnosť.
- Meta description, Open Graph, štruktúrované dáta (`AutomotiveBusiness`, otvorené 24/7), 1× H1 na stránku, alt texty, `:focus-visible`, `prefers-reduced-motion`.
- Bez jQuery, Bootstrapu, Elementoru a WordPressu: HTML 21 kB + CSS 15 kB + JS 1 kB.

## Zmeny v textoch (len typografia)
- `50€` → `50 €`, `0,60€/km` → `0,60 €/km`, `1300kg` → `1 300 kg`.
- Vynechané: pätička „Copyright ©2026 Odťahovka Galanta. Všetky práva vyhradené.“ (pravidlo neoficiálnych návrhov — žiadne © s ich menom). Pri spustení vrátiť.

## Pred spustením overiť
- Recenzie (Marek F., Ivan P., Lukáš S.) majú pevné relatívne dátumy („Pred 2 týždňami“, „3 dni dozadu“) — na živom webe nestarnú. Pôvod recenzií nie je doložený; odporúčanie: nahradiť súhrnom z Google so zdrojom.
- Formulár je v náhľade vypnutý — pri spustení napojiť (e-mail alebo administrácia).
- Na webe nie je adresa ani e-mail — doplniť od klienta, ak ich chce uvádzať.

## Fotky (`assets/img/`)
Všetky z odtahovka-galanta.sk/wp-content/uploads (WhatsApp fotky z 13. 11. 2025, `odtahovka-galanta-3/7`, `kontakt.jpg`, logo, favicon). Zmenšené a prevedené do WebP, bez úprav obsahu.

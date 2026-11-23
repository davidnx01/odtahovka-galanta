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

## Pohyb a jedinečné prvky (23. 11. 2026)
- **Jazda stránkou:** stredová čiara v hero beží ako pri nočnej jazde; ostatné stredové čiary (cenník, pätička) sa posúvajú s rolovaním.
- **Značka cesty v ľavom okraji** (okno od 1400 px): prerušovaná cesta a žltý kosoštvorec z loga ukazujú, kde na stránke ste.
- **Zákruta cesty vo výzve:** žltá plocha s čiernou cestou ako ich logo; stredová čiara tečie, keď je výzva vidieť.
- **Rozsvietenie hero:** fotka sa rozsvieti ako svetlá v noci, obsah nastúpi postupne.
- **Výstražné svetlá:** kosoštvorec nadtitulku dvakrát blikne, keď sa sekcia objaví; dvojbodka hodín dispečingu bliká, zelený stav pulzuje.
- Obsah sa pri rolovaní objavuje postupne (70 ms medzi položkami, max. 6), riadky recenzií a fotiek sa nehýbu po položkách. Tlačidlá s telefónom pri prejdení „zazvonia“, služby dostanú prerušovanú čiaru, fotky sa jemne priblížia.
- Bez JavaScriptu a pri „obmedziť pohyb“ je všetko hneď viditeľné a nič sa nehýbe.

## SEO (23. 11. 2026)
- **Dva režimy:** `python3 _build/build.py` = demo (noindex, robots zakazuje indexovanie, pruh návrhu). `python3 _build/build.py --live` = ich doména: `index, follow`, robots so sitemapou, bez pruhu, ich © v pätičke. Pri spustení stačí `--live`.
- **Titulky a popisy:** „Odťahová služba Galanta NONSTOP 24/7 | Odťah od 50 €“, „O nás | Odťahová služba Galanta – nonstop odťah 24/7“; popisy do 160 znakov s telefónom.
- **Hlavné kľúčové slová:** odťahová služba Galanta, odťahovka Galanta, odťah Galanta, odťah vozidla / auta Galanta, nonstop odťahová služba, asistenčná služba Galanta, odťah ťažkej techniky, odťah v rámci EÚ; miestne: Sereď, Šaľa, Sládkovičovo, Trnava, Senec, Bratislava.
- **Štruktúrované dáta (JSON-LD @graph):** WebSite, AutomotiveBusiness + EmergencyService (NAP, GPS, 24/7, oblasť pôsobenia, ponuky s cenami od 50 € a 0,60 / 0,80 €/km, katalóg 8 služieb, odkaz na Google mapu), WebPage, BreadcrumbList, FAQPage. Hodnotenie z Google zámerne **nie je** v schéme (Google nezobrazuje hviezdičky pri vlastných recenziách firmy a hrozí ručná penalizácia).
- **Meta:** canonical na odtahovka-galanta.sk, hreflang sk, Open Graph + Twitter s obrázkom 1200 × 630 (`og-odtahova-sluzba-galanta.jpg`), geo značky, manifest.
- **Sémantika:** jeden H1 na stránku, H2 pre sekcie, H3 pre položky; `header`, `nav`, `main`, `section`, `aside`, `footer`, `address`, `dl`, `details`; odkaz „Preskočiť na obsah“; popisné alt texty.
- **NAP:** Odťahová služba Galanta, Hodská 1232, 924 01 Galanta, 0911 135 211 (z ich profilu Google) v kontakte, pätičke aj schéme.
- **Nová sekcia „Kde pôsobíme“:** Galanta a blízke okolie do 30 minút, ďalej podľa vzdialenosti (Sládkovičovo, Sereď, Šaľa, Veľké Úľany, Senec, Trnava, Bratislava, SR, EÚ). Zoznam obcí overiť s klientom.
- **Rýchlosť:** písmo Mona Sans priamo na webe (bez Google Fonts), preload písma a hero fotky, 800 px varianty fotiek v `srcset`, lazy loading, dlhé cache pre písma a fotky (`vercel.json`).
- `sitemap.xml` s dátumom a fotkami.
- „Príchod do 30 minút“ platí len pre Galantu a okolie (dispečing, O nás, FAQ).

## Zmeny v textoch (len typografia)
- `50€` → `50 €`, `0,60€/km` → `0,60 €/km`, `1300kg` → `1 300 kg`.
- Vynechané podľa pravidiel neoficiálnych návrhov: kontaktný formulár („Napíšte nám správu“) a pätička „Copyright ©2026 Odťahovka Galanta. Všetky práva vyhradené.“ Pri spustení vrátiť / napojiť.
- Nový text rozhrania: „Práve teraz“ pri živom čase.

## Recenzie z Google (23. 11. 2026)
- Pôvodné 3 recenzie zo starého webu (Marek F., Ivan P., Lukáš S., bez zdroja) sú nahradené 22 recenziami z ich profilu Google, doslovne (aj s preklepmi). Recenzie skrátené na Google končia „…“. Vynechané: 1 negatívna recenzia (L. Vilgus), odpovede vlastníka, dátumy (Google ich uvádza len približne, „pred 9 mesiacmi“).
- Hodnotenie 4,8 z 31 recenzií (Google, 23. 11. 2026) je v HTML napevno — pri zmene upraviť v `_build/build.py` (`G_RATING`, `G_COUNT`).
- Klik na kartu, odznak aj „Všetky recenzie na Google“ otvorí okno recenzií ich profilu: `search.google.com/local/reviews?placeid=ChIJV22LMRlla0cRV9cov1G9rgE`.

## Pred spustením overiť
- Na webe nie je adresa ani e-mail — doplniť od klienta, ak ich chce uvádzať.
- Živý web odtahovka-galanta.sk 23. 11. 2026 nešiel otvoriť (neplatný TLS certifikát) — obsah je zo snímky z 9. 10. 2026.

## Fotky (`assets/img/`)
Všetky z odtahovka-galanta.sk/wp-content/uploads (WhatsApp fotky z 13. 11. 2025, logo vo svetlej aj tmavej verzii, favicon). Zmenšené a prevedené do WebP, bez úprav obsahu.

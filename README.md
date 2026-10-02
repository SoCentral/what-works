# What works? - nettside

Kampanjeside for det nordiske prosjektet "What works? Mapping, testing and scaling participatory methods in the Nordic region". Siden inviterer fagfolk til å dele deltakelsesmetoder via et Google-skjema, forklarer prosessen og presenterer Democratic Impact-modellen.

- **Prosjekteiere:** SoCentral (Norge), We Do Democracy (Danmark), Sitra (Finland). Digidem Lab (Sverige) er klargjort, men skjult.
- **Finansiert av:** Nordisk ministerråd
- **Initiert av:** Nordic Deliberation Partnership
- **Språk på siden:** engelsk
- **Design:** følger designguiden for Demokratisk Impact (Snild, august 2025)

---

## Filstruktur

| Fil | Hva den inneholder | Hvor ofte endres den |
|---|---|---|
| `settings.js` | Skjemalenke, tekst mens skjemaet ikke er klart, kontaktperson | Oftest |
| `index.html` | All tekst på siden. Hver seksjon er merket med en kommentar | Ved tekstendringer |
| `assets/style.css` | Hele designet: farger, skrift, avstander, mobilvisning | Sjelden |
| `assets/main.js` | Democratic Impact-modellen, menylinjen, reserve for manglende logoer | Sjelden |
| `images/favicon.svg` | Ikonet i nettleserfanen (logomerket) | Sjelden |
| `images/photo-group.jpg` | Bredt bilde under delingsboksen | Ved bildebytte |
| `images/photo-youth.jpg` | Bilde i Youth-seksjonen | Ved bildebytte |
| `images/logos/` | Logoer for Demokratisk Impact og partnerne | Ved nye partnere |

---

## Vanlige endringer

### 1. Legge inn lenken til skjemaet

Åpne `settings.js` og fyll inn lenken:

```js
formUrl: "https://forms.gle/abc123",
```

Så lenge feltet er tomt, peker alle "Share your method"-knappene til delingsboksen, og det står "The form opens soon". Når lenken er fylt inn, åpner knappene skjemaet i en ny fane.

### 2. Vise kontaktperson i bunnteksten

I `settings.js`:

```js
contactName: "Navn Navnesen",
contactEmail: "navn@socentral.no"
```

Linjen vises bare når **begge** feltene er fylt inn.

### 3. Endre tekst

Endre direkte i `index.html`. Seksjonene er merket slik:

```html
<!-- ============ HOW IT WORKS (fire steg) ============ -->
```

Rekkefølgen er: Meny, Banner, Del en metode, Bilde, How it works, Democratic impact, Youth, Om prosjektet, Bunntekst.

Tekstene i Democratic Impact-modellen (dimensjoner og underpunkter) ligger i listen `dims` i `assets/main.js`.

### 4. Aktivere Digidem Lab

1. Legg logoen i `images/logos/digidem.png`.
2. I `index.html`, finn linjen med `data-name="Digidem Lab"` og fjern `class="hidden"` fra `<li>`-elementet.
3. Legg gjerne også logoen inn i bunnteksten (seksjonen `class="logos"`), og endre `repeat(5, ...)` til `repeat(6, ...)` under `.logos` i `style.css`.

### 5. Bytte bilder

Legg det nye bildet i `images/` med **samme filnavn**. Husk å oppdatere:

- `alt`-teksten (beskrivelse for skjermlesere) i `index.html`
- fotokreditten (`<figcaption class="credit-photo">`)

### 6. Bytte eller justere logoer

Partnerlogoer ligger som PNG i `images/logos/` og vises på hvite flater. Logoene har ulik form, og hver har sin egen høyde i `style.css` for at de skal se like store ut:

```css
.logo img[src*="sitra"]{height:34px}
```

Mangler en logofil, viser siden navnet i en stiplet boks i stedet.

---

## Design (Demokratisk Impact)

Designet følger designguiden for Demokratisk Impact, utviklet av Snild for We Do Democracy og TrygFonden (august 2025).

### Logo

- Demokratisk Impact-logoen ligger **inline** i menyen i `index.html`, slik at den kan skifte farge: brun på lys bakgrunn og lys i mørk modus. Den bruker `fill="currentColor"`.
- Samme logo ligger som egen fil i `images/logos/demokratisk-impact.svg`.
- Faviconet er laget av logomerket (de to buene) på grå bakgrunn.
- Ifølge guiden kan merket og navnetrekket brukes hver for seg.

### Skrift

- **Plus Jakarta Sans**, Regular (400) og Italic, lastes fra Google Fonts.
- Vekt 500 brukes på knapper og små etiketter.
- Reserveskrift er Arial, som guiden også oppgir som systemskrift.
- Klassen `.mono` finnes fortsatt i koden for små etiketter, men bruker nå samme skrift som resten.

### Farger

Alle farger styres av variabler øverst i `assets/style.css` (`:root`).

| Rolle | Variabel | HEX |
|---|---|---|
| Primær - mørk brun (tekst, mørke flater) | `--brown` | `#3f382d` |
| Primær - lysegrønn (delingsboks, aksenter på mørk bakgrunn) | `--green` | `#dafdbb` |
| Primær - lys grå (bakgrunn) | `--grey` | `#e5e8e3` |
| Grå tint | `--grey-2` / `--grey-3` | `#eef0ec` / `#f5f6f3` |
| Sekundær - lilla (individnivå) | `--lilac` | `#e4d3de` |
| Sekundær - gull (prosessnivå) | `--gold` | `#b5935e` |

Mørk modus har egne verdier i de to `dark`-blokkene rett under `:root`.

**Kontrast:** Lysegrønn og gull har for svak kontrast mot lys bakgrunn til å brukes som tekstfarge. Bruk dem på flater, prikker og grafikk, og bruk brun tekst oppå.

### Grafiske elementer

- **Ringene** (videreutvikling av logomerket) står i delingsboksen. De er tegnet som inline SVG i `index.html` (`class="rings"`) og tar farge fra `color` i CSS.
- **Sirkler** brukes som markører i "How it works" (grønn, lilla, gull, brun).
- **Rette hjørner** på kort, bilder og seksjoner, som i guidens layouter. Runde former brukes bare på knapper, merkelapper og prikker.

### Democratic Impact-modellen

Fargene følger guidens infografikk:

| Nivå | Farge | Segmenter (lys til mørk) |
|---|---|---|
| Individual | Lilla `#e4d3de` | `#efe5ec`, `#e4d3de`, `#dac3d2`, `#cfb3c6` |
| System | Lysegrønn `#dafdbb` | `#eafed9`, `#dafdbb`, `#c6f59e` |
| Process | Gull `#b5935e` | `#dcc8a6`, `#c9ad7f`, `#b5935e` |

Fargene endres i `levels` og `dims` i `assets/main.js`. Modellen er utviklet av We Do Democracy med Analyse & Tal, TrygFonden og Københavns universitet, og kreditten står under modellen på siden.

---

## Publisering

Siden er en Claude-artifact, delt med organisasjonen. Alle med tilgang ser endringer med en gang de publiseres.

- Siden består av `index.html` pluss støttefilene over. Bilder og logoer refereres med relative stier, så filnavn og mapper må beholdes.
- Ingen andre eksterne avhengigheter enn Google Fonts.
- Siden fungerer på mobil (brytepunkter ved 960 og 640 px) og støtter mørk modus og redusert animasjon.

---

## Metode, prosess og bruk av KI

Denne seksjonen beskriver hvordan siden og denne dokumentasjonen er laget.

**Verktøy:** Siden er utviklet med Claude (Anthropic), en KI-assistent, i Claude Cowork.

**Prosess:**

1. **Første versjon:** Claude utformet tekst og design med prosjektsøknaden som grunnlag. Prosjektteamet gjennomgikk og godkjente innholdet.
2. **Designtilpasning (oktober 2026):** Claude tilpasset designet til designguiden for Demokratisk Impact (PDF, Snild, 27.08.2025) og den oppgitte SVG-logoen. Følgende ble endret:
   - skrift, fargepalett, logo og favicon
   - ringelementet og fargene i modellen
   - hjørneradius
   - mørk modus
   
   Selve teksten på siden ble ikke endret, bortsett fra AI-merknaden nederst.
3. **Kontroll:** Endringene ble testet med automatiske skjermbilder på desktop (1280 px), mobil (390 px) og i mørk modus. Testen sjekket også at siden ikke får vannrett scrolling. En feil der pilen i delingsboksen ble usynlig i mørk modus, ble rettet. Fonten og bildene ble ikke lastet i testmiljøet, så den publiserte siden bør kontrolleres visuelt.
4. **Dokumentasjon:** Denne README-filen er skrevet av Claude ut fra en gjennomgang av alle filene på siden.

**Tolkninger Claude gjorde der guiden ikke var entydig:**

- Guiden har ingen eksempler på knapper. Knappene er derfor beholdt med runde ender (som en sirkel-referanse) og en lysegrønn pil.
- Guiden har ikke definert noen mørk modus. Fargene for mørk modus er avledet fra paletten.
- Fargetonene i modellen er lysere og mørkere varianter av guidens farger. De er ikke definert i guiden.
- Menyen viser Demokratisk Impact-logoen i stedet for den tidligere "? What works"-merkevaren.

**Ansvar:** KI-generert innhold og design skal gjennomgås av prosjektteamet før det deles videre. På selve siden står en merknad om KI-bruken under "About this page" i bunnteksten.

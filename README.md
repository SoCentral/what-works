# What works? - nettside

Kampanjeside for det nordiske prosjektet "What works? Mapping, testing and scaling participatory methods in the Nordic region". Siden inviterer fagfolk til å dele deltakelsesmetoder via et Google-skjema, forklarer prosessen og presenterer Democratic Impact-modellen.

- **Prosjekteiere:** SoCentral (Norge), We Do Democracy (Danmark), Sitra (Finland). Digidem Lab (Sverige) er klargjort, men skjult.
- **Finansiert av:** Nordisk ministerråd
- **Initiert av:** Nordic Deliberation Partnership
- **Språk på siden:** engelsk
- **Design:** What works-designet (Schibsted Grotesk, blå/rød palett). Kun seksjonen "Democratic impact" følger designguiden for Demokratisk Impact (Snild, august 2025)

---

## Filstruktur

| Fil | Hva den inneholder | Hvor ofte endres den |
|---|---|---|
| `settings.js` | Skjemalenke, tekst mens skjemaet ikke er klart, kontaktperson | Oftest |
| `index.html` | All tekst på siden. Hver seksjon er merket med en kommentar | Ved tekstendringer |
| `assets/style.css` | Hele designet: farger, skrift, avstander, mobilvisning | Sjelden |
| `assets/main.js` | Democratic Impact-modellen, menylinjen, reserve for manglende logoer | Sjelden |
| `images/favicon.svg` | Ikonet i nettleserfanen (rødt "?") | Sjelden |
| `images/photo-group.jpg` | Bredt bilde under delingsboksen | Ved bildebytte |
| `images/photo-youth.jpg` | Bilde i Youth-seksjonen | Ved bildebytte |
| `images/logos/` | Logoer for partnerne (og en ubrukt kopi av Demokratisk Impact-logoen) | Ved nye partnere |

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

## Design

Siden har to designlag:

1. **What works-designet** gjelder hele siden. Variablene står øverst i `assets/style.css` (`:root`).
2. **Demokratisk Impact-designet** gjelder **kun** seksjonen `#impact`. Stilen står samlet nederst i `assets/style.css`, under overskriften `DEMOCRATIC IMPACT-SEKSJONEN`.

### What works-designet (hele siden)

- **Navn i menyen:** Teksten "What Works", uten logo (`<a class="brand">` i `index.html`).
- **Skrift:** Schibsted Grotesk til overskrifter og brødtekst, IBM Plex Mono til små etiketter.
- **Farger:**

| Rolle | Variabel | HEX |
|---|---|---|
| Bakgrunn | `--ground` | `#e8eff1` |
| Tekst | `--ink` | `#0e2438` |
| Blå aksent | `--accent` | `#1f5fa0` |
| Himmelblå | `--sky` | `#88d4ff` |
| Rød | `--berry` | `#d94f45` |

- Mørk modus har egne verdier i de to `dark`-blokkene rett under `:root`.

### Demokratisk Impact-designet (kun seksjonen "Democratic impact")

Designet følger designguiden for Demokratisk Impact, utviklet av Snild for We Do Democracy og TrygFonden (august 2025).

**Skrift:** Plus Jakarta Sans i Regular og Italic, lastet fra Google Fonts. Skriften brukes også på etikettene i seksjonen.

**Farger:** Seksjonen bruker en lys variant. Variablene er definert lokalt på `.impact`.

| Rolle | Variabel | HEX |
|---|---|---|
| Bakgrunn (guidens lyseste grå tint) | `--di-bg` | `#f5f6f3` |
| Detaljboks (lys grå, primærfarge) | `--di-panel` | `#e5e8e3` |
| Overskrifter og streker (brun) | `--di-brown` | `#3f382d` |
| Brødtekst | `--di-brown-2` | `#5a5246` |
| Små etiketter | `--di-brown-3` | `#6b6355` |
| Kantlinje | `--di-line` | `#d5d8d1` |

Den lilla og den grønne nivåstreken er gjort litt mørkere (`#cfb3c6` og `#a9e07a`), slik at de synes på den lyse bakgrunnen. Seksjonen er lys også når resten av siden vises i mørk modus.

**Andre elementer i seksjonen:**

- Demokratisk Impact-logoen står inline over modellkreditten (`class="di-logo"`). Den tegnes i brunt.
- Ringene fra guiden ligger svakt i bakgrunnen (`class="di-rings"`, brune, ca. 4,5 % opasitet).
- Seksjonen og detaljboksen har rette hjørner.

**Modellen:** Fargene følger guidens infografikk.

| Nivå | Farge | Segmenter (lys til mørk) |
|---|---|---|
| Individual | Lilla `#e4d3de` | `#efe5ec`, `#e4d3de`, `#dac3d2`, `#cfb3c6` |
| System | Lysegrønn `#dafdbb` | `#eafed9`, `#dafdbb`, `#c6f59e` |
| Process | Gull `#b5935e` | `#dcc8a6`, `#c9ad7f`, `#b5935e` |

Fargene endres i `levels` og `dims` i `assets/main.js`. Modellen er utviklet av We Do Democracy med Analyse & Tal, TrygFonden og Københavns universitet.

**Fjerne DI-designet igjen:** Slett blokken nederst i `style.css`, logoen (`di-sign`) og ringene (`di-rings`) i `index.html`. Sett deretter de gamle fargene tilbake i `main.js`.

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
2. **Designtilpasning (oktober 2026):** Claude tilpasset først hele siden til designguiden for Demokratisk Impact (PDF, Snild, 27.08.2025). Etter ønske fra prosjektteamet ble dette reversert. Siden fikk tilbake det opprinnelige What works-designet, og guiden ble brukt **kun** på seksjonen "Democratic impact":
   - skrift og farger
   - logo og ringelementet
   - fargene i modellen
   
   Seksjonen fikk deretter lys bakgrunn fra guiden i stedet for brun, slik at den passer bedre med resten av siden. Merkevaren i menyen ble endret til ren tekst, "What Works". Teksten på siden ble ikke endret, bortsett fra AI-merknaden nederst.
3. **Kontroll:** Endringene ble testet med automatiske skjermbilder på desktop (1280 px), mobil (390 px) og i mørk modus. Testen sjekket også at siden ikke får vannrett scrolling. Fonten og bildene ble ikke lastet i testmiljøet, så den publiserte siden bør kontrolleres visuelt.
4. **Dokumentasjon:** Denne README-filen er skrevet av Claude ut fra en gjennomgang av alle filene på siden.

**Tolkninger Claude gjorde der guiden ikke var entydig:**

- Fargetonene i modellen er lysere og mørkere varianter av guidens farger. De er ikke definert i guiden.
- Demokratisk Impact-logoen og ringene ble lagt inn i seksjonen for å knytte modellen til avsenderen. Begge kan fjernes uten at noe annet påvirkes.

**Ansvar:** KI-generert innhold og design skal gjennomgås av prosjektteamet før det deles videre. På selve siden står en merknad om KI-bruken under "About this page" i bunnteksten.

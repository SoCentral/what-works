# What works? Nettside

Prosjektnettsiden for "What works? Mapping, testing and scaling participatory methods in the Nordic region". Siden er statisk og ligger på GitHub Pages.

## Filene

| Fil | Hva den gjør | Endres |
|---|---|---|
| `settings.js` | Skjemalenke og kontaktperson | Oftest |
| `index.html` | All tekst på siden | Ved tekstendringer |
| `images/` | Bilde og logoer | Når bilder byttes |
| `assets/style.css` | Farger, skrift og oppsett | Sjelden |
| `assets/main.js` | Democratic Impact-modellen og knappene | Sjelden |

## Publisere siden første gang

1. Lag et nytt repository på GitHub, for eksempel `what-works` under SoCentral-kontoen.
2. Trykk "Add file", deretter "Upload files", og dra inn alle filene og mappene fra denne pakken. Trykk "Commit changes".
3. Gå til "Settings", deretter "Pages". Under "Branch" velger du `main` og mappen `/ (root)`, og trykker "Save".
4. Etter et par minutter ligger siden på `https://socentral.github.io/what-works/`.

## Vanlige endringer

Alle endringer kan gjøres rett i nettleseren på GitHub: åpne filen, trykk på blyanten ("Edit"), gjør endringen og trykk "Commit changes". Siden oppdateres etter et minutt eller to.

**Legge inn skjemalenken**
Åpne `settings.js` og lim inn lenken mellom anførselstegnene:
`formUrl: "https://forms.gle/..."`
Da virker alle "Share your method"-knappene. Så lenge feltet er tomt, står det "The form opens soon" ved knappen.

**Legge inn kontaktperson**
Fyll inn `contactName` og `contactEmail` i `settings.js`. Linjen vises i bunnteksten når begge er fylt inn.

**Endre tekst**
Åpne `index.html`. Hver seksjon er merket med en kommentar, for eksempel `<!-- ============ YOUTH (tekst og bilde) ============ -->`. Endre bare teksten mellom taggene, ikke det som står inne i `< >`.

**Bytte bilde**
Last opp et nytt bilde til `images/` med navnet `photo-youth.jpg` (erstatt det gamle). Et stående bilde, rundt 900 piksler bredt, fungerer best.

**Legge inn logoer**
Se `images/logos/LES-MEG.txt` for filnavnene.

**Endre Democratic Impact-modellen**
Dimensjonene og underpunktene står i listen `dims` i `assets/main.js`. Hver linje er én dimensjon, og underpunktene står i `items: [...]`.

## Å sjekke før lansering

- Skjemalenke, kontaktperson og logoer er lagt inn.
- Antall dimensjoner i modellen: presentasjonen viser 10, søknaden sier 11. Avklar med We Do Democracy.
- Tillatelse til å bruke bildet, fra fotograf og personen på bildet.
- Godkjenning fra alle tre partnere.
- Når adressen er klar: bytt `og:image` i `index.html` til full adresse, så vises bildet når lenken deles på LinkedIn.

## Metode og bruk av AI

- Design, kode og tekstforslag er laget med Claude (Anthropic) i Cowork, på oppdrag fra Sofie i SoCentral, september 2026.
- Grunnlag: prosjektbeskrivelsen fra søknaden, prosjektpresentasjonen fra 1. september 2026 (Democratic Impact-modellen), tekstutkast fra Thomas i prosjektteamet, og CIRCULAR-siden som inspirasjon.
- Bildet er beskåret slik at et passord på en flippover i originalbildet ikke vises.
- Tekstene er ikke kontrollert mot originalkildene av AI. Alt innhold må gjennomgås og godkjennes av prosjektteamet.
- En kort merknad om AI-bruk ligger nederst på selve nettsiden ("About this page"). Den kan endres i `index.html`.

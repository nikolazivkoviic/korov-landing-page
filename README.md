# KOROV — Landing Page

> Pokazni projekat / case study  
> Pržionica specijalne kafe iz Beograda (izmišljeni brend)

---

## Brief

**KOROV** je  mikro pržionica specijalne kafe sa Dorćola. Bavi se direktnim uvozom zrna iz Etiopije, Kolumbije i Burundija, prženjem u malim serijama (~200kg nedeljno) i prodajom kako krajnjim korisnicima tako i partnerskim kafićima.

**Cilj landing page-a:**
1. Komunicirati premium pozicioniranje brenda bez korišćenja banalnih „artisan coffee" klišea.
2. Prikazati aktuelnu ponudu od 4 zrna sa svim relevantnim podacima (proces, visina, profil prženja).
3. Konvertovati posetioca u pretplatnika (subscription model — kafa stiže svake dve nedelje).
4. Izgraditi autoritet kroz „Dnevnik prženja" — content marketing sekciju.

---

## Koncept i estetski pravac

Odabran je **editorial × brutalist × refined** pristup — kombinacija magazinske tipografije, asimetričnog layout-a i zemljanih boja koje evociraju zrno, glinene šolje i Dorćolske ulice.

### Ključne odluke u dizajnu

- **Tipografija:** *Fraunces* (display serif sa optical sizing) + *Inter Tight* (body) + *JetBrains Mono* (meta podaci). Namerno izbegnut Inter/Roboto kao osnovni font — KOROV je premium brend, treba mu karakterno pismo.
- **Paleta:** Pesak (`#f3eee5`), tinta (`#1a1612`), spaljena cigla (`#c1440e`) kao akcenat, karamel (`#d4a373`) kao sekundarni. Boje su izvedene iz palete tonova koje srećemo na samoj kafi — od zelenog zrna do tamnog prženja.
- **Layout:** Asimetrija u hero-u (svaki red naslova ima različito poravnanje), grid sa overflow elementima, „float" brojevima u pozadini koji odaju editorial osećaj.
- **Animacije:** Staggered reveal na scroll, count-up brojači u stats sekciji, 3D tilt na bean karticama, beskonačni ticker sa poreklima, parallax na hero brojevima.

---

## Sekcije

| # | Sekcija | Svrha |
|---|---------|-------|
| I | **Hero** | Snažan tipografski impact + ključne info (lokacija, datum prženja). |
| — | **Ticker** | Beskonačna traka sa svim destinacijama porekla. |
| II | **Manifest** | Pozicioniranje brenda u jednoj rečenici. |
| III | **Zrna** | Product grid sa 4 aktivna SKU. |
| IV | **Metod** | 6 koraka od parcele do šolje. |
| V | **Priča** | About sekcija sa osnivačicom + statistike. |
| VI | **Dnevnik** | Najnoviji blog postovi (autoritet, SEO). |
| VII | **CTA** | Pretplata sa formom za email. |
| — | **Footer** | Brand, navigacija, kontakti. |

---

## Tehnologije

Namerno **vanilla HTML/CSS/JS** — bez build alata, bez framework-a. Razlozi:

1. Landing page od ~600 linija HTML/CSS ne treba React. Manje JS-a → brži page load → bolji SEO.
2. Pokazuje da osnovi dizajn-implementacije rade i bez „pomagala".
3. Lakše za predaju klijentu — može ga uploadovati gde god (Netlify, Vercel, common shared hosting).

### Šta je iskorišćeno

- **Custom CSS varijable** za temu — boje, fontove, geometriju.
- **CSS Grid + Flexbox** za sve layout-e (auto-fit za product grid).
- **`clamp()`** za potpuno fluid tipografiju — radi savršeno od 320px do 4K.
- **IntersectionObserver** za scroll-triggered reveal animacije.
- **CSS `@keyframes`** za hero entrance, ticker, pulse, bob.
- **SVG noise filter** ugrađen u CSS za grain overlay (bez ijedne slike).
- **`prefers-reduced-motion`** poštovan — accessibility.
- **Semantički HTML** — `<header>`, `<nav>`, `<section>`, `<article>`, `<ol>` za korake, `aria-label` gde treba.

---

## Performanse

- ~5KB HTML, ~14KB CSS, ~3KB JS (nemajući kompresiju).
- Bez slika — sve vizuelno je CSS/SVG.
- Fontovi sa `display=swap` da text bude vidljiv pre learning-a.
- Lazy interakcije — animacije se aktiviraju samo kad je element u viewport-u.

---

## Kako pokrenuti

Otvoriti `index.html` u browser-u. Ne treba server.  
(Za production: postaviti na bilo koji static hosting — Netlify, Vercel, GitHub Pages.)

---

## Šta sledi (sledeća iteracija)

Ako bi se projekat razvio dalje:
- CMS integracija za Dnevnik (Sanity ili Webflow CMS).
- Stripe checkout za stvarnu prodaju.
- Multijezičnost (SR / EN).
- Animacija prženja na hero sa Lottie ili Canvas.
- Server-rendered varijanta (Astro) za bolji SEO.

---

*Dizajn & development — Nikola Živković, 2026.*

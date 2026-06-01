# Project Fridge - receptapp för att minska matsvinn
## Om projektet
Project Fridge som är skapat av grupp 08 är en webbapplikation som hjälper användare att hitta recept baserad på ingredienser de redan har hemma. Målgruppen är främst studenter och andra som vill minska matsvinn, spara pengar och laga mat med de ingredienser de har tillgängliga.

Användaren skriver in ingredienser (t.ex. “pasta”, “parmesan”, “tomato”) på engelska. Appen anropar Spoonacular API som returnerar receptförslag. Genom att klicka på ett recept visas detaljer som tillagningstid, antal portioner, ingredienslista och tillagningsinstruktioner. Användarens ingredienser sparas i localStorage, så de finns kvar även efter omladdning. Användaren kan när som helst lägga till eller ta bort ingredienser.

## Förutsättningar
- Node.js (version 20.19+, 22.12+)
- Spoonacular API-nyckel (gratis via [spoonacular.com](https://spoonacular.com/food-api))

## Installation
```bash
# 1. Installera paket
npm install

# 2. Skapa miljöfil
cp .env.example .env

# 3. Lägg till API-nyckel i .env

# 4. Starta servern
npm run dev
```

## Kända begränsningar
- API:et stödjer endast engelska och tyska, sökningar måste ske på engelska.
- Gratisversionen av Spoonacular tillåter ett begränsat antal anrop per dag.

## Ramverksjämförelse
Projektet är byggt med React. För att motivera valet jämfördes React med två andra alternativ: Angular och Svelte.

Angular är ett ramverk från Google som är mycket kraftfullt och ofta används i stora företagsprojekt. Ramverket innehåller många funktioner från början och erbjuder en tydlig struktur för större applikationer. Angular bygger i stor utsträckning på TypeScript och har en relativt brant inlärningskurva, vilket bedömdes innebära onödig komplexitet för detta projekt. Denna information om Angular stöds bland annat av Index.devs [1] jämförelse där Angulars starka struktur, TypeScript-stöd och användning i större applikationer lyfts.

Svelte är känt för att vara enkelt att komma igång med och kräver ofta mindre kod för att uppnå samma funktionalitet, samtidigt som det har en snabb prestanda. Däremot är Svelte relativt nytt på marknaden och har därför ett mindre community. Detta kan bland annat ses på Stack Overflow, där React och Angular har betydligt fler frågor och diskussioner än Svelte [2 - 4]. Enligt jämförelser av frontend-ramverk [5] har Svelte även ett mindre ekosystem med färre tredjepartsbibliotek och resurser jämfört med React och Angular.

React, som används i detta projekt, har enligt Index.dev [1]  ett mycket stort community och ekosystem med många färdiga bibliotek och verktyg. Enligt Stack Overflow Developer Survey 2025 [6] är React det mest använda JavaScript-biblioteket bland utvecklare. React är dessutom en av de mest efterfrågade frontend-teknikerna på arbetsmarknaden. I en global undersökning genomförd av TechBehemoths [7] 2022 rapporterade 75,4% av de tillfrågade IT-företagen att de använder React - vilket vägde tungt i valet av ramverk/bibliotek. En nackdel med React är att det endast är ett UI-bibliotek, så för att få full funktionalitet måste det läggas till extra bibliotek. I detta fall användes react-router-dom för navigering mellan receptlistan till detaljsidan för enskilda recept. Detta projekt utvecklades dessutom med Vite som byggverktyg.

## Källor:
[1] Index.dev - Jämförelse React vs Angular vs Vue
https://www.index.dev/skill-vs-skill/frontend-react-vs-vue-vs-angular 

[2] Stack Overflow - Frågor taggade #svelte
https://stackoverflow.com/questions/tagged/svelte?tab=Newest 

[3] Stack Overflow - Frågor taggade #angular
https://stackoverflow.com/questions/tagged/angular?tab=Newest 

[4] Stack Overflow - Frågor taggade #reactjs
https://stackoverflow.com/questions/tagged/reactjs?tab=Newest

[5] Intuz - Best Frontend Frameworks 2026
https://www.intuz.com/best-frontend-frameworks 

[6] Stack Overflow Developer Survey 2025 - Most popular technologies
https://survey.stackoverflow.co/2025/technology#most-popular-technologies-webframe-webframe 

[7] TechBehemoths - How IT companies use web development technologies (2022)
https://techbehemoths.com/blog/how-it-companies-use-web-development-technologies-survey

'use client'

import { useRouter, useParams } from 'next/navigation'
import { useState } from 'react'

const moduleLessons: Record<string, Record<string, any>> = {
  '1': {
    '1': {
      title: 'Wat een website, webshop en webapplicatie zijn',
      duration: '15 min',
      objectives: [
        'Begrijpen wat de drie hoofdtypen webprojecten zijn',
        'Kennen van de kenmerken van elk projecttype',
        'Voorbeelden kunnen geven van elk type'
      ],
      content: `
        <h3>De Basis: Drie Soorten Webprojecten</h3>
        <p>Als developer ga je drie hoofdtypen projecten bouwen. Laten we ze één voor één bekijken:</p>
        <div class="lesson-section">
          <h4>🌐 Website</h4>
          <p>Een website is de meest eenvoudige vorm van een webproject. Het is een verzameling pagina's die informatie presenteren.</p>
          <div class="example-box">
            <strong>Voorbeelden:</strong>
            <ul>
              <li>Bedrijfswebsite met "Over ons", "Diensten", "Contact"</li>
              <li>Portfolio van een fotograaf</li>
              <li>Blog met artikelen</li>
              <li>Landing page voor een product</li>
            </ul>
          </div>
          <p><strong>Kenmerken:</strong> Statisch, weinig interactie, vooral informatie presenteren</p>
        </div>
        <div class="lesson-section">
          <h4>🛒 Webshop</h4>
          <p>Een webshop is een website waar bezoekers producten kunnen kopen. Het heeft betalingsverwerking en een winkelwagen.</p>
          <div class="example-box">
            <strong>Voorbeelden:</strong>
            <ul>
              <li>Online kledingwinkel</li>
              <li>Elektronica webshop</li>
              <li>Digitale producten (cursussen, software)</li>
              <li>Lokale bakker die online verkoopt</li>
            </ul>
          </div>
          <p><strong>Kenmerken:</strong> Productcatalogus, winkelwagen, betalingsverwerking, voorraadbeheer</p>
        </div>
        <div class="lesson-section">
          <h4>⚡ Webapplicatie</h4>
          <p>Een webapplicatie is complexe software die draait in de browser. Het heeft databases, gebruikersaccounts en geavanceerde functionaliteiten.</p>
          <div class="example-box">
            <strong>Voorbeelden:</strong>
            <ul>
              <li>CRM systeem voor bedrijven</li>
              <li>Project management tool (zoals Trello)</li>
              <li>Social media platform</li>
              <li>Online boekhouding</li>
              <li>SaaS platform (Software as a Service)</li>
            </ul>
          </div>
          <p><strong>Kenmerken:</strong> Gebruikersaccounts, databases, real-time updates, complexe workflows</p>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Belangrijkste Verschil</h4>
          <p>Het verschil zit in <strong>complexiteit</strong> en <strong>functionaliteit</strong>:</p>
          <ul>
            <li><strong>Website:</strong> Informatie tonen</li>
            <li><strong>Webshop:</strong> Producten verkopen</li>
            <li><strong>Webapplicatie:</strong> Complexe taken uitvoeren</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welk type webproject heeft betalingsverwerking en een winkelwagen?",
        options: ["Website", "Webshop", "Webapplicatie", "Alle drie"],
        correct: 1
      }
    },
    '2': {
      title: 'Hoe deze verschillen in complexiteit',
      duration: '20 min',
      objectives: [
        'Begrijpen van de complexiteitsniveaus',
        'Kennen van benodigde vaardigheden per type',
        'Inzicht in tijdsinvestering per project'
      ],
      content: `
        <h3>Complexiteit: Van Simpel naar Geavanceerd</h3>
        <p>Laten we de complexiteit van elk projecttype analyseren:</p>
        <div class="lesson-section">
          <h4>🌐 Website - Niveau: Beginner</h4>
          <p><strong>Wat je moet kennen:</strong></p>
          <ul>
            <li>HTML & CSS</li>
            <li>Basis JavaScript</li>
            <li>Responsive design</li>
          </ul>
          <p><strong>Tijdsinvestering:</strong> 1-2 weken</p>
        </div>
        <div class="lesson-section">
          <h4>🛒 Webshop - Niveau: Intermediate</h4>
          <p><strong>Wat je moet kennen:</strong></p>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Backend development</li>
            <li>Database management</li>
            <li>Betalingsintegratie</li>
            <li>Beveiliging</li>
          </ul>
          <p><strong>Tijdsinvestering:</strong> 1-3 maanden</p>
        </div>
        <div class="lesson-section">
          <h4>⚡ Webapplicatie - Niveau: Gevorderd</h4>
          <p><strong>Wat je moet kennen:</strong></p>
          <ul>
            <li>Frontend frameworks (React, Vue, Angular)</li>
            <li>Backend frameworks (Node.js, Python, PHP)</li>
            <li>Database design</li>
            <li>API development</li>
            <li>Authentication & authorization</li>
            <li>Performance optimalisatie</li>
            <li>DevOps & deployment</li>
          </ul>
          <p><strong>Tijdsinvestering:</strong> 3-12 maanden</p>
        </div>
        <div class="key-takeaway">
          <h4>💡 Belangrijke Les</h4>
          <p>Begin altijd klein! Elke ervaring bouwt voort op de vorige. Een website is de perfecte start om de basis te leren.</p>
        </div>
      `,
      quiz: {
        question: "Hoe lang duurt het gemiddeld om een webshop te bouwen?",
        options: ["1-2 weken", "1-3 maanden", "3-12 maanden", "1-2 jaar"],
        correct: 1
      }
    },
    '3': {
      title: 'Verdienpotentieel per project type',
      duration: '25 min',
      objectives: [
        'Kennen van verdienpotentieel per projecttype',
        'Begrijpen van prijsfactoren',
        'Inzicht in recurring revenue kansen'
      ],
      content: `
        <h3>💰 Verdienpotentieel: Wat kun je verdienen?</h3>
        <p>Het verdienpotentieel verschilt sterk per projecttype. Hier is een realistische breakdown:</p>
        <div class="lesson-section">
          <h4>🌐 Website: €500 - €2.000</h4>
          <p><strong>Gemiddelde projectduur:</strong> 1-2 weken</p>
          <p><strong>Uurtarief equivalent:</strong> €25-€50/uur</p>
          <div class="example-box">
            <strong>Projectvoorbeelden:</strong>
            <ul>
              <li>Landing page: €500-€800</li>
              <li>Bedrijfswebsite (5 pagina's): €800-€1.500</li>
              <li>Portfolio site: €600-€1.200</li>
              <li>Blog setup: €400-€800</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🛒 Webshop: €2.000 - €8.000</h4>
          <p><strong>Gemiddelde projectduur:</strong> 1-3 maanden</p>
          <p><strong>Uurtarief equivalent:</strong> €40-€80/uur</p>
          <div class="example-box">
            <strong>Projectvoorbeelden:</strong>
            <ul>
              <li>Kleine webshop (50 producten): €2.000-€4.000</li>
              <li>Medium webshop (200 producten): €4.000-€6.000</li>
              <li>Grote webshop (500+ producten): €6.000-€8.000</li>
              <li>Custom webshop met speciale features: €8.000+</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>⚡ Webapplicatie: €8.000 - €20.000+</h4>
          <p><strong>Gemiddelde projectduur:</strong> 3-12 maanden</p>
          <p><strong>Uurtarief equivalent:</strong> €60-€120/uur</p>
          <div class="example-box">
            <strong>Projectvoorbeelden:</strong>
            <ul>
              <li>CRM systeem: €8.000-€15.000</li>
              <li>SaaS platform: €15.000-€25.000</li>
              <li>Custom business software: €20.000-€50.000</li>
              <li>Enterprise applicatie: €50.000+</li>
            </ul>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Strategie</h4>
          <p>Begin met websites om ervaring op te bouwen, ga dan over naar webshops voor hogere inkomsten, en ontwikkel uiteindelijk webapplicaties voor de grootste projecten.</p>
        </div>
      `,
      quiz: {
        question: "Wat is het verdienpotentieel voor een webapplicatie?",
        options: ["€500 - €2.000", "€2.000 - €8.000", "€8.000 - €20.000+", "€20.000 - €50.000+"],
        correct: 2
      }
    },
    '4': {
      title: 'Waarom AI de game-changer is voor developers',
      duration: '30 min',
      objectives: [
        'Begrijpen van AI impact op development',
        'Kennen van AI voordelen',
        'Inzicht in praktische AI toepassingen'
      ],
      content: `
        <h3>🤖 AI: De Revolutie in Software Development</h3>
        <p>AI verandert de manier waarop we software ontwikkelen. Hier is waarom het een game-changer is:</p>
        <div class="lesson-section">
          <h4>⚡ 10x Sneller Ontwikkelen</h4>
          <div class="example-box">
            <strong>Oude Manier:</strong>
            <ul>
              <li>Handmatig code schrijven</li>
              <li>Eindeloos googlen voor oplossingen</li>
              <li>Stack Overflow doorzoeken</li>
              <li>Documentatie lezen</li>
              <li>Fouten debuggen</li>
            </ul>
            <p><strong>Tijd:</strong> 8-16 uur</p>
          </div>
          <div class="example-box">
            <strong>Met AI:</strong>
            <ul>
              <li>AI genereert code</li>
              <li>Directe oplossingen</li>
              <li>Context-aware suggesties</li>
              <li>Automatische documentatie</li>
              <li>Proactieve foutdetectie</li>
            </ul>
            <p><strong>Tijd:</strong> 1-2 uur</p>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🎯 Minder Fouten, Betere Code</h4>
          <p>AI helpt je betere code te schrijven door:</p>
          <ul>
            <li><strong>Pattern Recognition:</strong> AI herkent patronen en voorkomt veelvoorkomende fouten</li>
            <li><strong>Best Practices:</strong> Automatische suggesties voor code kwaliteit</li>
            <li><strong>Security:</strong> Proactieve beveiligingscontroles</li>
            <li><strong>Performance:</strong> Optimalisatie suggesties</li>
          </ul>
        </div>
        <div class="key-takeaway">
          <h4>🎯 De Bottom Line</h4>
          <p>AI maakt je niet alleen sneller, het maakt je ook <strong>slimmer</strong>. Je kunt nu projecten aan die voorheen onmogelijk waren voor een solo developer.</p>
        </div>
      `,
      quiz: {
        question: "Hoeveel sneller kun je ontwikkelen met AI?",
        options: ["2x sneller", "5x sneller", "10x sneller", "20x sneller"],
        correct: 2
      }
    },
    '5': {
      title: 'Hoe je AI kunt gebruiken als je persoonlijke assistent',
      duration: '35 min',
      objectives: [
        'Kennen van AI workflow',
        'Begrijpen van effectieve prompts',
        'Inzicht in AI tools en best practices'
      ],
      content: `
        <h3>🤖 AI als je Persoonlijke Development Assistent</h3>
        <p>AI is niet alleen een tool, het is je persoonlijke assistent die 24/7 beschikbaar is. Hier is hoe je het effectief gebruikt:</p>
        <div class="lesson-section">
          <h4>🔄 Je Nieuwe Workflow</h4>
          <div class="example-box">
            <strong>Stap 1: Plan je Project</strong>
            <p>Vertel AI wat je wilt bouwen en laat het een plan maken</p>
          </div>
          <div class="example-box">
            <strong>Stap 2: Genereer Code</strong>
            <p>AI schrijft de basis code voor je functionaliteiten</p>
          </div>
          <div class="example-box">
            <strong>Stap 3: Debug & Verbeter</strong>
            <p>AI helpt je fouten vinden en oplossen</p>
          </div>
          <div class="example-box">
            <strong>Stap 4: Optimaliseer</strong>
            <p>AI suggereert verbeteringen en optimalisaties</p>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🛠️ Beste AI Tools voor Developers</h4>
          <div class="example-box">
            <strong>Cursor AI</strong>
            <p>De krachtigste AI code editor. Integreert direct in je development workflow.</p>
          </div>
          <div class="example-box">
            <strong>Cursor AI</strong>
            <p>De krachtigste AI code editor met geïntegreerde AI assistentie.</p>
          </div>
          <div class="example-box">
            <strong>ChatGPT</strong>
            <p>Algemene AI assistent voor planning en problemen oplossen.</p>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Je Nieuwe Superpower</h4>
          <p>Met AI als je assistent ben je niet meer beperkt door wat je weet. Je bent beperkt door wat je kunt bedenken. Dit is een game-changer voor je carrière als developer.</p>
        </div>
      `,
      quiz: {
        question: "Welk AI tool is het beste voor code generatie en debugging?",
        options: ["ChatGPT", "Cursor AI", "GitHub Copilot", "Alle drie"],
        correct: 1
      }
    }
  },
  '2': {
    '1': {
      title: 'HTML & CSS Fundamentals',
      duration: '30 min',
      objectives: [
        'Begrijpen van HTML structuur en semantiek',
        'Kennen van CSS basis concepten',
        'Kunnen maken van een eenvoudige website'
      ],
      content: `
        <h3>🌐 HTML & CSS: De Basis van Web Development</h3>
        <p>HTML en CSS zijn de fundamenten van elke website. Laten we beginnen met de basics:</p>
        <div class="lesson-section">
          <h4>📝 HTML: De Structuur</h4>
          <p>HTML (HyperText Markup Language) is de taal die de structuur van een webpagina definieert.</p>
          <div class="example-box">
            <strong>Basis HTML Structuur:</strong>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Mijn Website&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Welkom&lt;/h1&gt;
    &lt;p&gt;Dit is mijn eerste website!&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🎨 CSS: De Styling</h4>
          <p>CSS (Cascading Style Sheets) zorgt voor de visuele presentatie van je HTML.</p>
          <div class="example-box">
            <strong>Basis CSS:</strong>
            <pre><code>body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  color: #666;
  line-height: 1.6;
}</code></pre>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Een basis HTML structuur maken</li>
            <li>CSS gebruiken voor styling</li>
            <li>Het box model begrijpen</li>
            <li>Best practices toepassen</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welk HTML element gebruik je voor een paragraaf tekst?",
        options: ["<p>", "<div>", "<span>", "<text>"],
        correct: 0
      }
    },
    '2': {
      title: 'JavaScript Basics',
      duration: '35 min',
      objectives: [
        'Begrijpen van JavaScript syntax',
        'Kennen van basis concepten',
        'Kunnen maken van interactieve elementen'
      ],
      content: `
        <h3>⚡ JavaScript: Maak je Website Interactief</h3>
        <p>JavaScript is de programmeertaal die je website tot leven brengt. Laten we de basics leren:</p>
        <div class="lesson-section">
          <h4>🔧 JavaScript Syntax</h4>
          <p>JavaScript heeft een eenvoudige maar krachtige syntax:</p>
          <div class="example-box">
            <strong>Basis JavaScript:</strong>
            <pre><code>// Variabelen
let naam = "Chiel";
const leeftijd = 30;

// Functies
function begroet(naam) {
  return "Hallo " + naam + "!";
}

// Arrays
let kleuren = ["rood", "groen", "blauw"];

// Objecten
let persoon = {
  naam: "Chiel",
  leeftijd: 30,
  beroep: "Developer"
};</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🎯 DOM Manipulatie</h4>
          <p>JavaScript kan HTML elementen aanpassen:</p>
          <div class="example-box">
            <strong>DOM Voorbeelden:</strong>
            <pre><code>// Element selecteren
let titel = document.getElementById("titel");

// Inhoud aanpassen
titel.innerHTML = "Nieuwe titel";

// Event listener toevoegen
let knop = document.getElementById("knop");
knop.addEventListener("click", function() {
  alert("Knop geklikt!");
});</code></pre>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>JavaScript variabelen en functies gebruiken</li>
            <li>DOM elementen manipuleren</li>
            <li>Event listeners toevoegen</li>
            <li>Interactieve websites maken</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Hoe selecteer je een HTML element met ID 'titel' in JavaScript?",
        options: ["document.getElementById('titel')", "document.querySelector('#titel')", "document.getElement('titel')", "Alle drie"],
        correct: 0
      }
    },
    '3': {
      title: 'Responsive Design',
      duration: '25 min',
      objectives: [
        'Begrijpen van responsive design principes',
        'Kennen van CSS Grid en Flexbox',
        'Kunnen maken van mobile-first designs'
      ],
      content: `
        <h3>📱 Responsive Design: Zorg dat je Website er Overal Goed Uitziet</h3>
        <p>Responsive design zorgt ervoor dat je website er goed uitziet op alle apparaten:</p>
        <div class="lesson-section">
          <h4>📐 CSS Grid</h4>
          <p>CSS Grid is een krachtige layout tool:</p>
          <div class="example-box">
            <strong>Grid Voorbeeld:</strong>
            <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🎯 Flexbox</h4>
          <p>Flexbox is perfect voor flexibele layouts:</p>
          <div class="example-box">
            <strong>Flexbox Voorbeeld:</strong>
            <pre><code>.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.navbar a {
  margin: 0 10px;
  text-decoration: none;
}</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📱 Media Queries</h4>
          <p>Media queries passen styling aan voor verschillende schermgroottes:</p>
          <div class="example-box">
            <strong>Media Query Voorbeelden:</strong>
            <pre><code>/* Desktop */
@media (min-width: 1024px) {
  .container { max-width: 1200px; }
}

/* Tablet */
@media (max-width: 768px) {
  .container { padding: 10px; }
}

/* Mobile */
@media (max-width: 480px) {
  .container { padding: 5px; }
}</code></pre>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>CSS Grid gebruiken voor complexe layouts</li>
            <li>Flexbox toepassen voor flexibele designs</li>
            <li>Media queries schrijven</li>
            <li>Mobile-first websites maken</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welke CSS property gebruik je voor responsive design met media queries?",
        options: ["@media", "@responsive", "@screen", "@viewport"],
        correct: 0
      }
    },
    '4': {
      title: 'Version Control met Git',
      duration: '20 min',
      objectives: [
        'Begrijpen van version control concepten',
        'Kennen van basis Git commando\'s',
        'Kunnen werken met GitHub'
      ],
      content: `
        <h3>🔧 Version Control: Houd je Code Georganiseerd</h3>
        <p>Git is essentieel voor elke developer. Het helpt je code te organiseren en samen te werken:</p>
        <div class="lesson-section">
          <h4>📝 Wat is Version Control?</h4>
          <p>Version control houdt bij welke wijzigingen je hebt gemaakt en wanneer:</p>
          <div class="example-box">
            <strong>Voordelen van Git:</strong>
            <ul>
              <li>📚 Geschiedenis van alle wijzigingen</li>
              <li>🔄 Terugdraaien van fouten</li>
              <li>👥 Samenwerken met anderen</li>
              <li>🌿 Verschillende versies (branches)</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>⚡ Basis Git Commando's</h4>
          <p>Deze commando's gebruik je dagelijks:</p>
          <div class="example-box">
            <strong>Essentiële Commando's:</strong>
            <pre><code># Repository initialiseren
git init

# Bestanden toevoegen
git add .

# Wijzigingen committen
git commit -m "Voeg nieuwe feature toe"

# Status bekijken
git status

# Geschiedenis bekijken
git log

# Branch maken
git checkout -b nieuwe-feature

# Wijzigingen pushen naar GitHub
git push origin main</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🌐 GitHub Workflow</h4>
          <p>GitHub is de standaard voor code hosting:</p>
          <div class="example-box">
            <strong>GitHub Workflow:</strong>
            <ol>
              <li>Repository maken op GitHub</li>
              <li>Lokaal project koppelen</li>
              <li>Code schrijven en committen</li>
              <li>Wijzigingen pushen</li>
              <li>Pull requests maken</li>
            </ol>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Git repository initialiseren</li>
            <li>Wijzigingen committen en pushen</li>
            <li>Branches maken en gebruiken</li>
            <li>Met GitHub samenwerken</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welk Git commando gebruik je om wijzigingen te committen?",
        options: ["git commit", "git save", "git push", "git add"],
        correct: 0
      }
    },
    '5': {
      title: 'Deployment & Hosting',
      duration: '30 min',
      objectives: [
        'Begrijpen van deployment processen',
        'Kennen van verschillende hosting opties',
        'Kunnen deployen naar Vercel'
      ],
      content: `
        <h3>🚀 Deployment: Zet je Website Online</h3>
        <p>Deployment is het proces van je website online zetten zodat anderen hem kunnen bezoeken:</p>
        <div class="lesson-section">
          <h4>🌐 Hosting Opties</h4>
          <p>Er zijn verschillende manieren om je website online te zetten:</p>
          <div class="example-box">
            <strong>Populaire Hosting Services:</strong>
            <ul>
              <li>🚀 <strong>Vercel</strong> - Perfect voor React/Next.js</li>
              <li>☁️ <strong>Netlify</strong> - Geweldig voor statische sites</li>
              <li>🐘 <strong>Heroku</strong> - Voor full-stack applicaties</li>
              <li>☁️ <strong>AWS</strong> - Voor enterprise projecten</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>⚡ Vercel Deployment</h4>
          <p>Vercel is perfect voor beginners en experts:</p>
          <div class="example-box">
            <strong>Vercel Deployment Stappen:</strong>
            <ol>
              <li>Account maken op vercel.com</li>
              <li>GitHub repository koppelen</li>
              <li>Automatische deployment instellen</li>
              <li>Custom domain toevoegen (optioneel)</li>
            </ol>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔧 Deployment Best Practices</h4>
          <p>Volg deze tips voor succesvolle deployments:</p>
          <div class="example-box">
            <strong>Best Practices:</strong>
            <ul>
              <li>✅ Test je code lokaal eerst</li>
              <li>✅ Gebruik environment variables</li>
              <li>✅ Optimaliseer voor performance</li>
              <li>✅ Zet up monitoring</li>
              <li>✅ Maak backups</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📊 Performance Optimalisatie</h4>
          <p>Zorg dat je website snel laadt:</p>
          <div class="example-box">
            <strong>Performance Tips:</strong>
            <ul>
              <li>🖼️ Optimaliseer afbeeldingen</li>
              <li>📦 Minify CSS/JS</li>
              <li>🚀 Gebruik CDN</li>
              <li>💾 Implementeer caching</li>
            </ul>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Website deployen naar Vercel</li>
            <li>Custom domain instellen</li>
            <li>Performance optimaliseren</li>
            <li>Monitoring instellen</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welke hosting service is het beste voor Next.js applicaties?",
        options: ["Vercel", "Netlify", "Heroku", "AWS"],
        correct: 0
      }
    }
  },
  '3': {
    '1': {
      title: 'Cursor AI Mastery',
      duration: '40 min',
      objectives: [
        'Begrijpen van Cursor AI functionaliteiten',
        'Kennen van effectieve prompts',
        'Kunnen gebruiken voor code generatie en debugging'
      ],
      content: `
        <h3>🎯 Cursor AI: Je Superpower voor Development</h3>
        <p>Cursor AI is een van de krachtigste AI tools voor developers. Laten we leren hoe je het effectief gebruikt:</p>
        <div class="lesson-section">
          <h4>🚀 Wat is Cursor AI?</h4>
          <p>Cursor AI is een AI-powered code editor die je helpt sneller en beter te programmeren:</p>
          <div class="example-box">
            <strong>Hoofdfunctionaliteiten:</strong>
            <ul>
              <li>🤖 AI-assisted code completion</li>
              <li>🔍 Intelligent code analysis</li>
              <li>🐛 Automated debugging</li>
              <li>📝 Code documentation generation</li>
              <li>🔄 Refactoring suggestions</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>⚙️ Setup en Configuratie</h4>
          <p>Laten we Cursor AI correct instellen:</p>
          <div class="example-box">
            <strong>Installatie Stappen:</strong>
            <ol>
              <li>Download Cursor AI van cursor.sh</li>
              <li>Installeer en open de applicatie</li>
              <li>Log in met je GitHub account</li>
              <li>Configureer je workspace</li>
              <li>Installeer benodigde extensions</li>
            </ol>
          </div>
        </div>
        <div class="lesson-section">
          <h4>💬 Effectieve Prompts Schrijven</h4>
          <p>De kwaliteit van je prompts bepaalt de kwaliteit van de output:</p>
          <div class="example-box">
            <strong>Prompt Best Practices:</strong>
            <pre><code>// ❌ Slechte prompt
"maak een functie"

// ✅ Goede prompt
"Maak een JavaScript functie die een array van gebruikers filtert op leeftijd. 
De functie moet een minimum leeftijd parameter accepteren en alleen gebruikers 
teruggeven die ouder zijn dan de minimum leeftijd. Voeg ook JSDoc comments toe."</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔧 Code Generatie</h4>
          <p>Cursor AI kan complete functies en componenten genereren:</p>
          <div class="example-box">
            <strong>Voorbeeld Prompt:</strong>
            <pre><code>// Prompt: "Maak een React component voor een user profile card"
// Cursor AI genereert:
function UserProfileCard({ user }) {
  return (
    &lt;div className="profile-card"&gt;
      &lt;img src={user.avatar} alt={user.name} /&gt;
      &lt;h3&gt;{user.name}&lt;/h3&gt;
      &lt;p&gt;{user.email}&lt;/p&gt;
      &lt;div className="stats"&gt;
        &lt;span&gt;Posts: {user.posts}&lt;/span&gt;
        &lt;span&gt;Followers: {user.followers}&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🐛 Debugging met AI</h4>
          <p>Cursor AI kan je helpen bugs te vinden en op te lossen:</p>
          <div class="example-box">
            <strong>Debugging Workflow:</strong>
            <ol>
              <li>Selecteer de code met de bug</li>
              <li>Vraag Cursor AI om de code te analyseren</li>
              <li>Krijg suggesties voor fixes</li>
              <li>Test de voorgestelde oplossingen</li>
              <li>Implementeer de beste fix</li>
            </ol>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Cursor AI installeren en configureren</li>
            <li>Effectieve prompts schrijven</li>
            <li>Code genereren met AI</li>
            <li>Bugs debuggen met AI assistentie</li>
            <li>Je development workflow versnellen</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Wat is het belangrijkste voor het schrijven van effectieve prompts in Cursor AI?",
        options: ["Korte prompts", "Specifieke en gedetailleerde prompts", "Engelse prompts", "Technische termen gebruiken"],
        correct: 1
      }
    },
    '2': {
      title: 'Cursor AI Advanced Features',
      duration: '35 min',
      objectives: [
        'Begrijpen van geavanceerde Cursor AI functionaliteiten',
        'Kennen van AI-powered development workflows',
        'Kunnen gebruiken van advanced features'
      ],
      content: `
        <h3>🚀 Cursor AI Advanced: Naar het Volgende Niveau</h3>
        <p>Nu je de basics kent, laten we de geavanceerde features van Cursor AI ontdekken:</p>
        <div class="lesson-section">
          <h4>🤖 Geavanceerde AI Features</h4>
          <p>Cursor AI heeft krachtige features die je development naar het volgende niveau tillen:</p>
          <div class="example-box">
            <strong>Advanced Functionaliteiten:</strong>
            <ul>
              <li>⚡ AI-powered code refactoring</li>
              <li>🔍 Intelligent code analysis</li>
              <li>📝 Automated documentation</li>
              <li>🧪 Test generation</li>
              <li>🔧 Performance optimization</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔄 AI-Powered Refactoring</h4>
          <p>Cursor AI kan je code automatisch verbeteren:</p>
          <div class="example-box">
            <strong>Refactoring Voorbeelden:</strong>
            <pre><code>// Voor: Oude code
function getUserData(id) {
  fetch('/api/users/' + id)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });
}

// Na: AI-geoptimaliseerde code
async function getUserData(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🧪 Automated Testing</h4>
          <p>Cursor AI kan automatisch tests genereren:</p>
          <div class="example-box">
            <strong>Test Generation:</strong>
            <pre><code>// Prompt: "Generate tests for this function"
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// AI genereert:
describe('calculateTotal', () => {
  test('should return 0 for empty array', () => {
    expect(calculateTotal([])).toBe(0);
  });
  
  test('should calculate total correctly', () => {
    const items = [
      { price: 10 },
      { price: 20 },
      { price: 30 }
    ];
    expect(calculateTotal(items)).toBe(60);
  });
});</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📊 Performance Analysis</h4>
          <p>Cursor AI analyseert je code voor performance issues:</p>
          <div class="example-box">
            <strong>Performance Tips:</strong>
            <ul>
              <li>🔍 Identificeert slow code patterns</li>
              <li>⚡ Suggereert optimalisaties</li>
              <li>📈 Analyseert memory usage</li>
              <li>🚀 Recommends caching strategies</li>
              <li>🔄 Suggereert code splitting</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🎯 Advanced Workflow Integration</h4>
          <p>Integreer Cursor AI in je complete development workflow:</p>
          <div class="example-box">
            <strong>Workflow Features:</strong>
            <ul>
              <li>🔄 Git integration met AI commit messages</li>
              <li>📝 Automated code review</li>
              <li>🔧 Dependency management</li>
              <li>🚀 Deployment automation</li>
              <li>📊 Project analytics</li>
            </ul>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Geavanceerde Cursor AI features gebruiken</li>
            <li>AI-powered refactoring toepassen</li>
            <li>Automated testing implementeren</li>
            <li>Performance optimalisaties toepassen</li>
            <li>Complete AI-powered workflow opzetten</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welke feature van Cursor AI helpt je code automatisch verbeteren?",
        options: ["AI-powered refactoring", "Code completion", "Syntax highlighting", "File management"],
        correct: 0
      }
    },
    '3': {
      title: 'ChatGPT voor Development',
      duration: '45 min',
      objectives: [
        'Begrijpen van ChatGPT voor development',
        'Kennen van effectieve prompts',
        'Kunnen gebruiken voor problem solving'
      ],
      content: `
        <h3>🧠 ChatGPT: Je AI Development Mentor</h3>
        <p>ChatGPT is een krachtige AI tool die je kan helpen met allerlei development taken:</p>
        <div class="lesson-section">
          <h4>🎯 ChatGPT voor Development</h4>
          <p>ChatGPT kan je helpen met verschillende development taken:</p>
          <div class="example-box">
            <strong>Gebruik Cases:</strong>
            <ul>
              <li>🔍 Code review en debugging</li>
              <li>📚 Learning en concepten uitleggen</li>
              <li>🏗️ Architectuur beslissingen</li>
              <li>📝 Documentatie schrijven</li>
              <li>🧪 Test strategieën</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>💬 Effectieve Prompts Schrijven</h4>
          <p>De kwaliteit van je prompts bepaalt de kwaliteit van de antwoorden:</p>
          <div class="example-box">
            <strong>Prompt Framework:</strong>
            <pre><code>// Structuur voor effectieve prompts:
1. Context: "Ik ben een beginner developer die..."
2. Specifieke vraag: "Hoe maak ik een..."
3. Constraints: "Gebruik alleen vanilla JavaScript"
4. Output format: "Geef een stap-voor-stap uitleg"
5. Follow-up: "Kun je ook een voorbeeld geven?"</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔍 Code Review en Debugging</h4>
          <p>ChatGPT kan je helpen code te analyseren en bugs te vinden:</p>
          <div class="example-box">
            <strong>Debugging Prompt Voorbeeld:</strong>
            <pre><code>// Prompt:
"Ik heb deze JavaScript code die niet werkt:

function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price;
  }
  return total;
}

De functie geeft NaN terug. Kun je de bug vinden en uitleggen?"

// ChatGPT antwoord:
"De bug zit in de for loop. Je gebruikt <= in plaats van <.
Dit zorgt ervoor dat je probeert toegang te krijgen tot items[items.length],
wat undefined is. undefined.price geeft NaN."</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📚 Learning en Concepten</h4>
          <p>ChatGPT is geweldig voor het leren van nieuwe concepten:</p>
          <div class="example-box">
            <strong>Learning Prompts:</strong>
            <ul>
              <li>"Leg uit wat async/await is met voorbeelden"</li>
              <li>"Wat is het verschil tussen let, const en var?"</li>
              <li>"Hoe werkt CSS Grid precies?"</li>
              <li>"Wat zijn React hooks en hoe gebruik je ze?"</li>
              <li>"Leg uit wat API's zijn en hoe je ze gebruikt"</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🏗️ Architectuur en Planning</h4>
          <p>ChatGPT kan je helpen met project planning en architectuur:</p>
          <div class="example-box">
            <strong>Planning Prompts:</strong>
            <pre><code>// Prompt:
"Ik wil een e-commerce website maken. Kun je me helpen met:
1. De beste tech stack kiezen
2. Database schema ontwerpen
3. API endpoints plannen
4. Security best practices
5. Deployment strategie"

// ChatGPT geeft een complete roadmap</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>⚠️ Best Practices en Limitations</h4>
          <p>Belangrijke tips voor het gebruik van ChatGPT:</p>
          <div class="example-box">
            <strong>Do's and Don'ts:</strong>
            <ul>
              <li>✅ Verifieer altijd de output</li>
              <li>✅ Test code voordat je het gebruikt</li>
              <li>✅ Gebruik voor learning, niet alleen copy-paste</li>
              <li>❌ Vertrouw niet blindelings op alle antwoorden</li>
              <li>❌ Deel geen gevoelige informatie</li>
              <li>❌ Gebruik niet voor productie code zonder review</li>
            </ul>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Effectieve prompts schrijven voor ChatGPT</li>
            <li>Code review en debugging met AI</li>
            <li>Nieuwe concepten leren</li>
            <li>Project planning met AI assistentie</li>
            <li>Veilig en effectief AI gebruiken</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Wat is het belangrijkste bij het gebruik van ChatGPT voor development?",
        options: ["Accepteer alle antwoorden", "Verifieer altijd de output", "Gebruik alleen voor complexe problemen", "Deel gevoelige code"],
        correct: 1
      }
    },
    '4': {
      title: 'AI Code Review',
      duration: '30 min',
      objectives: [
        'Begrijpen van AI-powered code review',
        'Kennen van tools en technieken',
        'Kunnen implementeren in workflow'
      ],
      content: `
        <h3>🔍 AI Code Review: Automatische Code Analyse</h3>
        <p>AI-powered code review helpt je code kwaliteit te verbeteren en bugs te voorkomen:</p>
        <div class="lesson-section">
          <h4>🤖 Wat is AI Code Review?</h4>
          <p>AI code review gebruikt machine learning om code automatisch te analyseren:</p>
          <div class="example-box">
            <strong>Voordelen van AI Code Review:</strong>
            <ul>
              <li>⚡ Snelle analyse van grote codebases</li>
              <li>🔍 Consistente code review standaarden</li>
              <li>🐛 Vroegtijdige bug detectie</li>
              <li>📊 Performance insights</li>
              <li>🔒 Security vulnerability detection</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🛠️ AI Code Review Tools</h4>
          <p>Er zijn verschillende tools beschikbaar:</p>
          <div class="example-box">
            <strong>Populaire Tools:</strong>
            <ul>
              <li>🔍 <strong>SonarQube</strong> - Comprehensive code analysis</li>
              <li>🤖 <strong>CodeClimate</strong> - Automated code review</li>
              <li>⚡ <strong>DeepCode</strong> - AI-powered suggestions</li>
              <li>🔒 <strong>Snyk</strong> - Security-focused analysis</li>
              <li>📊 <strong>Codacy</strong> - Quality monitoring</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔍 Automated Code Analysis</h4>
          <p>AI tools kunnen verschillende aspecten van je code analyseren:</p>
          <div class="example-box">
            <strong>Analyse Types:</strong>
            <ul>
              <li>📏 <strong>Code Style</strong> - Consistentie en formatting</li>
              <li>🐛 <strong>Bug Detection</strong> - Potentiële runtime errors</li>
              <li>🔒 <strong>Security</strong> - Vulnerabilities en best practices</li>
              <li>⚡ <strong>Performance</strong> - Optimalisatie mogelijkheden</li>
              <li>📚 <strong>Documentation</strong> - Missing comments en docs</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔒 Security Vulnerability Detection</h4>
          <p>AI tools kunnen security issues detecteren:</p>
          <div class="example-box">
            <strong>Security Checks:</strong>
            <pre><code>// ❌ Gevaarlijke code
const query = "SELECT * FROM users WHERE id = " + userId;

// ✅ Veilige code
const query = "SELECT * FROM users WHERE id = ?";
db.query(query, [userId]);</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>⚡ Performance Optimization</h4>
          <p>AI kan performance issues identificeren:</p>
          <div class="example-box">
            <strong>Performance Tips:</strong>
            <ul>
              <li>🔄 Vermijd N+1 queries</li>
              <li>💾 Implementeer caching</li>
              <li>📦 Bundle optimization</li>
              <li>🖼️ Image optimization</li>
              <li>🚀 Lazy loading</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📊 Implementatie in Workflow</h4>
          <p>Integreer AI code review in je development workflow:</p>
          <div class="example-box">
            <strong>Workflow Integration:</strong>
            <ol>
              <li>🔧 Tool installeren en configureren</li>
              <li>📋 Quality gates instellen</li>
              <li>🔄 Automatische checks bij commits</li>
              <li>📊 Reports en dashboards</li>
              <li>👥 Team training en adoption</li>
            </ol>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>AI code review tools selecteren</li>
            <li>Automated analysis implementeren</li>
            <li>Security vulnerabilities detecteren</li>
            <li>Performance issues identificeren</li>
            <li>Code kwaliteit verbeteren</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Wat is het belangrijkste voordeel van AI code review?",
        options: ["Het vervangt menselijke reviewers", "Snelle analyse van grote codebases", "Het is gratis", "Het werkt altijd perfect"],
        correct: 1
      }
    },
    '5': {
      title: 'AI Project Planning',
      duration: '40 min',
      objectives: [
        'Begrijpen van AI in project planning',
        'Kennen van tools en technieken',
        'Kunnen implementeren in workflow'
      ],
      content: `
        <h3>📋 AI Project Planning: Slimme Project Management</h3>
        <p>AI kan je helpen bij het plannen en beheren van development projecten:</p>
        <div class="lesson-section">
          <h4>🎯 AI in Project Planning</h4>
          <p>AI tools kunnen verschillende aspecten van project planning ondersteunen:</p>
          <div class="example-box">
            <strong>AI Planning Voordelen:</strong>
            <ul>
              <li>📊 Data-driven beslissingen</li>
              <li>⏱️ Accurate time estimation</li>
              <li>👥 Resource allocation</li>
              <li>🚨 Risk assessment</li>
              <li>📈 Progress tracking</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🛠️ AI Project Management Tools</h4>
          <p>Er zijn verschillende AI-powered project management tools:</p>
          <div class="example-box">
            <strong>Populaire Tools:</strong>
            <ul>
              <li>📊 <strong>Monday.com</strong> - AI-powered workflow automation</li>
              <li>🎯 <strong>Asana</strong> - Smart project planning</li>
              <li>📈 <strong>ClickUp</strong> - AI task estimation</li>
              <li>🤖 <strong>Notion AI</strong> - Content en planning assistentie</li>
              <li>📋 <strong>Trello</strong> - AI-powered automation</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>⏱️ Time Estimation met AI</h4>
          <p>AI kan helpen bij het schatten van project tijdlijnen:</p>
          <div class="example-box">
            <strong>Estimation Process:</strong>
            <ol>
              <li>📝 Project requirements analyseren</li>
              <li>🔍 Historische data vergelijken</li>
              <li>👥 Team capaciteit evalueren</li>
              <li>🚨 Risico's identificeren</li>
              <li>📊 AI-powered estimation genereren</li>
            </ol>
          </div>
        </div>
        <div class="lesson-section">
          <h4>👥 Resource Allocation</h4>
          <p>AI kan helpen bij het optimaal toewijzen van resources:</p>
          <div class="example-box">
            <strong>Allocation Factors:</strong>
            <ul>
              <li>🎯 <strong>Skills matching</strong> - Juiste persoon voor de taak</li>
              <li>⏰ <strong>Availability</strong> - Beschikbare tijd</li>
              <li>📈 <strong>Performance history</strong> - Eerdere resultaten</li>
              <li>🔄 <strong>Workload balance</strong> - Evenwichtige verdeling</li>
              <li>🚀 <strong>Growth opportunities</strong> - Leermogelijkheden</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🚨 Risk Assessment</h4>
          <p>AI kan project risico's identificeren en voorspellen:</p>
          <div class="example-box">
            <strong>Risk Categories:</strong>
            <ul>
              <li>⏰ <strong>Timeline risks</strong> - Vertragingen</li>
              <li>💰 <strong>Budget risks</strong> - Kosten overschrijding</li>
              <li>👥 <strong>Team risks</strong> - Beschikbaarheid</li>
              <li>🔧 <strong>Technical risks</strong> - Technische uitdagingen</li>
              <li>📊 <strong>Scope risks</strong> - Requirements wijzigingen</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📈 Progress Tracking</h4>
          <p>AI kan project voortgang monitoren en voorspellen:</p>
          <div class="example-box">
            <strong>Tracking Metrics:</strong>
            <ul>
              <li>📊 <strong>Completion percentage</strong></li>
              <li>⏱️ <strong>Time spent vs estimated</strong></li>
              <li>🎯 <strong>Milestone achievement</strong></li>
              <li>🚨 <strong>Blockers identification</strong></li>
              <li>📈 <strong>Trend analysis</strong></li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔧 Implementatie Strategie</h4>
            <p>Hoe je AI project planning implementeert:</p>
            <div class="example-box">
              <strong>Implementatie Stappen:</strong>
              <ol>
                <li>🎯 <strong>Start klein</strong> - Begin met één project</li>
                <li>📊 <strong>Data verzamelen</strong> - Historische project data</li>
                <li>🛠️ <strong>Tool selecteren</strong> - Kies de juiste AI tool</li>
                <li>👥 <strong>Team trainen</strong> - Leer de nieuwe workflow</li>
                <li>📈 <strong>Iterate en verbeter</strong> - Blijf optimaliseren</li>
              </ol>
            </div>
          </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>AI project planning tools selecteren</li>
            <li>Accurate time estimations maken</li>
            <li>Resources optimaal toewijzen</li>
            <li>Project risico's identificeren</li>
            <li>Voortgang effectief tracken</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Wat is het belangrijkste voordeel van AI in project planning?",
        options: ["Het vervangt project managers", "Data-driven beslissingen", "Het is altijd gratis", "Het werkt automatisch"],
        correct: 1
      }
    }
  },
  '4': {
    '1': {
      title: 'Project Planning & Setup',
      duration: '45 min',
      objectives: [
        'Begrijpen van project planning principes',
        'Kunnen opzetten van development environment',
        'Kennen van project structuur best practices'
      ],
      content: `
        <h3>📋 Project Planning: De Basis van Succesvolle Development</h3>
        <p>Een goed gepland project is de helft van het werk. Laten we leren hoe je een project effectief plant en opzet:</p>
        <div class="lesson-section">
          <h4>🎯 Project Planning Stappen</h4>
          <p>Een gestructureerde aanpak zorgt voor succes:</p>
          <div class="example-box">
            <strong>Stap 1: Requirements Analyse</strong>
            <ul>
              <li>Wat moet het project doen?</li>
              <li>Wie zijn de gebruikers?</li>
              <li>Welke functionaliteiten zijn nodig?</li>
              <li>Wat zijn de technische vereisten?</li>
            </ul>
          </div>
          <div class="example-box">
            <strong>Stap 2: Technische Planning</strong>
            <ul>
              <li>Tech stack kiezen</li>
              <li>Database schema ontwerpen</li>
              <li>API endpoints plannen</li>
              <li>UI/UX wireframes maken</li>
            </ul>
          </div>
          <div class="example-box">
            <strong>Stap 3: Timeline & Milestones</strong>
            <ul>
              <li>Realistische tijdlijn opstellen</li>
              <li>Belangrijke mijlpalen definiëren</li>
              <li>Risico's identificeren</li>
              <li>Backup plannen maken</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🛠️ Development Environment Setup</h4>
          <p>Een goede development environment is cruciaal:</p>
          <div class="example-box">
            <strong>Essentiële Tools:</strong>
            <ul>
              <li><strong>Code Editor:</strong> Cursor AI</li>
              <li><strong>Version Control:</strong> Git & GitHub</li>
              <li><strong>Package Manager:</strong> npm of yarn</li>
              <li><strong>Browser DevTools:</strong> Chrome/Firefox</li>
              <li><strong>API Testing:</strong> Postman of Insomnia</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📁 Project Structuur Best Practices</h4>
          <p>Een goede project structuur maakt development veel eenvoudiger:</p>
          <div class="example-box">
            <strong>Voorbeeld Project Structuur:</strong>
            <pre><code>project-name/
├── src/
│   ├── components/     # React componenten
│   ├── pages/         # Pagina componenten
│   ├── styles/        # CSS bestanden
│   ├── utils/         # Helper functies
│   └── api/           # API calls
├── public/            # Statische bestanden
├── package.json       # Dependencies
├── README.md          # Project documentatie
└── .gitignore         # Git ignore regels</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔧 Environment Configuration</h4>
          <p>Configuratie bestanden voor verschillende omgevingen:</p>
          <div class="example-box">
            <strong>Environment Bestanden:</strong>
            <ul>
              <li><strong>.env.local:</strong> Lokale development instellingen</li>
              <li><strong>.env.production:</strong> Productie instellingen</li>
              <li><strong>.env.example:</strong> Voorbeeld configuratie</li>
            </ul>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Een project effectief plannen</li>
            <li>Development environment opzetten</li>
            <li>Goede project structuur maken</li>
            <li>Environment configuratie beheren</li>
            <li>Timeline en milestones plannen</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Wat is de eerste stap in project planning?",
        options: ["Technische planning", "Requirements analyse", "Timeline opstellen", "Development environment setup"],
        correct: 1
      }
    },
    '2': {
      title: 'Database Design & API Development',
      duration: '50 min',
      objectives: [
        'Begrijpen van database design principes',
        'Kunnen maken van RESTful APIs',
        'Kennen van data modeling best practices'
      ],
      content: `
        <h3>🗄️ Database Design & API Development</h3>
        <p>Een goede database en API zijn de ruggengraat van elke webapplicatie. Laten we leren hoe je deze effectief ontwerpt:</p>
        <div class="lesson-section">
          <h4>🗃️ Database Design Principes</h4>
          <p>Een goed ontworpen database is cruciaal voor schaalbare applicaties:</p>
          <div class="example-box">
            <strong>Database Design Stappen:</strong>
            <ol>
              <li><strong>Entity Identification:</strong> Identificeer alle entiteiten (gebruikers, producten, bestellingen)</li>
              <li><strong>Relationship Mapping:</strong> Bepaal hoe entiteiten met elkaar verbonden zijn</li>
              <li><strong>Normalization:</strong> Elimineer redundantie en verbeter data integriteit</li>
              <li><strong>Indexing:</strong> Optimaliseer query performance</li>
            </ol>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔗 Database Relationships</h4>
          <p>Begrijp de verschillende soorten relaties:</p>
          <div class="example-box">
            <strong>Relatie Types:</strong>
            <ul>
              <li><strong>One-to-One:</strong> Een gebruiker heeft één profiel</li>
              <li><strong>One-to-Many:</strong> Een gebruiker heeft meerdere bestellingen</li>
              <li><strong>Many-to-Many:</strong> Gebruikers kunnen meerdere cursussen volgen</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🌐 RESTful API Development</h4>
          <p>RESTful APIs zijn de standaard voor web services:</p>
          <div class="example-box">
            <strong>REST Principes:</strong>
            <ul>
              <li><strong>Stateless:</strong> Elke request bevat alle benodigde informatie</li>
              <li><strong>Resource-based:</strong> URLs vertegenwoordigen resources</li>
              <li><strong>HTTP Methods:</strong> GET, POST, PUT, DELETE voor CRUD operaties</li>
              <li><strong>Status Codes:</strong> Duidelijke HTTP status codes</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📊 API Endpoint Design</h4>
          <p>Goed ontworpen endpoints zijn intuïtief en consistent:</p>
          <div class="example-box">
            <strong>Voorbeeld API Endpoints:</strong>
            <pre><code>// Gebruikers
GET    /api/users          # Alle gebruikers ophalen
GET    /api/users/:id      # Specifieke gebruiker
POST   /api/users          # Nieuwe gebruiker maken
PUT    /api/users/:id      # Gebruiker updaten
DELETE /api/users/:id      # Gebruiker verwijderen

// Producten
GET    /api/products       # Alle producten
GET    /api/products/:id   # Specifiek product
POST   /api/products       # Nieuw product
PUT    /api/products/:id   # Product updaten
DELETE /api/products/:id   # Product verwijderen</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔒 API Security Best Practices</h4>
          <p>Beveiliging is cruciaal voor APIs:</p>
          <div class="example-box">
            <strong>Security Maatregelen:</strong>
            <ul>
              <li><strong>Authentication:</strong> JWT tokens of API keys</li>
              <li><strong>Authorization:</strong> Role-based access control</li>
              <li><strong>Input Validation:</strong> Valideer alle input data</li>
              <li><strong>Rate Limiting:</strong> Voorkom abuse</li>
              <li><strong>HTTPS:</strong> Versleutelde communicatie</li>
            </ul>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Database schema's ontwerpen</li>
            <li>RESTful APIs ontwikkelen</li>
            <li>Database relaties modelleren</li>
            <li>API endpoints plannen</li>
            <li>API beveiliging implementeren</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welk type database relatie heeft een gebruiker met meerdere bestellingen?",
        options: ["One-to-One", "One-to-Many", "Many-to-Many", "None-to-Many"],
        correct: 1
      }
    },
    '3': {
      title: 'Frontend Development & State Management',
      duration: '55 min',
      objectives: [
        'Begrijpen van moderne frontend development',
        'Kennen van state management patterns',
        'Kunnen implementeren van responsive UI'
      ],
      content: `
        <h3>🎨 Frontend Development & State Management</h3>
        <p>Moderne frontend development gaat verder dan alleen HTML en CSS. Laten we leren over state management en moderne patterns:</p>
        <div class="lesson-section">
          <h4>⚡ Moderne Frontend Frameworks</h4>
          <p>Frameworks maken development veel efficiënter:</p>
          <div class="example-box">
            <strong>Populaire Frameworks:</strong>
            <ul>
              <li><strong>React:</strong> Component-based, Virtual DOM, grote ecosystem</li>
              <li><strong>Vue.js:</strong> Progressive framework, makkelijk te leren</li>
              <li><strong>Angular:</strong> Full-featured, enterprise-ready</li>
              <li><strong>Svelte:</strong> Compile-time framework, zeer performant</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🧠 State Management Patterns</h4>
          <p>State management is cruciaal voor complexe applicaties:</p>
          <div class="example-box">
            <strong>State Management Opties:</strong>
            <ul>
              <li><strong>Local State:</strong> useState in React componenten</li>
              <li><strong>Context API:</strong> State delen tussen componenten</li>
              <li><strong>Redux:</strong> Predictable state container</li>
              <li><strong>Zustand:</strong> Lightweight state management</li>
              <li><strong>Server State:</strong> React Query, SWR</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔄 Component Lifecycle</h4>
          <p>Begrijp hoe componenten werken:</p>
          <div class="example-box">
            <strong>React Component Lifecycle:</strong>
            <pre><code>// Function Component met Hooks
function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Component mount
    fetchUser(userId)
      .then(data => {
        setUser(data)
        setLoading(false)
      })
    
    // Cleanup bij unmount
    return () => {
      // Cleanup code
    }
  }, [userId]) // Dependency array

  if (loading) return &lt;div&gt;Loading...&lt;/div&gt;
  
  return (
    &lt;div&gt;
      &lt;h2&gt;{user.name}&lt;/h2&gt;
      &lt;p&gt;{user.email}&lt;/p&gt;
    &lt;/div&gt;
  )
}</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📱 Responsive Design Patterns</h4>
          <p>Moderne responsive design gaat verder dan alleen CSS:</p>
          <div class="example-box">
            <strong>Responsive Patterns:</strong>
            <ul>
              <li><strong>Mobile-First:</strong> Begin met mobile design</li>
              <li><strong>Flexible Grids:</strong> CSS Grid en Flexbox</li>
              <li><strong>Breakpoint Strategy:</strong> Consistente breakpoints</li>
              <li><strong>Touch-Friendly:</strong> Grote touch targets</li>
              <li><strong>Performance:</strong> Lazy loading en optimization</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🎯 Performance Optimization</h4>
          <p>Performance is cruciaal voor gebruikerservaring:</p>
          <div class="example-box">
            <strong>Performance Tips:</strong>
            <ul>
              <li><strong>Code Splitting:</strong> Lazy load componenten</li>
              <li><strong>Memoization:</strong> React.memo, useMemo, useCallback</li>
              <li><strong>Bundle Optimization:</strong> Tree shaking, minification</li>
              <li><strong>Image Optimization:</strong> WebP format, lazy loading</li>
              <li><strong>Caching:</strong> Browser caching, CDN</li>
            </ul>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Moderne frontend frameworks gebruiken</li>
            <li>State management implementeren</li>
            <li>Component lifecycle beheren</li>
            <li>Responsive designs maken</li>
            <li>Performance optimaliseren</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welke hook gebruik je voor side effects in React?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correct: 1
      }
    },
    '4': {
      title: 'Testing & Quality Assurance',
      duration: '40 min',
      objectives: [
        'Begrijpen van testing strategieën',
        'Kennen van verschillende test types',
        'Kunnen implementeren van automated testing'
      ],
      content: `
        <h3>🧪 Testing & Quality Assurance</h3>
        <p>Testing is cruciaal voor het bouwen van betrouwbare software. Laten we leren over verschillende testing strategieën:</p>
        <div class="lesson-section">
          <h4>🎯 Testing Pyramid</h4>
          <p>De testing pyramid helpt je de juiste balans te vinden:</p>
          <div class="example-box">
            <strong>Testing Pyramid (van onder naar boven):</strong>
            <ul>
              <li><strong>Unit Tests (70%):</strong> Test individuele functies/componenten</li>
              <li><strong>Integration Tests (20%):</strong> Test hoe onderdelen samenwerken</li>
              <li><strong>E2E Tests (10%):</strong> Test complete user journeys</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔧 Unit Testing</h4>
          <p>Unit tests zijn de basis van testing:</p>
          <div class="example-box">
            <strong>Unit Test Voorbeeld (Jest + React Testing Library):</strong>
            <pre><code>import { render, screen } from '@testing-library/react'
import { Button } from './Button'

test('button shows correct text', () => {
  render(&lt;Button&gt;Click me&lt;/Button&gt;)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})

test('button calls onClick when clicked', () => {
  const handleClick = jest.fn()
  render(&lt;Button onClick={handleClick}&gt;Click me&lt;/Button&gt;)
  
  screen.getByText('Click me').click()
  expect(handleClick).toHaveBeenCalledTimes(1)
})</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔗 Integration Testing</h4>
          <p>Integration tests controleren hoe onderdelen samenwerken:</p>
          <div class="example-box">
            <strong>Integration Test Voorbeelden:</strong>
            <ul>
              <li><strong>API Integration:</strong> Test API endpoints met database</li>
              <li><strong>Component Integration:</strong> Test hoe componenten samenwerken</li>
              <li><strong>Third-party Services:</strong> Test externe service integraties</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🌐 End-to-End Testing</h4>
          <p>E2E tests simuleren echte gebruikersinteracties:</p>
          <div class="example-box">
            <strong>E2E Test Voorbeeld (Cypress):</strong>
            <pre><code>describe('User Login', () => {
  it('should login successfully', () => {
    cy.visit('/login')
    cy.get('[data-testid=email]').type('user@example.com')
    cy.get('[data-testid=password]').type('password123')
    cy.get('[data-testid=login-button]').click()
    
    cy.url().should('include', '/dashboard')
    cy.get('[data-testid=welcome-message]')
      .should('contain', 'Welcome back')
  })
})</code></pre>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔍 Test-Driven Development (TDD)</h4>
          <p>TDD is een development methode die testing centraal stelt:</p>
          <div class="example-box">
            <strong>TDD Cycle (Red-Green-Refactor):</strong>
            <ol>
              <li><strong>Red:</strong> Schrijf een falende test</li>
              <li><strong>Green:</strong> Schrijf minimale code om test te laten slagen</li>
              <li><strong>Refactor:</strong> Verbeter de code zonder tests te breken</li>
            </ol>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📊 Code Coverage</h4>
          <p>Code coverage meet hoeveel van je code getest wordt:</p>
          <div class="example-box">
            <strong>Coverage Metrics:</strong>
            <ul>
              <li><strong>Line Coverage:</strong> Percentage code regels uitgevoerd</li>
              <li><strong>Branch Coverage:</strong> Percentage code paden uitgevoerd</li>
              <li><strong>Function Coverage:</strong> Percentage functies aangeroepen</li>
              <li><strong>Statement Coverage:</strong> Percentage statements uitgevoerd</li>
            </ul>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Verschillende test types implementeren</li>
            <li>Unit tests schrijven</li>
            <li>Integration tests opzetten</li>
            <li>E2E tests uitvoeren</li>
            <li>Code coverage meten</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welk percentage van je tests zouden unit tests moeten zijn volgens de testing pyramid?",
        options: ["30%", "50%", "70%", "90%"],
        correct: 2
      }
    },
    '5': {
      title: 'Deployment & DevOps',
      duration: '45 min',
      objectives: [
        'Begrijpen van deployment strategieën',
        'Kennen van CI/CD pipelines',
        'Kunnen deployen naar verschillende platforms'
      ],
      content: `
        <h3>🚀 Deployment & DevOps</h3>
        <p>Deployment is het laatste maar cruciale onderdeel van development. Laten we leren hoe je applicaties professioneel deployt:</p>
        <div class="lesson-section">
          <h4>🌐 Deployment Platforms</h4>
          <p>Er zijn verschillende platforms voor deployment:</p>
          <div class="example-box">
            <strong>Populaire Platforms:</strong>
            <ul>
              <li><strong>Vercel:</strong> Perfect voor Next.js en React apps</li>
              <li><strong>Netlify:</strong> Geweldig voor statische sites en JAMstack</li>
              <li><strong>Heroku:</strong> Full-stack applicaties met database</li>
              <li><strong>AWS:</strong> Enterprise-grade cloud services</li>
              <li><strong>DigitalOcean:</strong> VPS hosting voor volledige controle</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔄 CI/CD Pipelines</h4>
          <p>Continuous Integration/Continuous Deployment automatiseert je workflow:</p>
          <div class="example-box">
            <strong>CI/CD Stappen:</strong>
            <ol>
              <li><strong>Code Commit:</strong> Developer pusht code naar repository</li>
              <li><strong>Automated Testing:</strong> Tests worden automatisch uitgevoerd</li>
              <li><strong>Build Process:</strong> Applicatie wordt gebouwd</li>
              <li><strong>Quality Checks:</strong> Code quality en security scans</li>
              <li><strong>Deployment:</strong> Automatische deployment naar staging/production</li>
            </ol>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📦 Build Process</h4>
          <p>Een goede build process is essentieel:</p>
          <div class="example-box">
            <strong>Build Stappen:</strong>
            <ul>
              <li><strong>Dependency Installation:</strong> npm install of yarn install</li>
              <li><strong>Code Compilation:</strong> TypeScript naar JavaScript</li>
              <li><strong>Bundling:</strong> Webpack of Vite bundling</li>
              <li><strong>Optimization:</strong> Minification, tree shaking</li>
              <li><strong>Asset Processing:</strong> Images, fonts, CSS</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔒 Environment Configuration</h4>
          <p>Verschillende omgevingen hebben verschillende configuraties:</p>
          <div class="example-box">
            <strong>Environment Types:</strong>
            <ul>
              <li><strong>Development:</strong> Lokale development met debug info</li>
              <li><strong>Staging:</strong> Test omgeving die productie simuleert</li>
              <li><strong>Production:</strong> Live omgeving voor echte gebruikers</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📊 Monitoring & Analytics</h4>
          <p>Monitoring is cruciaal voor productie applicaties:</p>
          <div class="example-box">
            <strong>Monitoring Tools:</strong>
            <ul>
              <li><strong>Error Tracking:</strong> Sentry, LogRocket</li>
              <li><strong>Performance Monitoring:</strong> New Relic, DataDog</li>
              <li><strong>User Analytics:</strong> Google Analytics, Mixpanel</li>
              <li><strong>Server Monitoring:</strong> Uptime Robot, Pingdom</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🛡️ Security Best Practices</h4>
          <p>Security is cruciaal voor productie deployments:</p>
          <div class="example-box">
            <strong>Security Checklist:</strong>
            <ul>
              <li><strong>HTTPS:</strong> SSL/TLS certificaten</li>
              <li><strong>Environment Variables:</strong> Geen secrets in code</li>
              <li><strong>Dependency Scanning:</strong> Check voor vulnerabilities</li>
              <li><strong>Access Control:</strong> Proper authentication/authorization</li>
              <li><strong>Regular Updates:</strong> Keep dependencies updated</li>
            </ul>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Applicaties deployen naar verschillende platforms</li>
            <li>CI/CD pipelines opzetten</li>
            <li>Build process configureren</li>
            <li>Environment configuratie beheren</li>
            <li>Monitoring en security implementeren</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welk platform is het beste voor Next.js applicaties?",
        options: ["Netlify", "Vercel", "Heroku", "AWS"],
        correct: 1
      }
    }
  },
  '5': {
    '1': {
      title: 'Wat is Cursor AI?',
      duration: '45 min',
      objectives: [
        'Begrijpen wat Cursor AI is en waarom het revolutionair is',
        'Kennen van de geschiedenis en ontwikkeling van AI code editors',
        'Inzicht in waarom Cursor AI de beste keuze is voor development'
      ],
      content: `
        <h3>🤖 Wat is Cursor AI? - De Revolutie in Development</h3>
        <p>Cursor AI is niet zomaar een code editor - het is een complete paradigmashift in hoe we software ontwikkelen. Laten we ontdekken wat het is en waarom het de toekomst van development is.</p>
        <div class="lesson-section">
          <h4>🎯 Wat is Cursor AI?</h4>
          <p>Cursor AI is een AI-powered code editor die de kracht van kunstmatige intelligentie combineert met de functionaliteit van een professionele development environment:</p>
          <div class="example-box">
            <strong>Cursor AI in een notendop:</strong>
            <ul>
              <li><strong>AI-Powered Code Editor:</strong> Een code editor met ingebouwde AI assistentie</li>
              <li><strong>Intelligent Code Completion:</strong> AI die begrijpt wat je wilt schrijven</li>
              <li><strong>Natural Language Programming:</strong> Code schrijven door te beschrijven wat je wilt</li>
              <li><strong>Advanced Code Analysis:</strong> AI die je code analyseert en verbetert</li>
              <li><strong>Built on VS Code:</strong> Alle VS Code functionaliteiten + AI superpowers</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🚀 Waarom is Cursor AI Revolutionair?</h4>
          <p>Cursor AI verandert de manier waarop we code schrijven:</p>
          <div class="example-box">
            <strong>De Paradigmashift:</strong>
            <ul>
              <li><strong>Van Syntax naar Intent:</strong> Je beschrijft wat je wilt, niet hoe je het wilt</li>
              <li><strong>10x Sneller Development:</strong> AI genereert code terwijl jij nadenkt</li>
              <li><strong>Learning Accelerator:</strong> Je leert door te zien hoe AI het doet</li>
              <li><strong>Error Prevention:</strong> AI voorkomt veelvoorkomende fouten</li>
              <li><strong>Code Quality:</strong> AI schrijft consistente, leesbare code</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>📚 De Geschiedenis van AI Code Editors</h4>
          <p>Cursor AI is niet de eerste AI code editor, maar wel de beste:</p>
          <div class="example-box">
            <strong>Evolutie van AI Development:</strong>
            <ul>
              <li><strong>2018:</strong> GitHub Copilot (eerste AI code completion)</li>
              <li><strong>2021:</strong> Tabnine, Kite (basis AI assistentie)</li>
              <li><strong>2022:</strong> Cursor AI (complete paradigmashift)</li>
              <li><strong>2023:</strong> Cursor AI wordt de standaard</li>
              <li><strong>2024:</strong> Cursor AI domineert de markt</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🎯 Waarom Cursor AI voor deze Cursus?</h4>
          <p>We hebben bewust gekozen voor Cursor AI om deze redenen:</p>
          <div class="example-box">
            <strong>Onze Redenen:</strong>
            <ul>
              <li><strong>Beste AI Model:</strong> Gebruikt Claude 3.5 Sonnet (meest geavanceerd)</li>
              <li><strong>Complete Workflow:</strong> Van planning tot deployment</li>
              <li><strong>Learning Focus:</strong> Je leert door te doen, niet door te kopiëren</li>
              <li><strong>Real-world Skills:</strong> Wat je hier leert, gebruik je in je carrière</li>
              <li><strong>Toekomst-proof:</strong> Dit is waar development naartoe gaat</li>
            </ul>
          </div>
        </div>
        <div class="lesson-section">
          <h4>🔄 Natural Language Programming</h4>
          <p>Dit is het kernconcept van Cursor AI:</p>
          <div class="example-box">
            <strong>Voorbeeld van Natural Language Programming:</strong>
            <p><strong>Oude manier:</strong> "Ik moet een functie schrijven die een array filtert op even getallen"</p>
            <p><strong>Nieuwe manier:</strong> "Maak een functie die alle even getallen uit een array filtert"</p>
            <p><strong>Cursor AI begrijpt:</strong> Wat je wilt bereiken, niet alleen de syntax</p>
          </div>
        </div>
        <div class="key-takeaway">
          <h4>🎯 Belangrijkste Takeaway</h4>
          <p>Cursor AI is niet een tool die je werk overneemt - het is een partner die je werk versnelt en verbetert. Je blijft de developer, maar nu met superpowers.</p>
        </div>
      `,
      quiz: {
        question: "Wat is het belangrijkste voordeel van Cursor AI voor beginners?",
        options: ["Het is gratis", "Je hoeft niets te leren", "Je leert sneller en beter", "Het vervangt alle andere tools"],
        correct: 2
      }
    },
    '2': {
      title: 'Cursor AI Installeren & Configureren',
      duration: '40 min',
      objectives: [
        'Cursor AI downloaden en installeren',
        'Account aanmaken en configureren',
        'Interface leren kennen',
        'Eerste project opzetten'
      ],
      content: `
        <h3>🛠️ Cursor AI Installeren & Configureren - Stap voor Stap</h3>
        <p>Laten we Cursor AI installeren en configureren zodat je direct aan de slag kunt!</p>
        
        <div class="lesson-section">
          <h4>📥 Stap 1: Cursor AI Downloaden</h4>
          <p>Ga naar de officiële website en download Cursor AI:</p>
          <div class="example-box">
            <strong>Download Stappen:</strong>
            <ol>
              <li>Ga naar <a href="https://cursor.sh" target="_blank">cursor.sh</a></li>
              <li>Klik op "Download for Mac" (of Windows/Linux)</li>
              <li>Wacht tot de download klaar is</li>
              <li>Open het gedownloade bestand</li>
            </ol>
          </div>
        </div>

        <div class="lesson-section">
          <h4>⚙️ Stap 2: Cursor AI Installeren</h4>
          <p>Volg deze stappen voor de installatie:</p>
          <div class="example-box">
            <strong>Installatie Stappen:</strong>
            <ol>
              <li>Sleep Cursor AI naar je Applications map</li>
              <li>Open Cursor AI voor de eerste keer</li>
              <li>Accepteer de licentievoorwaarden</li>
              <li>Cursor AI start nu op</li>
            </ol>
          </div>
        </div>

        <div class="lesson-section">
          <h4>👤 Stap 3: Account Aanmaken</h4>
          <p>Je hebt een gratis account nodig om Cursor AI te gebruiken:</p>
          <div class="example-box">
            <strong>Account Setup:</strong>
            <ol>
              <li>Klik op "Sign Up" in Cursor AI</li>
              <li>Kies "Continue with Google" of "Continue with GitHub"</li>
              <li>Vul je gegevens in</li>
              <li>Bevestig je email adres</li>
              <li>Je bent nu ingelogd!</li>
            </ol>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎨 Stap 4: Interface Kennen Leren</h4>
          <p>Cursor AI lijkt op VS Code, maar heeft extra AI features:</p>
          <div class="example-box">
            <strong>Belangrijke Interface Elementen:</strong>
            <ul>
              <li><strong>File Explorer:</strong> Links, toont je project bestanden</li>
              <li><strong>Editor:</strong> Midden, waar je code schrijft</li>
              <li><strong>AI Chat:</strong> Rechts, voor AI assistentie</li>
              <li><strong>Terminal:</strong> Onder, voor commando's</li>
              <li><strong>Extensions:</strong> Extra functionaliteiten</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>⚙️ Stap 5: Instellingen Configureren</h4>
          <p>Pas Cursor AI aan aan jouw voorkeuren:</p>
          <div class="example-box">
            <strong>Belangrijke Instellingen:</strong>
            <ol>
              <li>Ga naar Cursor → Preferences (⌘,)</li>
              <li><strong>Theme:</strong> Kies een donker thema (aanbevolen)</li>
              <li><strong>Font Size:</strong> Zet op 14-16 voor leesbaarheid</li>
              <li><strong>Auto Save:</strong> Zet aan voor automatisch opslaan</li>
              <li><strong>Format On Save:</strong> Zet aan voor nette code</li>
            </ol>
          </div>
        </div>

        <div class="lesson-section">
          <h4>📁 Stap 6: Eerste Project Opzetten</h4>
          <p>Laten we een test project maken:</p>
          <div class="example-box">
            <strong>Test Project Setup:</strong>
            <ol>
              <li>Klik op "Open Folder"</li>
              <li>Maak een nieuwe map: "test-project"</li>
              <li>Selecteer deze map</li>
              <li>Je ziet nu een lege workspace</li>
            </ol>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🤖 Stap 7: AI Chat Testen</h4>
          <p>Test de AI functionaliteit:</p>
          <div class="example-box">
            <strong>AI Test:</strong>
            <ol>
              <li>Open de AI chat (⌘+K)</li>
              <li>Type: "Maak een eenvoudige HTML pagina"</li>
              <li>Druk op Enter</li>
              <li>AI genereert de code voor je</li>
              <li>Klik op "Accept" om de code te accepteren</li>
            </ol>
          </div>
        </div>

        <div class="key-takeaway">
          <h4>🎯 Je bent Klaar!</h4>
          <p>Je hebt nu Cursor AI geïnstalleerd en geconfigureerd. Je kunt beginnen met het leren van effectieve prompts in de volgende les!</p>
        </div>
      `,
      quiz: {
        question: "Welk AI model gebruikt Cursor AI?",
        options: ["GPT-4", "Claude 3.5 Sonnet", "Gemini", "Bard"],
        correct: 1
      }
    },
    '3': {
      title: 'Effectieve Prompts Schrijven',
      duration: '50 min',
      objectives: [
        'Begrijpen van de kunst van prompt engineering',
        'Leren van effectieve prompt structuren',
        'Kennen van best practices en anti-patterns',
        'Praktische oefeningen met prompts'
      ],
      content: `
        <h3>💬 De Kunst van Effectieve Prompts - Je Nieuwe Superpower</h3>
        <p>Het schrijven van goede prompts is de sleutel tot succes met Cursor AI. Dit is waar de magie gebeurt!</p>
        
        <div class="lesson-section">
          <h4>🎯 Wat is een Goede Prompt?</h4>
          <p>Een goede prompt is duidelijk, specifiek en geeft context:</p>
          <div class="example-box">
            <strong>Goede Prompt vs. Slechte Prompt:</strong>
            <p><strong>❌ Slecht:</strong> "Maak een website"</p>
            <p><strong>✅ Goed:</strong> "Maak een moderne portfolio website met een hero section, over mij pagina, projecten sectie en contact formulier. Gebruik HTML5, CSS3 en vanilla JavaScript. Het design moet responsive zijn en een professionele uitstraling hebben."</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>📋 Prompt Structuur Framework</h4>
          <p>Gebruik dit framework voor consistente, effectieve prompts:</p>
          <div class="example-box">
            <strong>Het 5-Stappen Framework:</strong>
            <ol>
              <li><strong>Context:</strong> Wat is de situatie?</li>
              <li><strong>Doel:</strong> Wat wil je bereiken?</li>
              <li><strong>Specificaties:</strong> Wat zijn de vereisten?</li>
              <li><strong>Technologie:</strong> Welke tools gebruik je?</li>
              <li><strong>Verwachting:</strong> Wat verwacht je als resultaat?</li>
            </ol>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔍 Context is Koning</h4>
          <p>AI heeft context nodig om goede resultaten te geven:</p>
          <div class="example-box">
            <strong>Context Voorbeelden:</strong>
            <ul>
              <li><strong>Project Context:</strong> "Dit is een portfolio website voor een fotograaf"</li>
              <li><strong>Technische Context:</strong> "We gebruiken React 18 met TypeScript"</li>
              <li><strong>User Context:</strong> "De gebruiker is een beginner developer"</li>
              <li><strong>Business Context:</strong> "Dit is voor een e-commerce startup"</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎨 Specificiteit is Cruciaal</h4>
          <p>Hoe specifieker, hoe beter het resultaat:</p>
          <div class="example-box">
            <strong>Specificiteit Voorbeelden:</strong>
            <p><strong>❌ Vage Specificatie:</strong> "Maak een mooie button"</p>
            <p><strong>✅ Specifieke Specificatie:</strong> "Maak een call-to-action button met een blauwe achtergrond (#3B82F6), witte tekst, 16px padding, 8px border radius, en een hover effect dat de achtergrond donkerder maakt (#2563EB)"</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔄 Iteratieve Prompting</h4>
          <p>De beste resultaten krijg je door iteratief te werken:</p>
          <div class="example-box">
            <strong>Iteratief Proces:</strong>
            <ol>
              <li><strong>Prompt 1:</strong> "Maak een basis HTML structuur"</li>
              <li><strong>Prompt 2:</strong> "Voeg CSS styling toe voor een modern design"</li>
              <li><strong>Prompt 3:</strong> "Maak het responsive voor mobiele apparaten"</li>
              <li><strong>Prompt 4:</strong> "Voeg JavaScript interactiviteit toe"</li>
            </ol>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🛠️ Prompt Technieken</h4>
          <p>Verschillende technieken voor verschillende doelen:</p>
          <div class="example-box">
            <strong>Techniek 1: Chain of Thought</strong>
            <p>"Denk stap voor stap na over hoe je een login systeem zou bouwen. Begin met de database structuur, dan de backend API, dan de frontend interface."</p>
          </div>
          <div class="example-box">
            <strong>Techniek 2: Role Playing</strong>
            <p>"Handel als een senior React developer en help me deze component te optimaliseren voor performance."</p>
          </div>
          <div class="example-box">
            <strong>Techniek 3: Example-Driven</strong>
            <p>"Maak een functie zoals deze, maar dan voor het berekenen van de omtrek van een cirkel: [voorbeeld code]"</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>✅ Best Practices</h4>
          <p>Volg deze best practices voor consistente resultaten:</p>
          <div class="example-box">
            <strong>Best Practices:</strong>
            <ul>
              <li><strong>Wees Specifiek:</strong> Geef concrete details en vereisten</li>
              <li><strong>Gebruik Context:</strong> Leg uit wat je probeert te bereiken</li>
              <li><strong>Iteratief Werk:</strong> Bouw stap voor stap op</li>
              <li><strong>Test en Verbeter:</strong> Test resultaten en verfijn prompts</li>
              <li><strong>Documenteer:</strong> Bewaar succesvolle prompts</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>❌ Anti-Patterns</h4>
          <p>Vermijd deze veelvoorkomende fouten:</p>
          <div class="example-box">
            <strong>Anti-Patterns:</strong>
            <ul>
              <li><strong>Te Vage Prompts:</strong> "Maak iets moois"</li>
              <li><strong>Geen Context:</strong> AI weet niet wat je wilt</li>
              <li><strong>Te Complexe Prompts:</strong> Eén prompt voor alles</li>
              <li><strong>Geen Feedback:</strong> Niet iteratief werken</li>
              <li><strong>Copy-Paste:</strong> Prompts van anderen zonder aanpassing</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🧪 Praktische Oefeningen</h4>
          <p>Test je prompt skills met deze oefeningen:</p>
          <div class="example-box">
            <strong>Oefening 1: HTML/CSS</strong>
            <p>Prompt: "Maak een moderne navigation bar met logo, menu items en een mobile hamburger menu. Gebruik flexbox voor layout en voeg smooth transitions toe."</p>
          </div>
          <div class="example-box">
            <strong>Oefening 2: JavaScript</strong>
            <p>Prompt: "Maak een form validation functie die email, wachtwoord en bevestig wachtwoord controleert. Toon foutmeldingen en voeg real-time validatie toe."</p>
          </div>
          <div class="example-box">
            <strong>Oefening 3: React</strong>
            <p>Prompt: "Maak een React component voor een todo list met add, delete en toggle functionaliteit. Gebruik useState en localStorage voor persistentie."</p>
          </div>
        </div>

        <div class="key-takeaway">
          <h4>🎯 De Kunst van Prompting</h4>
          <p>Effectieve prompting is een vaardigheid die je ontwikkelt door te oefenen. Begin met het framework, wees specifiek, geef context en werk iteratief. Je zult snel merken dat je resultaten steeds beter worden!</p>
        </div>
      `,
      quiz: {
        question: "Wat is het belangrijkste element van een effectieve prompt?",
        options: ["Korte zinnen", "Veel technische termen", "Context en specificiteit", "Engelse taal"],
        correct: 2
      }
    }
  },
  '6': {
    '1': {
      title: 'Project Setup: Portfolio Website',
      duration: '60 min',
      objectives: [
        'Project planning en setup voor portfolio website',
        'Cursor AI gebruiken voor project structuur',
        'Basis HTML/CSS framework opzetten',
        'Local development environment configureren'
      ],
      content: `
        <h3>🎯 Project 1: Portfolio Website - Stap voor Stap</h3>
        <p>We gaan een professionele portfolio website bouwen die je kunt gebruiken om je werk te tonen aan potentiële klanten. Deze les is volledig praktisch - je gaat alles zelf doen!</p>
        
        <div class="lesson-section">
          <h4>📋 Stap 1: Project Planning</h4>
          <p>Voordat we beginnen, laten we het project goed plannen:</p>
          <div class="example-box">
            <strong>Project Requirements:</strong>
            <ul>
              <li>Homepage met hero section</li>
              <li>Over mij pagina</li>
              <li>Portfolio sectie met projecten</li>
              <li>Contact formulier</li>
              <li>Responsive design</li>
              <li>Modern en professioneel design</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🛠️ Stap 2: Project Map Maken</h4>
          <p>Open je terminal en voer deze commando's uit:</p>
          <div class="example-box">
            <strong>Terminal Commando's:</strong>
            <pre><code># Ga naar je desktop of gewenste locatie
cd Desktop

# Maak een nieuwe project map
mkdir portfolio-website
cd portfolio-website

# Controleer of je in de juiste map bent
pwd
ls</code></pre>
            <p><strong>Verwacht resultaat:</strong> Je ziet een lege map 'portfolio-website'</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🤖 Stap 3: Cursor AI Openen</h4>
          <p>Nu gaan we Cursor AI gebruiken om het project op te zetten:</p>
          <div class="example-box">
            <strong>Cursor AI Setup:</strong>
            <ol>
              <li>Open Cursor AI</li>
              <li>Klik op "Open Folder"</li>
              <li>Selecteer je 'portfolio-website' map</li>
              <li>Je ziet nu een lege workspace</li>
            </ol>
          </div>
        </div>

        <div class="lesson-section">
          <h4>💬 Stap 4: Eerste Cursor AI Prompt</h4>
          <p>Open de AI chat in Cursor AI en voer deze prompt uit:</p>
          <div class="example-box">
            <strong>Prompt 1 - Project Structuur:</strong>
            <pre><code>Maak een moderne portfolio website structuur met de volgende bestanden en mappen:

- index.html (homepage)
- about.html (over mij pagina)
- portfolio.html (projecten pagina)
- contact.html (contact pagina)
- css/
  - style.css (hoofdstyling)
  - responsive.css (responsive design)
- js/
  - main.js (hoofdfunctionaliteit)
  - contact.js (contact formulier)
- images/
  - hero-bg.jpg (achtergrond afbeelding)
  - profile.jpg (profiel foto)
  - project1.jpg, project2.jpg, etc. (project afbeeldingen)

Maak ook een README.md bestand met project informatie.</code></pre>
            <p><strong>Verwacht resultaat:</strong> Cursor AI maakt alle bestanden en mappen aan</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>📄 Stap 5: Basis HTML Template</h4>
          <p>Nu gaan we een moderne HTML template maken. Voer deze prompt uit:</p>
          <div class="example-box">
            <strong>Prompt 2 - HTML Template:</strong>
            <pre><code>Genereer een moderne HTML5 template voor index.html met:

- Semantic HTML5 structuur
- Meta tags voor SEO en social media
- Responsive viewport
- Link naar CSS bestanden
- Script tags voor JavaScript
- Basis navigatie structuur
- Hero section placeholder
- Footer placeholder

Gebruik moderne HTML5 elementen zoals header, nav, main, section, footer.</code></pre>
            <p><strong>Verwacht resultaat:</strong> Een complete HTML template met alle benodigde elementen</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎨 Stap 6: CSS Framework Opzetten</h4>
          <p>Nu gaan we de basis CSS styling maken:</p>
          <div class="example-box">
            <strong>Prompt 3 - CSS Framework:</strong>
            <pre><code>Maak een modern CSS framework in style.css met:

- CSS reset/normalize
- CSS custom properties (variables) voor kleuren en fonts
- Basis typography styling
- Grid en flexbox utilities
- Responsive breakpoints
- Moderne kleurenschema (donkere modus)
- Smooth transitions en animations
- Box shadows en gradients

Gebruik moderne CSS features en zorg voor een professionele uitstraling.</code></pre>
            <p><strong>Verwacht resultaat:</strong> Een complete CSS framework met moderne styling</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🌐 Stap 7: Local Development Server</h4>
          <p>Nu gaan we de website lokaal bekijken:</p>
          <div class="example-box">
            <strong>Live Server Setup:</strong>
            <ol>
              <li>Installeer Live Server extension in Cursor AI</li>
              <li>Rechtsklik op index.html</li>
              <li>Selecteer "Open with Live Server"</li>
              <li>Je browser opent automatisch op localhost:5500</li>
            </ol>
            <p><strong>Alternatief:</strong> Als Live Server niet werkt, open index.html direct in je browser</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔧 Stap 8: Eerste Test en Debugging</h4>
          <p>Test je website en los eventuele problemen op:</p>
          <div class="example-box">
            <strong>Debugging Checklist:</strong>
            <ul>
              <li>✅ Website laadt zonder errors</li>
              <li>✅ CSS styling wordt toegepast</li>
              <li>✅ Responsive design werkt</li>
              <li>✅ Alle links werken</li>
              <li>✅ Browser console toont geen errors</li>
            </ul>
            <p><strong>Veelvoorkomende problemen:</strong></p>
            <ul>
              <li><strong>CSS niet geladen:</strong> Controleer file paths</li>
              <li><strong>Afbeeldingen niet zichtbaar:</strong> Controleer image paths</li>
              <li><strong>Styling niet toegepast:</strong> Controleer CSS syntax</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>💾 Stap 9: Git Repository Opzetten</h4>
          <p>We gaan version control opzetten voor je project:</p>
          <div class="example-box">
            <strong>Git Setup:</strong>
            <pre><code># Initialiseer Git repository
git init

# Voeg alle bestanden toe
git add .

# Maak eerste commit
git commit -m "Initial portfolio website setup"

# Controleer status
git status</code></pre>
            <p><strong>Verwacht resultaat:</strong> Een Git repository met je eerste commit</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>📝 Stap 10: Project Documentatie</h4>
          <p>Voeg deze prompt uit om je README.md te verbeteren:</p>
          <div class="example-box">
            <strong>Prompt 4 - README:</strong>
            <pre><code>Maak een professionele README.md voor mijn portfolio website project met:

- Project beschrijving
- Features lijst
- Installatie instructies
- Gebruikte technologieën
- Screenshots (placeholder)
- Contact informatie
- License informatie

Gebruik moderne README formatting met badges en emoji's.</code></pre>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎯 Stap 11: Les Samenvatting</h4>
          <p>Je hebt nu succesvol:</p>
          <div class="example-box">
            <strong>Behaalde Doelen:</strong>
            <ul>
              <li>✅ Project map aangemaakt</li>
              <li>✅ Cursor AI workspace opgezet</li>
              <li>✅ Project structuur gegenereerd</li>
              <li>✅ HTML template gemaakt</li>
              <li>✅ CSS framework opgezet</li>
              <li>✅ Local development server gestart</li>
              <li>✅ Git repository geïnitialiseerd</li>
              <li>✅ Project gedocumenteerd</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🚨 Troubleshooting</h4>
          <p>Veelvoorkomende problemen en oplossingen:</p>
          <div class="example-box">
            <strong>Probleem: Cursor AI reageert niet</strong>
            <p><strong>Oplossing:</strong> Controleer je internetverbinding en probeer de prompt opnieuw</p>
            
            <strong>Probleem: Bestanden worden niet aangemaakt</strong>
            <p><strong>Oplossing:</strong> Controleer of je de juiste map hebt geselecteerd in Cursor AI</p>
            
            <strong>Probleem: Live Server werkt niet</strong>
            <p><strong>Oplossing:</strong> Open index.html direct in je browser of installeer de Live Server extension</p>
            
            <strong>Probleem: CSS styling wordt niet toegepast</strong>
            <p><strong>Oplossing:</strong> Controleer de file paths in je HTML en de CSS syntax</p>
          </div>
        </div>

        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Een project effectief plannen en opzetten</li>
            <li>Cursor AI gebruiken voor project structuur</li>
            <li>Moderne HTML template maken</li>
            <li>CSS framework opzetten</li>
            <li>Local development server starten</li>
            <li>Git repository opzetten</li>
            <li>Basis debugging uitvoeren</li>
            <li>Project documenteren</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welk commando gebruik je om een nieuwe project map te maken?",
        options: ["cd portfolio-website", "mkdir portfolio-website", "git init", "ls"],
        correct: 1
      }
    },
    '2': {
      title: 'Homepage Development',
      duration: '70 min',
      objectives: [
        'Hero section bouwen met Cursor AI',
        'Responsive navigation maken',
        'Moderne styling implementeren',
        'Local testing en debugging'
      ],
      content: `
        <h3>🏠 Homepage Development - Van Template naar Praktijk</h3>
        <p>Nu gaan we de homepage van je portfolio website bouwen met een krachtige hero section en moderne styling. We gaan stap voor stap door het proces!</p>
        
        <div class="lesson-section">
          <h4>🎯 Stap 1: Hero Section Planning</h4>
          <p>De hero section is het eerste wat bezoekers zien. Laten we deze perfect maken:</p>
          <div class="example-box">
            <strong>Hero Section Elementen:</strong>
            <ul>
              <li>Pakkende headline met je naam en titel</li>
              <li>Korte beschrijving van je expertise</li>
              <li>Call-to-action buttons (Portfolio bekijken, Contact)</li>
              <li>Achtergrond afbeelding of gradient</li>
              <li>Subtiele animaties voor impact</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>💬 Stap 2: Cursor AI Hero Section Prompt</h4>
          <p>Open Cursor AI en voer deze uitgebreide prompt uit:</p>
          <div class="example-box">
            <strong>Prompt 1 - Hero Section:</strong>
            <pre><code>Maak een moderne hero section voor mijn portfolio website met de volgende specificaties:

HTML Structuur:
- Header met navigatie
- Hero section met:
  - Grote, pakkende titel (mijn naam + "Web Developer")
  - Ondertitel die mijn expertise beschrijft
  - Twee call-to-action buttons:
    * "Bekijk Portfolio" (primary button)
    * "Neem Contact Op" (secondary button)
  - Achtergrond met moderne gradient
  - Smooth scroll naar secties

CSS Styling:
- Moderne gradient achtergrond (donkere modus)
- Responsive typography
- Hover effecten op buttons
- Smooth transitions
- Mobile-first responsive design
- Moderne box shadows en borders

JavaScript:
- Smooth scroll functionaliteit
- Button hover effecten
- Responsive navigation toggle

Gebruik moderne CSS Grid en Flexbox voor layout.</code></pre>
            <p><strong>Verwacht resultaat:</strong> Een complete hero section met HTML, CSS en JavaScript</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🧭 Stap 3: Navigation Bar Bouwen</h4>
          <p>Nu gaan we een professionele navigatie maken:</p>
          <div class="example-box">
            <strong>Prompt 2 - Navigation:</strong>
            <pre><code>Maak een moderne, responsive navigation bar voor mijn portfolio website met:

Features:
- Logo/brand naam (mijn naam)
- Menu items: Home, Over, Portfolio, Contact
- Mobile hamburger menu
- Smooth scroll naar secties
- Active state indicators
- Sticky navigation (blijft bovenaan)

Styling:
- Moderne glassmorphism effect
- Hover animaties
- Mobile-first responsive design
- Smooth transitions
- Professional color scheme

JavaScript:
- Mobile menu toggle
- Smooth scroll naar secties
- Active link highlighting
- Scroll-based navigation styling</code></pre>
            <p><strong>Verwacht resultaat:</strong> Een volledig functionele responsive navigatie</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>📱 Stap 4: Responsive Design Testen</h4>
          <p>Test je website op verschillende schermformaten:</p>
          <div class="example-box">
            <strong>Responsive Testing Checklist:</strong>
            <ol>
              <li><strong>Desktop (1920px+):</strong> Alles ziet er perfect uit</li>
              <li><strong>Laptop (1366px):</strong> Layout past goed</li>
              <li><strong>Tablet (768px):</strong> Navigation wordt hamburger menu</li>
              <li><strong>Mobile (375px):</strong> Alles is leesbaar en klikbaar</li>
            </ol>
            <p><strong>Browser DevTools Test:</strong></p>
            <ol>
              <li>Open DevTools (F12)</li>
              <li>Klik op het device toggle icoon</li>
              <li>Test verschillende schermformaten</li>
              <li>Controleer of alles responsive is</li>
            </ol>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎨 Stap 5: CSS Styling Verfijnen</h4>
          <p>Nu gaan we de styling perfectioneren met Cursor AI:</p>
          <div class="example-box">
            <strong>Prompt 3 - Advanced Styling:</strong>
            <pre><code>Verbeter de styling van mijn portfolio website met:

Advanced CSS Features:
- CSS custom properties voor consistent kleurenschema
- CSS Grid voor complexe layouts
- Flexbox voor component alignment
- Modern color palette met gradients
- Smooth animations en transitions
- Box shadows en border radius
- Typography hierarchy
- Spacing system

Responsive Breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

Performance:
- Optimized CSS
- Minimal reflows
- Efficient animations
- Fast loading times</code></pre>
            <p><strong>Verwacht resultaat:</strong> Professionele, geoptimaliseerde styling</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔧 Stap 6: Debugging en Problemen Oplossen</h4>
          <p>Los eventuele problemen op die je tegenkomt:</p>
          <div class="example-box">
            <strong>Veelvoorkomende Problemen:</strong>
            <ul>
              <li><strong>Navigation werkt niet:</strong> Controleer JavaScript console voor errors</li>
              <li><strong>Styling wordt niet toegepast:</strong> Controleer CSS file paths</li>
              <li><strong>Responsive design werkt niet:</strong> Controleer viewport meta tag</li>
              <li><strong>Buttons reageren niet:</strong> Controleer event listeners</li>
            </ul>
            <p><strong>Debugging Commando's:</strong></p>
            <pre><code># Controleer of alle bestanden bestaan
ls -la

# Controleer HTML syntax
# Open browser DevTools en kijk naar Console tab

# Test responsive design
# Gebruik browser DevTools device toggle</code></pre>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🌐 Stap 7: Local Development Server</h4>
          <p>Start je development server en test alles:</p>
          <div class="example-box">
            <strong>Live Server Setup:</strong>
            <ol>
              <li>Open Cursor AI</li>
              <li>Rechtsklik op index.html</li>
              <li>Selecteer "Open with Live Server"</li>
              <li>Je browser opent op localhost:5500</li>
              <li>Test alle functionaliteiten</li>
            </ol>
            <p><strong>Alternatief:</strong> Als Live Server niet werkt:</p>
            <ol>
              <li>Open index.html direct in je browser</li>
              <li>Of gebruik Python: python -m http.server 8000</li>
              <li>Of gebruik Node.js: npx serve .</li>
            </ol>
          </div>
        </div>

        <div class="lesson-section">
          <h4>✅ Stap 8: Testing Checklist</h4>
          <p>Voer deze tests uit om te controleren of alles werkt:</p>
          <div class="example-box">
            <strong>Functionality Tests:</strong>
            <ul>
              <li>✅ Website laadt zonder errors</li>
              <li>✅ Hero section ziet er professioneel uit</li>
              <li>✅ Navigation werkt op alle schermformaten</li>
              <li>✅ Buttons hebben hover effecten</li>
              <li>✅ Smooth scroll werkt</li>
              <li>✅ Mobile menu toggle werkt</li>
              <li>✅ Alle links werken</li>
              <li>✅ CSS styling wordt correct toegepast</li>
            </ul>
            <p><strong>Performance Tests:</strong></p>
            <ul>
              <li>✅ Website laadt snel</li>
              <li>✅ Geen console errors</li>
              <li>✅ Responsive op alle devices</li>
              <li>✅ Smooth animaties</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>💾 Stap 9: Git Commit</h4>
          <p>Commit je wijzigingen:</p>
          <div class="example-box">
            <strong>Git Commando's:</strong>
            <pre><code># Controleer status
git status

# Voeg alle wijzigingen toe
git add .

# Commit met beschrijvende message
git commit -m "Add homepage with hero section and responsive navigation"

# Controleer commit history
git log --oneline</code></pre>
            <p><strong>Verwacht resultaat:</strong> Je wijzigingen zijn opgeslagen in Git</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎯 Stap 10: Les Samenvatting</h4>
          <p>Je hebt nu succesvol:</p>
          <div class="example-box">
            <strong>Behaalde Doelen:</strong>
            <ul>
              <li>✅ Moderne hero section gebouwd</li>
              <li>✅ Responsive navigation geïmplementeerd</li>
              <li>✅ CSS styling geoptimaliseerd</li>
              <li>✅ Local development server opgezet</li>
              <li>✅ Responsive design getest</li>
              <li>✅ Debugging uitgevoerd</li>
              <li>✅ Git commits gemaakt</li>
              <li>✅ Professionele homepage afgerond</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🚨 Troubleshooting</h4>
          <p>Veelvoorkomende problemen en oplossingen:</p>
          <div class="example-box">
            <strong>Probleem: Hero section ziet er niet uit zoals verwacht</strong>
            <p><strong>Oplossing:</strong> Controleer CSS file paths en syntax, gebruik browser DevTools om styling te inspecteren</p>
            
            <strong>Probleem: Navigation werkt niet op mobile</strong>
            <p><strong>Oplossing:</strong> Controleer JavaScript voor hamburger menu functionaliteit, test in DevTools mobile view</p>
            
            <strong>Probleem: Buttons hebben geen hover effecten</strong>
            <p><strong>Oplossing:</strong> Controleer CSS hover states en transitions, test in verschillende browsers</p>
            
            <strong>Probleem: Website laadt langzaam</strong>
            <p><strong>Oplossing:</strong> Optimaliseer afbeeldingen, minify CSS/JS, gebruik browser caching</p>
          </div>
        </div>

        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Moderne hero sections bouwen met Cursor AI</li>
            <li>Responsive navigation implementeren</li>
            <li>Advanced CSS styling toepassen</li>
            <li>Local development server gebruiken</li>
            <li>Responsive design testen</li>
            <li>Debugging uitvoeren</li>
            <li>Git workflow beheren</li>
            <li>Professionele homepage maken</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welk CSS property gebruik je voor smooth transitions?",
        options: ["transition", "animation", "transform", "hover"],
        correct: 0
      }
    },
    '3': {
      title: 'Portfolio Sectie & Projecten',
      duration: '80 min',
      objectives: [
        'Portfolio grid maken met projecten',
        'Project cards met hover effecten',
        'Moderne layout met CSS Grid',
        'Filter functionaliteit implementeren'
      ],
      content: `
        <h3>📂 Portfolio Sectie & Projecten - Showcase je Werk</h3>
        <p>Nu gaan we een indrukwekkende portfolio sectie bouwen waar je projecten mooi worden gepresenteerd. Dit is cruciaal voor het aantrekken van klanten!</p>
        
        <div class="lesson-section">
          <h4>🎯 Stap 1: Portfolio Grid Planning</h4>
          <p>Een portfolio grid toont je projecten effectief en professioneel:</p>
          <div class="example-box">
            <strong>Portfolio Grid Features:</strong>
            <ul>
              <li>Responsive grid layout (3 kolommen op desktop)</li>
              <li>Project cards met afbeeldingen en details</li>
              <li>Hover effecten en animaties</li>
              <li>Project categorieën en filtering</li>
              <li>Modal popup voor project details</li>
              <li>Live demo en GitHub links</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>💬 Stap 2: Cursor AI Portfolio Grid Prompt</h4>
          <p>Open Cursor AI en voer deze uitgebreide prompt uit:</p>
          <div class="example-box">
            <strong>Prompt 1 - Portfolio Grid:</strong>
            <pre><code>Maak een moderne portfolio grid sectie voor mijn website met:

HTML Structuur:
- Portfolio sectie container
- Filter buttons (All, Web Development, Design, Mobile)
- Grid container met project cards
- Elke project card bevat:
  - Project thumbnail afbeelding
  - Project titel en beschrijving
  - Gebruikte technologieën (tags)
  - Hover overlay met details
  - Live demo en GitHub links

CSS Grid Layout:
- 3 kolommen op desktop (1024px+)
- 2 kolommen op tablet (768px-1023px)
- 1 kolom op mobile (320px-767px)
- Responsive gap spacing
- Smooth transitions

Hover Effecten:
- Scale transform op hover
- Overlay met project details
- Smooth color transitions
- Box shadow effects
- Image zoom effect

JavaScript Functionaliteit:
- Filter functionaliteit
- Smooth animations
- Modal popup voor project details
- Lazy loading voor afbeeldingen</code></pre>
            <p><strong>Verwacht resultaat:</strong> Een complete portfolio grid met alle functionaliteiten</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🃏 Stap 3: Project Cards Bouwen</h4>
          <p>Elke project card moet indrukwekkend zijn. Voer deze prompt uit:</p>
          <div class="example-box">
            <strong>Prompt 2 - Project Cards:</strong>
            <pre><code>Maak moderne project cards voor mijn portfolio met:

Card Design:
- Moderne card layout met rounded corners
- Project thumbnail met overlay effect
- Project titel en korte beschrijving
- Technology tags (HTML, CSS, JavaScript, React, etc.)
- Hover overlay met:
  - Uitgebreide project beschrijving
  - Live demo button
  - GitHub repository button
  - Close button

Styling Features:
- Glassmorphism effect
- Smooth hover transitions
- Modern color scheme
- Typography hierarchy
- Responsive design
- Box shadows en borders

Interactive Elements:
- Hover animations
- Click to expand details
- Smooth transitions
- Loading states</code></pre>
            <p><strong>Verwacht resultaat:</strong> Professionele project cards met hover effecten</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔍 Stap 4: Filter Functionaliteit</h4>
          <p>Implementeer filter functionaliteit zodat bezoekers projecten kunnen filteren:</p>
          <div class="example-box">
            <strong>Prompt 3 - Filter System:</strong>
            <pre><code>Implementeer een filter systeem voor mijn portfolio met:

Filter Features:
- Filter buttons: All, Web Development, Design, Mobile, Full-Stack
- Active state styling voor geselecteerde filter
- Smooth animations bij filteren
- "No results" state als geen projecten matchen

JavaScript Logic:
- Filter projecten op categorie
- Smooth show/hide animations
- Update active filter button
- Handle edge cases

CSS Animations:
- Fade in/out effecten
- Scale animations
- Smooth transitions
- Loading states

User Experience:
- Intuitive filter buttons
- Clear visual feedback
- Smooth interactions
- Responsive design</code></pre>
            <p><strong>Verwacht resultaat:</strong> Volledig functioneel filter systeem</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎨 Stap 5: Advanced CSS Effecten</h4>
          <p>Voeg geavanceerde CSS effecten toe voor een professionele uitstraling:</p>
          <div class="example-box">
            <strong>Prompt 4 - Advanced Effects:</strong>
            <pre><code>Voeg geavanceerde CSS effecten toe aan mijn portfolio:

Advanced Effects:
- Transform scale op hover (1.05x)
- Box shadow transitions
- Gradient overlays
- Image zoom effect
- Smooth color transitions
- Loading animations
- Stagger animations voor cards

CSS Features:
- CSS custom properties voor consistentie
- CSS Grid voor layout
- Flexbox voor alignment
- Modern color palette
- Typography scaling
- Spacing system

Performance:
- Optimized animations
- Hardware acceleration
- Minimal reflows
- Efficient transitions</code></pre>
            <p><strong>Verwacht resultaat:</strong> Professionele animaties en effecten</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>📱 Stap 6: Responsive Testing</h4>
          <p>Test de portfolio sectie op alle schermformaten:</p>
          <div class="example-box">
            <strong>Responsive Testing:</strong>
            <ol>
              <li><strong>Desktop (1920px+):</strong> 3 kolommen, alle effecten werken</li>
              <li><strong>Laptop (1366px):</strong> 3 kolommen, responsive</li>
              <li><strong>Tablet (768px):</strong> 2 kolommen, touch-friendly</li>
              <li><strong>Mobile (375px):</strong> 1 kolom, swipe-friendly</li>
            </ol>
            <p><strong>Browser DevTools Test:</strong></p>
            <ol>
              <li>Open DevTools (F12)</li>
              <li>Toggle device toolbar</li>
              <li>Test alle schermformaten</li>
              <li>Controleer filter functionaliteit</li>
              <li>Test hover effecten (touch devices)</li>
            </ol>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔧 Stap 7: Debugging en Optimalisatie</h4>
          <p>Los eventuele problemen op en optimaliseer performance:</p>
          <div class="example-box">
            <strong>Debugging Checklist:</strong>
            <ul>
              <li>✅ Filter buttons werken correct</li>
              <li>✅ Project cards laden zonder errors</li>
              <li>✅ Hover effecten werken op alle devices</li>
              <li>✅ Responsive layout werkt perfect</li>
              <li>✅ Animaties zijn smooth</li>
              <li>✅ Geen console errors</li>
            </ul>
            <p><strong>Performance Optimalisatie:</strong></p>
            <ul>
              <li>Compress afbeeldingen voor snelle loading</li>
              <li>Use lazy loading voor afbeeldingen</li>
              <li>Minify CSS en JavaScript</li>
              <li>Optimize animations voor 60fps</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🌐 Stap 8: Local Testing</h4>
          <p>Test alles lokaal met je development server:</p>
          <div class="example-box">
            <strong>Testing Commando's:</strong>
            <pre><code># Start development server
# Als je Live Server gebruikt, refresh je browser

# Test functionaliteiten:
1. Klik op verschillende filter buttons
2. Hover over project cards
3. Test responsive design
4. Controleer alle links
5. Test op verschillende browsers

# Performance test:
- Open DevTools > Network tab
- Reload pagina
- Controleer loading times
- Kijk naar console voor errors</code></pre>
          </div>
        </div>

        <div class="lesson-section">
          <h4>✅ Stap 9: Final Testing Checklist</h4>
          <p>Voer deze uitgebreide tests uit:</p>
          <div class="example-box">
            <strong>Functionality Tests:</strong>
            <ul>
              <li>✅ Portfolio grid laadt correct</li>
              <li>✅ Filter buttons werken</li>
              <li>✅ Project cards tonen juiste informatie</li>
              <li>✅ Hover effecten werken</li>
              <li>✅ Responsive design perfect</li>
              <li>✅ Alle links werken</li>
              <li>✅ Animaties zijn smooth</li>
              <li>✅ Geen JavaScript errors</li>
            </ul>
            <p><strong>Cross-browser Tests:</strong></p>
            <ul>
              <li>✅ Chrome/Chromium</li>
              <li>✅ Firefox</li>
              <li>✅ Safari</li>
              <li>✅ Edge</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>💾 Stap 10: Git Commit</h4>
          <p>Commit je portfolio sectie:</p>
          <div class="example-box">
            <strong>Git Commando's:</strong>
            <pre><code># Controleer status
git status

# Voeg alle wijzigingen toe
git add .

# Commit met beschrijvende message
git commit -m "Add portfolio section with grid layout and filter functionality"

# Controleer commit history
git log --oneline -5</code></pre>
            <p><strong>Verwacht resultaat:</strong> Portfolio sectie is opgeslagen in Git</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎯 Stap 11: Les Samenvatting</h4>
          <p>Je hebt nu succesvol:</p>
          <div class="example-box">
            <strong>Behaalde Doelen:</strong>
            <ul>
              <li>✅ Portfolio grid gebouwd met CSS Grid</li>
              <li>✅ Project cards met hover effecten</li>
              <li>✅ Filter functionaliteit geïmplementeerd</li>
              <li>✅ Advanced CSS effecten toegevoegd</li>
              <li>✅ Responsive design getest</li>
              <li>✅ Performance geoptimaliseerd</li>
              <li>✅ Cross-browser compatibility getest</li>
              <li>✅ Git commits gemaakt</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🚨 Troubleshooting</h4>
          <p>Veelvoorkomende problemen en oplossingen:</p>
          <div class="example-box">
            <strong>Probleem: Filter functionaliteit werkt niet</strong>
            <p><strong>Oplossing:</strong> Controleer JavaScript console voor errors, controleer data attributes op project cards</p>
            
            <strong>Probleem: Hover effecten werken niet op mobile</strong>
            <p><strong>Oplossing:</strong> Voeg touch event handlers toe of gebruik click events voor mobile</p>
            
            <strong>Probleem: Grid layout breekt op kleine schermen</strong>
            <p><strong>Oplossing:</strong> Controleer CSS Grid breakpoints en min-width properties</p>
            
            <strong>Probleem: Afbeeldingen laden langzaam</strong>
            <p><strong>Oplossing:</strong> Compress afbeeldingen, implementeer lazy loading, gebruik WebP format</p>
          </div>
        </div>

        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Moderne portfolio grids maken met CSS Grid</li>
            <li>Project cards met hover effecten bouwen</li>
            <li>Filter functionaliteit implementeren</li>
            <li>Advanced CSS effecten toepassen</li>
            <li>Responsive portfolio layouts maken</li>
            <li>Performance optimaliseren</li>
            <li>Cross-browser compatibility testen</li>
            <li>Professionele portfolio secties bouwen</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welk CSS property gebruik je voor grid layout?",
        options: ["display: grid", "display: flex", "display: block", "display: inline"],
        correct: 0
      }
    },
    '4': {
      title: 'Contact Formulier & Footer',
      duration: '65 min',
      objectives: [
        'Functioneel contact formulier maken',
        'Form validatie implementeren',
        'Professionele footer bouwen',
        'Form submission configureren'
      ],
      content: `
        <h3>📧 Contact Formulier & Footer - Maak Contact Mogelijk</h3>
          <p>Nu gaan we een functioneel contact formulier en professionele footer toevoegen aan je portfolio website. Dit is cruciaal voor het ontvangen van klanten!</p>
          
          <div class="lesson-section">
            <h4>📝 Stap 1: Contact Formulier Planning</h4>
            <p>Een goed contact formulier is cruciaal voor het ontvangen van klanten:</p>
            <div class="example-box">
              <strong>Contact Formulier Elementen:</strong>
              <ul>
                <li>Naam en email velden</li>
                <li>Onderwerp dropdown</li>
                <li>Bericht textarea</li>
                <li>Submit button</li>
                <li>Success/error messages</li>
                <li>Form validatie</li>
              </ul>
            </div>
          </div>

          <div class="lesson-section">
            <h4>💬 Stap 2: Cursor AI Contact Formulier Prompt</h4>
            <p>Open Cursor AI en voer deze uitgebreide prompt uit:</p>
            <div class="example-box">
              <strong>Prompt 1 - Contact Formulier:</strong>
              <pre><code>Maak een modern, functioneel contact formulier voor mijn portfolio website met:

HTML Structuur:
- Form container met moderne styling
- Input velden:
  - Naam (required)
  - Email (required, email validation)
  - Onderwerp (dropdown: Project Request, Collaboration, Question, Other)
  - Bericht (textarea, required)
- Submit button met loading state
- Success/error message containers

CSS Styling:
- Modern form design met glassmorphism
- Input focus states
- Error state styling
- Loading animation voor submit button
- Responsive design
- Smooth transitions

JavaScript Functionaliteit:
- Real-time form validation
- Email format validation
- Form submission handling
- Success/error message display
- Loading states
- Form reset na succesvolle submission

Features:
- Client-side validation
- Professional error messages
- Smooth animations
- Mobile-friendly design
- Accessibility features (ARIA labels)</code></pre>
              <p><strong>Verwacht resultaat:</strong> Een complete contact formulier met validatie</p>
            </div>
          </div>

          <div class="lesson-section">
            <h4>✅ Stap 3: Form Validatie Implementeren</h4>
            <p>Implementeer client-side validatie voor betere gebruikerservaring:</p>
            <div class="example-box">
              <strong>Prompt 2 - Form Validatie:</strong>
              <pre><code>Implementeer uitgebreide form validatie voor mijn contact formulier:

Validatie Regels:
- Naam: minimaal 2 karakters, alleen letters en spaties
- Email: geldig email formaat
- Onderwerp: verplicht veld
- Bericht: minimaal 10 karakters, maximaal 1000

Real-time Validatie:
- Valideer tijdens typen
- Toon error messages onder elk veld
- Update submit button state
- Visuele feedback voor valid/invalid velden

Error Handling:
- Duidelijke error messages
- Success feedback
- Form reset na succesvolle submission
- Loading states tijdens submission

Accessibility:
- ARIA labels voor screen readers
- Keyboard navigation
- Focus management
- Error announcements</code></pre>
              <p><strong>Verwacht resultaat:</strong> Professionele form validatie</p>
            </div>
          </div>

          <div class="lesson-section">
            <h4>📤 Stap 4: Form Submission Configureren</h4>
            <p>Configureer het formulier zodat het daadwerkelijk emails verstuurt:</p>
            <div class="example-box">
              <strong>Prompt 3 - Form Submission:</strong>
              <pre><code>Configureer form submission voor mijn contact formulier met:

Submission Opties:
1. EmailJS (gratis, directe emails)
2. Formspree (gratis tier beschikbaar)
3. Netlify Forms (als je Netlify gebruikt)
4. Custom backend API

Implementatie:
- AJAX form submission
- Loading states
- Success/error handling
- Form data validation
- Spam protection

EmailJS Setup:
- Account aanmaken op emailjs.com
- Service ID en template configureren
- JavaScript integration
- Email template maken

Features:
- No page reload bij submission
- Professional email templates
- Spam filtering
- Email notifications</code></pre>
              <p><strong>Verwacht resultaat:</strong> Werkend contact formulier dat emails verstuurt</p>
            </div>
          </div>

          <div class="lesson-section">
            <h4>🦶 Stap 5: Footer Design</h4>
            <p>Bouw een professionele footer die de website completeert:</p>
            <div class="example-box">
              <strong>Prompt 4 - Footer:</strong>
              <pre><code>Maak een professionele footer voor mijn portfolio website met:

Footer Content:
- Social media links (GitHub, LinkedIn, Twitter)
- Contact informatie (email, telefoon)
- Quick links naar secties
- Copyright notice
- Back to top button

Styling:
- Modern footer design
- Responsive layout
- Social media icons
- Hover effecten
- Smooth scroll naar top

Layout:
- 3 kolommen op desktop
- 2 kolommen op tablet
- 1 kolom op mobile
- Sticky footer (altijd onderaan)

Features:
- Social media links
- Contact informatie
- Navigation links
- Copyright
- Back to top functionaliteit</code></pre>
              <p><strong>Verwacht resultaat:</strong> Professionele footer met alle elementen</p>
            </div>
          </div>

          <div class="lesson-section">
            <h4>🔧 Stap 6: Integration en Testing</h4>
            <p>Integreer alles en test de functionaliteit:</p>
            <div class="example-box">
              <strong>Integration Checklist:</strong>
              <ul>
                <li>✅ Contact formulier geïntegreerd in contact.html</li>
                <li>✅ Footer toegevoegd aan alle pagina's</li>
                <li>✅ Form validatie werkt correct</li>
                <li>✅ Email submission geconfigureerd</li>
                <li>✅ Social media links werken</li>
                <li>✅ Back to top button functioneert</li>
                <li>✅ Responsive design perfect</li>
              </ul>
              <p><strong>Testing Commando's:</strong></p>
              <pre><code># Test form validatie
1. Vul formulier in met ongeldige data
2. Controleer of error messages verschijnen
3. Test email validatie
4. Test form submission

# Test footer functionaliteit
1. Klik op social media links
2. Test back to top button
3. Controleer responsive design
4. Test alle links</code></pre>
            </div>
          </div>

          <div class="lesson-section">
            <h4>🌐 Stap 7: Local Development Testing</h4>
            <p>Test alles lokaal met je development server:</p>
            <div class="example-box">
              <strong>Local Testing:</strong>
              <ol>
                <li><strong>Start Live Server:</strong> Rechtsklik op contact.html > Open with Live Server</li>
                <li><strong>Test Form Validatie:</strong> Vul ongeldige data in</li>
                <li><strong>Test Form Submission:</strong> Vul geldige data in en submit</li>
                <li><strong>Controleer Email:</strong> Check of je email ontvangt</li>
                <li><strong>Test Footer:</strong> Controleer alle links en functionaliteit</li>
              </ol>
              <p><strong>Browser DevTools:</strong></p>
              <ul>
                <li>Open DevTools (F12)</li>
                <li>Controleer Console voor errors</li>
                <li>Test Network tab voor form submission</li>
                <li>Controleer responsive design</li>
              </ul>
            </div>
          </div>

          <div class="lesson-section">
            <h4>✅ Stap 8: Final Testing Checklist</h4>
            <p>Voer deze uitgebreide tests uit:</p>
            <div class="example-box">
              <strong>Form Testing:</strong>
              <ul>
                <li>✅ Form laadt zonder errors</li>
                <li>✅ Validatie werkt real-time</li>
                <li>✅ Error messages zijn duidelijk</li>
                <li>✅ Email format validatie werkt</li>
                <li>✅ Form submission werkt</li>
                <li>✅ Success message verschijnt</li>
                <li>✅ Form reset na submission</li>
                <li>✅ Loading states werken</li>
              </ul>
              <p><strong>Footer Testing:</strong></p>
              <ul>
                <li>✅ Footer ziet er professioneel uit</li>
                <li>✅ Social media links werken</li>
                <li>✅ Back to top button functioneert</li>
                <li>✅ Responsive design perfect</li>
                <li>✅ Alle links werken</li>
              </ul>
            </div>
          </div>

          <div class="lesson-section">
            <h4>💾 Stap 9: Git Commit</h4>
            <p>Commit je contact formulier en footer:</p>
            <div class="example-box">
              <strong>Git Commando's:</strong>
              <pre><code># Controleer status
git status

# Voeg alle wijzigingen toe
git add .

# Commit met beschrijvende message
git commit -m "Add contact form with validation and professional footer"

# Controleer commit history
git log --oneline -5</code></pre>
              <p><strong>Verwacht resultaat:</strong> Contact formulier en footer zijn opgeslagen in Git</p>
            </div>
          </div>

          <div class="lesson-section">
            <h4>🎯 Stap 10: Les Samenvatting</h4>
            <p>Je hebt nu succesvol:</p>
            <div class="example-box">
              <strong>Behaalde Doelen:</strong>
              <ul>
                <li>✅ Functioneel contact formulier gebouwd</li>
                <li>✅ Form validatie geïmplementeerd</li>
                <li>✅ Email submission geconfigureerd</li>
                <li>✅ Professionele footer gemaakt</li>
                <li>✅ Social media links toegevoegd</li>
                <li>✅ Back to top functionaliteit</li>
                <li>✅ Responsive design getest</li>
                <li>✅ Git commits gemaakt</li>
              </ul>
            </div>
          </div>

          <div class="lesson-section">
            <h4>🚨 Troubleshooting</h4>
            <p>Veelvoorkomende problemen en oplossingen:</p>
            <div class="example-box">
              <strong>Probleem: Form submission werkt niet</strong>
              <p><strong>Oplossing:</strong> Controleer EmailJS configuratie, controleer console voor errors, controleer service ID en template ID</p>
              
              <strong>Probleem: Validatie werkt niet</strong>
              <p><strong>Oplossing:</strong> Controleer JavaScript console voor errors, controleer event listeners, controleer form field names</p>
              
              <strong>Probleem: Footer links werken niet</strong>
              <p><strong>Oplossing:</strong> Controleer href attributes, test links in nieuwe tab, controleer URL formatting</p>
              
              <strong>Probleem: Email wordt niet ontvangen</strong>
              <p><strong>Oplossing:</strong> Controleer spam folder, controleer EmailJS template, test met verschillende email adressen</p>
            </div>
          </div>

          <div class="key-takeaway">
            <h4>🎯 Wat je nu kunt</h4>
            <p>Na deze les kun je:</p>
            <ul>
              <li>Functionele contact formulieren maken</li>
              <li>Form validatie implementeren</li>
              <li>Email submission configureren</li>
              <li>Professionele footers bouwen</li>
              <li>Social media integratie toevoegen</li>
              <li>Back to top functionaliteit implementeren</li>
              <li>Responsive design testen</li>
              <li>Complete website functionaliteit</li>
            </ul>
          </div>
        `,
        quiz: {
          question: "Welke HTML5 input type gebruik je voor email validatie?",
          options: ["text", "email", "contact", "mail"],
                  correct: 1
      }
    },
    '5': {
      title: 'Deployment & Launch',
      duration: '75 min',
      objectives: [
        'Website optimaliseren voor productie',
        'Deployen naar Vercel',
        'SEO en performance optimaliseren',
        'Analytics configureren'
      ],
      content: `
        <h3>🚀 Deployment & Launch - Zet je Website Online</h3>
        <p>Nu gaan we je portfolio website optimaliseren en live zetten zodat je het kunt delen met potentiële klanten. Dit is de laatste stap naar een professionele online aanwezigheid!</p>
        
        <div class="lesson-section">
          <h4>⚡ Stap 1: Performance Optimalisatie</h4>
          <p>Optimaliseer je website voor snelle laadtijden en betere gebruikerservaring:</p>
          <div class="example-box">
            <strong>Performance Optimalisatie Stappen:</strong>
            <ul>
              <li>Afbeeldingen comprimeren en optimaliseren</li>
              <li>CSS en JavaScript minificeren</li>
              <li>Lazy loading implementeren</li>
              <li>Browser caching configureren</li>
              <li>Critical CSS inlining</li>
              <li>Code splitting en bundling</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>💬 Stap 2: Cursor AI Performance Prompt</h4>
          <p>Open Cursor AI en voer deze uitgebreide prompt uit:</p>
          <div class="example-box">
            <strong>Prompt 1 - Performance Optimalisatie:</strong>
            <pre><code>Optimaliseer mijn portfolio website voor productie met:

Performance Optimalisaties:
- Compress alle afbeeldingen (JPEG, PNG, WebP)
- Minify CSS en JavaScript bestanden
- Implementeer lazy loading voor afbeeldingen
- Optimaliseer font loading
- Voeg browser caching headers toe
- Implementeer critical CSS inlining

Image Optimization:
- Convert naar WebP format waar mogelijk
- Implementeer responsive images
- Add lazy loading attributes
- Optimize image dimensions
- Use appropriate image formats

CSS/JS Optimization:
- Minify alle CSS bestanden
- Minify alle JavaScript bestanden
- Remove unused CSS
- Optimize CSS delivery
- Implementeer code splitting

Caching Strategy:
- Browser caching voor statische assets
- Cache control headers
- ETags implementatie
- Service worker voor offline functionaliteit

Tools en Scripts:
- Image compression scripts
- CSS/JS minification
- Performance monitoring
- Bundle analysis</code></pre>
            <p><strong>Verwacht resultaat:</strong> Geoptimaliseerde website met verbeterde performance</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔍 Stap 3: SEO Optimalisatie</h4>
          <p>Zorg dat je website gevonden wordt door zoekmachines:</p>
          <div class="example-box">
            <strong>Prompt 2 - SEO Optimalisatie:</strong>
            <pre><code>Implementeer SEO optimalisatie voor mijn portfolio website:

Meta Tags:
- Title tags voor elke pagina
- Meta descriptions
- Open Graph tags voor social media
- Twitter Card tags
- Canonical URLs
- Robots meta tags

Structured Data:
- JSON-LD schema markup
- Person schema voor portfolio
- Organization schema
- WebSite schema
- BreadcrumbList schema

Technical SEO:
- XML sitemap genereren
- Robots.txt bestand
- Clean URL structure
- Mobile-friendly design
- Fast loading times
- HTTPS implementatie

Content Optimization:
- Semantic HTML structure
- Heading hierarchy (H1, H2, H3)
- Alt text voor afbeeldingen
- Internal linking
- Keyword optimization
- Meta descriptions</code></pre>
            <p><strong>Verwacht resultaat:</strong> SEO-geoptimaliseerde website</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🌐 Stap 4: Vercel Account Aanmaken</h4>
          <p>Maak een Vercel account aan voor deployment:</p>
          <div class="example-box">
            <strong>Vercel Setup Stappen:</strong>
            <ol>
              <li><strong>Ga naar vercel.com</strong> en klik op "Sign Up"</li>
              <li><strong>Kies GitHub:</strong> Log in met je GitHub account</li>
              <li><strong>Autoriseer Vercel:</strong> Geef Vercel toegang tot je repositories</li>
              <li><strong>Dashboard:</strong> Je komt nu in het Vercel dashboard</li>
              <li><strong>Verificatie:</strong> Controleer je email voor verificatie</li>
            </ol>
            <p><strong>Verwacht resultaat:</strong> Vercel account is aangemaakt en geverifieerd</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>📤 Stap 5: GitHub Repository Voorbereiden</h4>
          <p>Zorg dat je project klaar is voor deployment:</p>
          <div class="example-box">
            <strong>GitHub Setup:</strong>
            <pre><code># Controleer of je in de juiste map bent
pwd
ls -la

# Controleer Git status
git status

# Voeg alle wijzigingen toe
git add .

# Commit laatste wijzigingen
git commit -m "Final optimization before deployment"

# Push naar GitHub
git push origin main

# Controleer of alles gepusht is
git log --oneline -5</code></pre>
            <p><strong>Verwacht resultaat:</strong> Alle code is gepusht naar GitHub</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🚀 Stap 6: Vercel Deployment</h4>
          <p>Deploy je website naar Vercel:</p>
          <div class="example-box">
            <strong>Vercel Deployment Stappen:</strong>
            <ol>
              <li><strong>Import Project:</strong> Klik op "New Project" in Vercel dashboard</li>
              <li><strong>Select Repository:</strong> Kies je portfolio-website repository</li>
              <li><strong>Configure Project:</strong> Vercel detecteert automatisch de settings</li>
              <li><strong>Deploy:</strong> Klik op "Deploy"</li>
              <li><strong>Wait:</strong> Wacht tot deployment klaar is (1-2 minuten)</li>
              <li><strong>Success:</strong> Je website is nu live!</li>
            </ol>
            <p><strong>Verwacht resultaat:</strong> Je website is live op een Vercel URL</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔧 Stap 7: Custom Domain Configureren</h4>
          <p>Voeg een custom domain toe aan je website:</p>
          <div class="example-box">
            <strong>Domain Setup:</strong>
            <ol>
              <li><strong>Koop Domain:</strong> Koop een domain bij een registrar (Namecheap, GoDaddy, etc.)</li>
              <li><strong>Vercel Settings:</strong> Ga naar je project settings in Vercel</li>
              <li><strong>Add Domain:</strong> Klik op "Add Domain" en voer je domain in</li>
              <li><strong>DNS Configuratie:</strong> Vercel geeft je DNS records</li>
              <li><strong>Update DNS:</strong> Voeg de DNS records toe bij je domain registrar</li>
              <li><strong>Wait:</strong> Wacht tot DNS propagatie klaar is (24-48 uur)</li>
            </ol>
            <p><strong>Verwacht resultaat:</strong> Je website is bereikbaar op je custom domain</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>📊 Stap 8: Analytics Configureren</h4>
          <p>Voeg analytics toe om je website performance te monitoren:</p>
          <div class="example-box">
            <strong>Prompt 3 - Analytics Setup:</strong>
            <pre><code>Voeg Google Analytics toe aan mijn portfolio website:

Google Analytics Setup:
- Google Analytics 4 (GA4) account aanmaken
- Tracking code implementeren
- Event tracking configureren
- Conversion tracking
- Custom dimensions

Implementation:
- Google Analytics script toevoegen
- Privacy policy compliance
- Cookie consent banner
- GDPR compliance
- Data retention settings

Tracking Events:
- Page views
- Contact form submissions
- Portfolio clicks
- Social media clicks
- Time on site
- Bounce rate

Reports:
- Real-time analytics
- Audience insights
- Traffic sources
- Page performance
- User behavior</code></pre>
            <p><strong>Verwacht resultaat:</strong> Analytics tracking is geïmplementeerd</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>✅ Stap 9: Final Testing</h4>
          <p>Test je live website uitgebreid:</p>
          <div class="example-box">
            <strong>Live Website Testing:</strong>
            <ul>
              <li>✅ Website laadt snel</li>
              <li>✅ Alle pagina's werken</li>
              <li>✅ Contact formulier functioneert</li>
              <li>✅ Responsive design perfect</li>
              <li>✅ SEO meta tags correct</li>
              <li>✅ Analytics tracking werkt</li>
              <li>✅ Social media links werken</li>
              <li>✅ Cross-browser compatibility</li>
            </ul>
            <p><strong>Performance Tests:</strong></p>
            <ul>
              <li>Google PageSpeed Insights</li>
              <li>GTmetrix performance test</li>
              <li>Mobile-friendly test</li>
              <li>SEO audit tools</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎯 Stap 10: Launch Checklist</h4>
          <p>Zorg dat alles perfect is voor de lancering:</p>
          <div class="example-box">
            <strong>Pre-Launch Checklist:</strong>
            <ul>
              <li>✅ Alle links werken</li>
              <li>✅ Contact formulier functioneert</li>
              <li>✅ Responsive op alle apparaten</li>
              <li>✅ SEO meta tags geplaatst</li>
              <li>✅ Performance geoptimaliseerd</li>
              <li>✅ Content spellingscontrole</li>
              <li>✅ Social media links toegevoegd</li>
              <li>✅ Analytics geconfigureerd</li>
              <li>✅ Custom domain werkt</li>
              <li>✅ SSL certificaat actief</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎉 Stap 11: Website Lanceren</h4>
          <p>Je website is nu klaar voor de wereld!</p>
          <div class="example-box">
            <strong>Launch Acties:</strong>
            <ol>
              <li><strong>Share op Social Media:</strong> Deel je website op LinkedIn, Twitter, etc.</li>
              <li><strong>Update LinkedIn Profile:</strong> Voeg je website toe aan je LinkedIn profiel</li>
              <li><strong>Email Signature:</strong> Voeg je website toe aan je email signature</li>
              <li><strong>Portfolio Links:</strong> Deel je portfolio met potentiële klanten</li>
              <li><strong>Monitor Analytics:</strong> Houd je website performance in de gaten</li>
            </ol>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎯 Stap 12: Les Samenvatting</h4>
          <p>Je hebt nu succesvol:</p>
          <div class="example-box">
            <strong>Behaalde Doelen:</strong>
            <ul>
              <li>✅ Website geoptimaliseerd voor productie</li>
              <li>✅ SEO geïmplementeerd</li>
              <li>✅ Vercel account aangemaakt</li>
              <li>✅ Website gedeployed</li>
              <li>✅ Custom domain geconfigureerd</li>
              <li>✅ Analytics toegevoegd</li>
              <li>✅ Performance getest</li>
              <li>✅ Website gelanceerd</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🚨 Troubleshooting</h4>
          <p>Veelvoorkomende problemen en oplossingen:</p>
          <div class="example-box">
            <strong>Probleem: Deployment faalt</strong>
            <p><strong>Oplossing:</strong> Controleer build logs in Vercel, controleer of alle bestanden gepusht zijn naar GitHub</p>
            
            <strong>Probleem: Custom domain werkt niet</strong>
            <p><strong>Oplossing:</strong> Controleer DNS records, wacht op DNS propagatie (24-48 uur), controleer SSL certificaat</p>
            
            <strong>Probleem: Website laadt langzaam</strong>
            <p><strong>Oplossing:</strong> Optimaliseer afbeeldingen, minify CSS/JS, implementeer caching, gebruik CDN</p>
            
            <strong>Probleem: Analytics werkt niet</strong>
            <p><strong>Oplossing:</strong> Controleer tracking code, controleer ad blockers, test in incognito mode</p>
          </div>
        </div>

        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Website optimaliseren voor productie</li>
            <li>SEO implementeren</li>
            <li>Deployen naar Vercel</li>
            <li>Custom domain configureren</li>
            <li>Analytics toevoegen</li>
            <li>Performance monitoren</li>
            <li>Website lanceren</li>
            <li>Professionele online aanwezigheid hebben</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welke tool gebruik je voor automatische deployment?",
        options: ["GitHub", "Vercel", "WordPress", "Figma"],
        correct: 1
             }
     }
   },
   '8': {
     '1': {
       title: 'Wat is Cursor AI?',
       duration: '45 min',
       objectives: [
         'Begrijpen wat Cursor AI is en waarom het revolutionair is',
         'Kennen van de geschiedenis en ontwikkeling van AI code editors',
         'Inzicht in waarom Cursor AI de beste keuze is voor development'
       ],
       content: `
         <h3>🤖 Wat is Cursor AI? - De Revolutie in Development</h3>
         <p>Cursor AI is niet zomaar een code editor - het is een complete paradigmashift in hoe we software ontwikkelen. Laten we ontdekken wat het is en waarom het de toekomst van development is.</p>
         
         <div class="lesson-section">
           <h4>🎯 Wat is Cursor AI?</h4>
           <p>Cursor AI is een AI-powered code editor die de kracht van kunstmatige intelligentie combineert met de functionaliteit van een professionele development environment:</p>
           <div class="example-box">
             <strong>Cursor AI in een notendop:</strong>
             <ul>
               <li><strong>AI-Powered Code Editor:</strong> Een code editor met ingebouwde AI assistentie</li>
               <li><strong>Intelligent Code Completion:</strong> AI die begrijpt wat je wilt schrijven</li>
               <li><strong>Natural Language Programming:</strong> Code schrijven door te beschrijven wat je wilt</li>
               <li><strong>Advanced Code Analysis:</strong> AI die je code analyseert en verbetert</li>
               <li><strong>Built on VS Code:</strong> Alle VS Code functionaliteiten + AI superpowers</li>
             </ul>
           </div>
         </div>

         <div class="lesson-section">
           <h4>📈 De Geschiedenis van AI in Development</h4>
           <p>Om te begrijpen waarom Cursor AI zo revolutionair is, moeten we kijken naar de evolutie van development tools:</p>
           <div class="example-box">
             <strong>De Evolutie van Development Tools:</strong>
             <ol>
               <li><strong>1980s - 1990s:</strong> Basis text editors (Notepad, Vim)</li>
               <li><strong>2000s:</strong> IDE's met syntax highlighting (Eclipse, Visual Studio)</li>
               <li><strong>2010s:</strong> Moderne editors (VS Code, Sublime Text)</li>
               <li><strong>2020:</strong> GitHub Copilot - Eerste AI code completion</li>
               <li><strong>2023:</strong> Cursor AI - Complete AI-powered development environment</li>
             </ol>
           </div>
         </div>

         <div class="lesson-section">
           <h4>🚀 Waarom Cursor AI Revolutionair Is</h4>
           <p>Cursor AI is niet zomaar een verbetering - het is een complete game-changer:</p>
           <div class="example-box">
             <strong>Revolutionaire Features:</strong>
             <ul>
               <li><strong>Natural Language to Code:</strong> Beschrijf wat je wilt en krijg werkende code</li>
               <li><strong>Context-Aware AI:</strong> AI die je hele project begrijpt</li>
               <li><strong>Intelligent Refactoring:</strong> Automatisch code verbeteren en optimaliseren</li>
               <li><strong>Advanced Debugging:</strong> AI die bugs vindt en oplossingen voorstelt</li>
               <li><strong>Documentation Generation:</strong> Automatisch documentatie en comments</li>
               <li><strong>Multi-Language Support:</strong> Werkt met alle programmeertalen</li>
             </ul>
           </div>
         </div>

         <div class="lesson-section">
           <h4>💡 Het Paradigma van Natural Language Programming</h4>
           <p>Cursor AI introduceert een compleet nieuwe manier van programmeren:</p>
           <div class="example-box">
             <strong>Oude Manier vs Nieuwe Manier:</strong>
             <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
               <div>
                 <h5>❌ Traditioneel Programmeren:</h5>
                 <ul>
                   <li>Syntax uit je hoofd leren</li>
                   <li>Handmatig code schrijven</li>
                   <li>Veel tijd besteden aan boilerplate</li>
                   <li>Frequent googlen voor oplossingen</li>
                   <li>Debugging door trial and error</li>
                 </ul>
               </div>
               <div>
                 <h5>✅ AI-Powered Programmeren:</h5>
                 <ul>
                   <li>Beschrijf wat je wilt in gewone taal</li>
                   <li>AI genereert de code voor je</li>
                   <li>Focus op logica en architectuur</li>
                   <li>AI vindt oplossingen voor je</li>
                   <li>Intelligente debugging en suggesties</li>
                 </ul>
               </div>
             </div>
           </div>
         </div>

         <div class="lesson-section">
           <h4>🎯 Waarom We Met Cursor AI Werken</h4>
           <p>Er zijn verschillende AI code editors, maar Cursor AI is de beste keuze voor deze cursus:</p>
           <div class="example-box">
             <strong>Voordelen van Cursor AI:</strong>
             <ul>
               <li><strong>🆓 Gratis voor Individueel Gebruik:</strong> Geen dure licenties nodig</li>
               <li><strong>🚀 Krachtigste AI Model:</strong> Gebruikt Claude 3.5 Sonnet (meest geavanceerde AI)</li>
               <li><strong>🔧 VS Code Compatibiliteit:</strong> Alle VS Code extensions werken</li>
               <li><strong>📚 Uitstekende Documentatie:</strong> Veel tutorials en community support</li>
               <li><strong>🔄 Actieve Ontwikkeling:</strong> Regelmatige updates en nieuwe features</li>
               <li><strong>🌍 Grote Community:</strong> Veel developers gebruiken het al</li>
             </ul>
           </div>
         </div>

         <div class="lesson-section">
           <h4>🔍 Cursor AI vs Andere AI Tools</h4>
           <p>Hoe verhoudt Cursor AI zich tot andere AI development tools?</p>
           <div class="example-box">
             <strong>Vergelijking met Andere Tools:</strong>
             <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
               <thead>
                 <tr style="background: #2a2a2a;">
                   <th style="padding: 12px; border: 1px solid #444;">Tool</th>
                   <th style="padding: 12px; border: 1px solid #444;">Voordelen</th>
                   <th style="padding: 12px; border: 1px solid #444;">Nadelen</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td style="padding: 12px; border: 1px solid #444;"><strong>Cursor AI</strong></td>
                   <td style="padding: 12px; border: 1px solid #444;">Gratis, krachtigste AI, VS Code compatibel</td>
                   <td style="padding: 12px; border: 1px solid #444;">Relatief nieuw</td>
                 </tr>
                 <tr>
                   <td style="padding: 12px; border: 1px solid #444;"><strong>GitHub Copilot</strong></td>
                   <td style="padding: 12px; border: 1px solid #444;">Geïntegreerd in VS Code, goed getest</td>
                   <td style="padding: 12px; border: 1px solid #444;">Betaald, minder krachtig AI model</td>
                 </tr>
                 <tr>
                   <td style="padding: 12px; border: 1px solid #444;"><strong>ChatGPT</strong></td>
                   <td style="padding: 12px; border: 1px solid #444;">Goed voor uitleg en concepten</td>
                   <td style="padding: 12px; border: 1px solid #444;">Geen code editor, context switching</td>
                 </tr>
                 <tr>
                   <td style="padding: 12px; border: 1px solid #444;"><strong>VS Code + Extensions</strong></td>
                   <td style="padding: 12px; border: 1px solid #444;">Veel extensies, stabiel</td>
                   <td style="padding: 12px; border: 1px solid #444;">Geen ingebouwde AI</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>

         <div class="lesson-section">
           <h4>🎓 Cursor AI voor Beginners</h4>
           <p>Cursor AI is perfect voor beginners, maar ook krachtig voor experts:</p>
           <div class="example-box">
             <strong>Waarom Perfect voor Beginners:</strong>
             <ul>
               <li><strong>🎯 Leer Sneller:</strong> AI legt concepten uit terwijl je code schrijft</li>
               <li><strong>🚫 Minder Fouten:</strong> AI voorkomt veelvoorkomende beginnersfouten</li>
               <li><strong>📚 Altijd Uitleg:</strong> Vraag AI om code uit te leggen</li>
               <li><strong>🔍 Debugging Hulp:</strong> AI helpt je bugs vinden en oplossen</li>
               <li><strong>💡 Best Practices:</strong> AI leert je moderne development practices</li>
               <li><strong>⚡ Sneller Resultaten:</strong> Focus op leren in plaats van syntax</li>
             </ul>
           </div>
         </div>

         <div class="lesson-section">
           <h4>🔮 De Toekomst van Development</h4>
           <p>Cursor AI is niet alleen een tool - het is een glimp van de toekomst:</p>
           <div class="example-box">
             <strong>Hoe AI Development Verandert:</strong>
             <ul>
               <li><strong>🎯 Focus op Probleemoplossing:</strong> Minder tijd aan syntax, meer aan logica</li>
               <li><strong>🚀 Snellere Development:</strong> 10x sneller code schrijven</li>
               <li><strong>🔧 Betere Code Kwaliteit:</strong> AI suggereert best practices</li>
               <li><strong>📚 Democratisering van Development:</strong> Meer mensen kunnen programmeren</li>
               <li><strong>🔄 Iteratieve Verbetering:</strong> AI helpt code constant verbeteren</li>
               <li><strong>🌍 Collaboration:</strong> AI als team member</li>
             </ul>
           </div>
         </div>

         <div class="lesson-section">
           <h4>🎯 Praktische Voorbeelden</h4>
           <p>Hoe ziet het eruit in de praktijk?</p>
           <div class="example-box">
             <strong>Voorbeeld 1: Component Maken</strong>
             <pre><code>// Jij typt:
"Maak een React component voor een user profile card"

// Cursor AI genereert:
function UserProfileCard({ user }) {
  return (
    &lt;div className="profile-card"&gt;
      &lt;img src={user.avatar} alt={user.name} /&gt;
      &lt;h3&gt;{user.name}&lt;/h3&gt;
      &lt;p&gt;{user.email}&lt;/p&gt;
      &lt;div className="stats"&gt;
        &lt;span&gt;Posts: {user.posts}&lt;/span&gt;
        &lt;span&gt;Followers: {user.followers}&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}</code></pre>
             <strong>Voorbeeld 2: Bug Oplossen</strong>
             <pre><code>// Jij selecteert buggy code en vraagt:
"Waarom werkt deze functie niet?"

// Cursor AI analyseert en legt uit:
"De functie heeft een syntax error op regel 5. 
Je mist een closing bracket. Hier is de fix:..."</code></pre>
           </div>
         </div>

         <div class="lesson-section">
           <h4>🚨 Veelvoorkomende Misverstanden</h4>
           <p>Laten we enkele misverstanden over Cursor AI uit de weg ruimen:</p>
           <div class="example-box">
             <strong>Misverstanden en Realiteit:</strong>
             <ul>
               <li><strong>❌ "AI vervangt developers"</strong> → <strong>✅ AI maakt developers krachtiger</strong></li>
               <li><strong>❌ "Je hoeft niets te leren"</strong> → <strong>✅ Je leert sneller en beter</strong></li>
               <li><strong>❌ "AI schrijft alle code"</strong> → <strong>✅ AI assisteert, jij beslist</strong></li>
               <li><strong>❌ "Alleen voor experts"</strong> → <strong>✅ Perfect voor beginners</strong></li>
               <li><strong>❌ "Duur en ingewikkeld"</strong> → <strong>✅ Gratis en gebruiksvriendelijk</strong></li>
             </ul>
           </div>
         </div>

         <div class="key-takeaway">
           <h4>🎯 Wat je nu begrijpt</h4>
           <p>Na deze les begrijp je:</p>
           <ul>
             <li>Wat Cursor AI is en waarom het revolutionair is</li>
             <li>De evolutie van development tools naar AI-powered editors</li>
             <li>Waarom Cursor AI de beste keuze is voor deze cursus</li>
             <li>Hoe AI development democratiseert en versnelt</li>
             <li>De praktische voordelen voor beginners en experts</li>
             <li>De toekomst van development met AI</li>
           </ul>
         </div>
       `,
       quiz: {
         question: "Wat is het belangrijkste voordeel van Cursor AI voor beginners?",
         options: ["Het is gratis", "Je hoeft niets te leren", "Je leert sneller en beter", "Het vervangt alle andere tools"],
                 correct: 2
      }
    },
    '2': {
      title: 'Cursor AI Installeren & Configureren',
      duration: '50 min',
      objectives: [
        'Cursor AI downloaden en installeren',
        'Account aanmaken en configureren',
        'Eerste project opzetten',
        'Basis instellingen optimaliseren'
      ],
      content: `
        <h3>⚙️ Cursor AI Installeren & Configureren - Stap voor Stap</h3>
        <p>Nu gaan we Cursor AI daadwerkelijk installeren en configureren zodat je ermee aan de slag kunt. We gaan dit stap voor stap doorlopen!</p>
        
        <div class="lesson-section">
          <h4>📥 Stap 1: Cursor AI Downloaden</h4>
          <p>Laten we beginnen met het downloaden van Cursor AI:</p>
          <div class="example-box">
            <strong>Download Stappen:</strong>
            <ol>
              <li><strong>Ga naar cursor.sh</strong> in je browser</li>
              <li><strong>Klik op "Download"</strong> of "Get Cursor"</li>
              <li><strong>Kies je besturingssysteem:</strong>
                <ul>
                  <li>Windows: .exe bestand</li>
                  <li>macOS: .dmg bestand</li>
                  <li>Linux: .AppImage of .deb bestand</li>
                </ul>
              </li>
              <li><strong>Wacht tot download klaar is</strong></li>
            </ol>
            <p><strong>Verwacht resultaat:</strong> Cursor AI installer is gedownload</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔧 Stap 2: Cursor AI Installeren</h4>
          <p>Nu gaan we Cursor AI installeren op je computer:</p>
          <div class="example-box">
            <strong>Installatie Stappen:</strong>
            <ol>
              <li><strong>Open het gedownloade bestand:</strong> Dubbelklik op de installer</li>
              <li><strong>Volg de installatie wizard:</strong>
                <ul>
                  <li>Accepteer de license agreement</li>
                  <li>Kies installatie locatie (standaard is prima)</li>
                  <li>Klik op "Install"</li>
                </ul>
              </li>
              <li><strong>Wacht tot installatie klaar is</strong> (1-2 minuten)</li>
              <li><strong>Klik op "Launch Cursor"</strong> om te starten</li>
            </ol>
            <p><strong>Verwacht resultaat:</strong> Cursor AI is geïnstalleerd en opent</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>👤 Stap 3: Account Aanmaken</h4>
          <p>Nu gaan we een Cursor AI account aanmaken:</p>
          <div class="example-box">
            <strong>Account Setup:</strong>
            <ol>
              <li><strong>Cursor AI opent voor het eerst:</strong> Je ziet een welkomstscherm</li>
              <li><strong>Klik op "Sign Up"</strong> of "Create Account"</li>
              <li><strong>Kies je signup methode:</strong>
                <ul>
                  <li><strong>GitHub (Aanbevolen):</strong> Als je al een GitHub account hebt</li>
                  <li><strong>Email:</strong> Als je geen GitHub hebt</li>
                </ul>
              </li>
              <li><strong>Voltooi de registratie:</strong>
                <ul>
                  <li>Vul je naam in</li>
                  <li>Kies een username</li>
                  <li>Bevestig je email (als je email gebruikt)</li>
                </ul>
              </li>
              <li><strong>Accepteer de terms of service</strong></li>
            </ol>
            <p><strong>Verwacht resultaat:</strong> Je bent ingelogd in Cursor AI</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎨 Stap 4: Eerste Kennismaking met de Interface</h4>
          <p>Laten we de Cursor AI interface verkennen:</p>
          <div class="example-box">
            <strong>Interface Elementen:</strong>
            <ul>
              <li><strong>📁 File Explorer:</strong> Links - toont je project bestanden</li>
              <li><strong>📝 Editor:</strong> Midden - waar je code schrijft</li>
              <li><strong>🤖 AI Chat:</strong> Rechts - chat met AI voor hulp</li>
              <li><strong>🔍 Terminal:</strong> Onder - voor commando's uitvoeren</li>
              <li><strong>⚙️ Settings:</strong> Gear icoon - instellingen aanpassen</li>
            </ul>
            <p><strong>Basis Navigatie:</strong></p>
            <ul>
              <li><strong>Ctrl/Cmd + N:</strong> Nieuw bestand</li>
              <li><strong>Ctrl/Cmd + O:</strong> Open bestand</li>
              <li><strong>Ctrl/Cmd + S:</strong> Bestand opslaan</li>
              <li><strong>Ctrl/Cmd + Shift + P:</strong> Command palette</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>⚙️ Stap 5: Basis Instellingen Configureren</h4>
          <p>Laten we de belangrijkste instellingen optimaliseren:</p>
          <div class="example-box">
            <strong>Instellingen Configureren:</strong>
            <ol>
              <li><strong>Open Settings:</strong> Ctrl/Cmd + , (comma)</li>
              <li><strong>Theme:</strong> Kies "Dark" voor betere ogen</li>
              <li><strong>Font Size:</strong> Zet op 14-16 voor leesbaarheid</li>
              <li><strong>Font Family:</strong> "JetBrains Mono" of "Fira Code" voor code</li>
              <li><strong>Tab Size:</strong> Zet op 2 voor web development</li>
              <li><strong>Word Wrap:</strong> Aan voor lange regels</li>
              <li><strong>Auto Save:</strong> Aan voor automatisch opslaan</li>
            </ol>
            <p><strong>AI Instellingen:</strong></p>
            <ul>
              <li><strong>Model:</strong> Claude 3.5 Sonnet (standaard)</li>
              <li><strong>Context:</strong> 100k tokens (standaard)</li>
              <li><strong>Auto-complete:</strong> Aan</li>
              <li><strong>Inline suggestions:</strong> Aan</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>📁 Stap 6: Eerste Project Opzetten</h4>
          <p>Nu gaan we je eerste project opzetten:</p>
          <div class="example-box">
            <strong>Project Setup:</strong>
            <ol>
              <li><strong>Open Folder:</strong> File > Open Folder</li>
              <li><strong>Maak nieuwe map:</strong> Maak een map "cursor-test" op je desktop</li>
              <li><strong>Selecteer de map:</strong> Kies de "cursor-test" map</li>
              <li><strong>Klik "Select Folder":</strong> Cursor AI opent nu de map</li>
              <li><strong>Controleer File Explorer:</strong> Je ziet nu de lege map</li>
            </ol>
            <p><strong>Verwacht resultaat:</strong> Je hebt een lege workspace geopend</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🤖 Stap 7: Eerste AI Chat Testen</h4>
          <p>Laten we de AI chat functionaliteit testen:</p>
          <div class="example-box">
            <strong>AI Chat Testen:</strong>
            <ol>
              <li><strong>Open AI Chat:</strong> Klik op het chat icoon rechts</li>
              <li><strong>Type een eenvoudige vraag:</strong> "Hallo! Kun je me helpen met programmeren?"</li>
              <li><strong>Druk op Enter:</strong> AI antwoordt</li>
              <li><strong>Test een code vraag:</strong> "Maak een eenvoudige HTML pagina"</li>
              <li><strong>Observeer het antwoord:</strong> AI genereert code voor je</li>
            </ol>
            <p><strong>Verwacht resultaat:</strong> AI chat werkt en geeft nuttige antwoorden</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>💻 Stap 8: Eerste Code Bestand Maken</h4>
          <p>Laten we je eerste code bestand maken met AI hulp:</p>
          <div class="example-box">
            <strong>Code Bestand Maken:</strong>
            <ol>
              <li><strong>Nieuw bestand:</strong> Ctrl/Cmd + N</li>
              <li><strong>Opslaan als HTML:</strong> Ctrl/Cmd + S, naam: "index.html"</li>
              <li><strong>AI prompt:</strong> Type in de chat: "Maak een eenvoudige HTML5 template"</li>
              <li><strong>Kopieer code:</strong> Kopieer de gegenereerde HTML code</li>
              <li><strong>Plak in editor:</strong> Plak de code in je index.html bestand</li>
              <li><strong>Opslaan:</strong> Ctrl/Cmd + S</li>
            </ol>
            <p><strong>Verwacht resultaat:</strong> Je hebt je eerste HTML bestand gemaakt met AI hulp</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔧 Stap 9: Extensions Installeren</h4>
          <p>Laten we enkele nuttige extensions installeren:</p>
          <div class="example-box">
            <strong>Essentiële Extensions:</strong>
            <ol>
              <li><strong>Open Extensions:</strong> Ctrl/Cmd + Shift + X</li>
              <li><strong>Zoek en installeer:</strong>
                <ul>
                  <li><strong>Live Server:</strong> Voor live preview van websites</li>
                  <li><strong>Prettier:</strong> Voor code formatting</li>
                  <li><strong>ES7+ React/Redux/React-Native snippets:</strong> Voor React development</li>
                  <li><strong>Auto Rename Tag:</strong> Voor HTML/JSX development</li>
                  <li><strong>Bracket Pair Colorizer:</strong> Voor betere code leesbaarheid</li>
                </ul>
              </li>
              <li><strong>Herstart Cursor AI:</strong> Voor sommige extensions</li>
            </ol>
            <p><strong>Verwacht resultaat:</strong> Je hebt nuttige extensions geïnstalleerd</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>✅ Stap 10: Testen en Verifiëren</h4>
          <p>Laten we controleren of alles werkt:</p>
          <div class="example-box">
            <strong>Test Checklist:</strong>
            <ul>
              <li>✅ Cursor AI opent zonder errors</li>
              <li>✅ Je bent ingelogd</li>
              <li>✅ AI chat werkt</li>
              <li>✅ Je kunt bestanden maken en opslaan</li>
              <li>✅ Extensions zijn geïnstalleerd</li>
              <li>✅ Instellingen zijn geoptimaliseerd</li>
              <li>✅ Je hebt een test project opgezet</li>
            </ul>
            <p><strong>Probleem Oplossen:</strong></p>
            <ul>
              <li><strong>AI chat werkt niet:</strong> Controleer internetverbinding</li>
              <li><strong>Extensions laden niet:</strong> Herstart Cursor AI</li>
              <li><strong>Performance issues:</strong> Sluit andere programma's</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎯 Stap 11: Eerste AI-Assisted Code Schrijven</h4>
          <p>Laten we je eerste echte code schrijven met AI hulp:</p>
          <div class="example-box">
            <strong>Praktische Oefening:</strong>
            <ol>
              <li><strong>Open je index.html bestand</strong></li>
              <li><strong>Type in AI chat:</strong> "Voeg een mooie CSS styling toe aan deze HTML pagina"</li>
              <li><strong>Kopieer de CSS code</strong> die AI genereert</li>
              <li><strong>Maak een style.css bestand</strong> en plak de CSS</li>
              <li><strong>Link de CSS in je HTML</strong></li>
              <li><strong>Test met Live Server:</strong> Rechtsklik > Open with Live Server</li>
            </ol>
            <p><strong>Verwacht resultaat:</strong> Je hebt een gestylede webpagina gemaakt met AI hulp!</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🚨 Troubleshooting</h4>
          <p>Veelvoorkomende problemen en oplossingen:</p>
          <div class="example-box">
            <strong>Probleem: Cursor AI opent niet</strong>
            <p><strong>Oplossing:</strong> Controleer of je besturingssysteem wordt ondersteund, probeer opnieuw te installeren</p>
            
            <strong>Probleem: AI chat reageert niet</strong>
            <p><strong>Oplossing:</strong> Controleer je internetverbinding, controleer of je account actief is</p>
            
            <strong>Probleem: Extensions werken niet</strong>
            <p><strong>Oplossing:</strong> Herstart Cursor AI, controleer of extensions compatibel zijn</p>
            
            <strong>Probleem: Performance is traag</strong>
            <p><strong>Oplossing:</strong> Sluit andere programma's, controleer je RAM gebruik</p>
          </div>
        </div>

        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Cursor AI downloaden en installeren</li>
            <li>Account aanmaken en configureren</li>
            <li>Basis instellingen optimaliseren</li>
            <li>Project opzetten en beheren</li>
            <li>AI chat gebruiken voor hulp</li>
            <li>Extensions installeren en gebruiken</li>
            <li>Eerste code schrijven met AI assistentie</li>
            <li>Problemen oplossen en troubleshooten</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Welke toetsencombinatie gebruik je om een nieuw bestand te maken in Cursor AI?",
        options: ["Ctrl/Cmd + N", "Ctrl/Cmd + O", "Ctrl/Cmd + S", "Ctrl/Cmd + P"],
        correct: 0
      }
    },
    '3': {
      title: 'Effectieve Prompts Schrijven',
      duration: '60 min',
      objectives: [
        'Begrijpen hoe je effectieve prompts schrijft',
        'Kennen van verschillende prompt technieken',
        'Kunnen gebruiken van context en specificiteit',
        'Prompt best practices toepassen'
      ],
      content: `
        <h3>💬 Effectieve Prompts Schrijven - De Kunst van AI Communicatie</h3>
        <p>De kwaliteit van je prompts bepaalt de kwaliteit van de AI output. Laten we leren hoe je effectieve prompts schrijft die je de beste resultaten geven!</p>
        
        <div class="lesson-section">
          <h4>🎯 Wat is een Effectieve Prompt?</h4>
          <p>Een effectieve prompt is een duidelijke, specifieke instructie die de AI precies vertelt wat je wilt:</p>
          <div class="example-box">
            <strong>Kenmerken van Effectieve Prompts:</strong>
            <ul>
              <li><strong>Duidelijk en Specifiek:</strong> Geen vage instructies</li>
              <li><strong>Context Rijk:</strong> Geeft AI alle benodigde informatie</li>
              <li><strong>Gestructureerd:</strong> Logische opbouw en volgorde</li>
              <li><strong>Doelgericht:</strong> Duidelijk eindresultaat</li>
              <li><strong>Iteratief:</strong> Kan verfijnd worden</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>❌ Slechte vs ✅ Goede Prompts</h4>
          <p>Laten we het verschil zien tussen slechte en goede prompts:</p>
          <div class="example-box">
            <strong>Voorbeelden van Slechte Prompts:</strong>
            <ul>
              <li><strong>❌ "maak een functie"</strong> - Te vaag</li>
              <li><strong>❌ "fix this"</strong> - Geen context</li>
              <li><strong>❌ "help me"</strong> - Niet specifiek</li>
              <li><strong>❌ "do something"</strong> - Geen richting</li>
            </ul>
            <strong>Voorbeelden van Goede Prompts:</strong>
            <ul>
              <li><strong>✅ "Maak een JavaScript functie die een array van gebruikers filtert op leeftijd. De functie moet een minimum leeftijd parameter accepteren en alleen gebruikers teruggeven die ouder zijn dan de minimum leeftijd. Voeg ook JSDoc comments toe."</strong></li>
              <li><strong>✅ "Deze React component heeft een bug waarbij de state niet correct wordt bijgewerkt. Kun je de code analyseren en de bug identificeren en oplossen?"</strong></li>
              <li><strong>✅ "Maak een CSS grid layout voor een portfolio website met 3 kolommen op desktop, 2 op tablet, en 1 op mobile. Gebruik moderne CSS Grid properties en zorg voor responsive design."</strong></li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>📝 Prompt Structuur Framework</h4>
          <p>Een effectieve prompt heeft een duidelijke structuur:</p>
          <div class="example-box">
            <strong>Prompt Structuur:</strong>
            <ol>
              <li><strong>Context:</strong> "Ik ben een beginner developer die..."</li>
              <li><strong>Specifieke Taak:</strong> "Ik wil een functie maken die..."</li>
              <li><strong>Constraints:</strong> "Gebruik alleen vanilla JavaScript"</li>
              <li><strong>Output Format:</strong> "Geef een stap-voor-stap uitleg"</li>
              <li><strong>Follow-up:</strong> "Kun je ook een voorbeeld geven?"</li>
            </ol>
            <p><strong>Voorbeeld van Complete Prompt:</strong></p>
            <pre><code>Context: Ik ben een beginner developer die een portfolio website bouwt.

Taak: Ik wil een contact formulier maken met validatie.

Constraints: Gebruik alleen HTML, CSS en vanilla JavaScript. Geen frameworks.

Output: Geef me de complete code met uitleg van elke stap.

Follow-up: Kun je ook uitleggen hoe de validatie werkt?</code></pre>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔍 Context is Koning</h4>
          <p>Hoe meer context je geeft, hoe beter de AI kan helpen:</p>
          <div class="example-box">
            <strong>Context Elementen:</strong>
            <ul>
              <li><strong>Project Type:</strong> "Dit is een portfolio website"</li>
              <li><strong>Technologie Stack:</strong> "Ik gebruik HTML, CSS, JavaScript"</li>
              <li><strong>Skill Level:</strong> "Ik ben een beginner"</li>
              <li><strong>Doel:</strong> "Ik wil dit tonen aan potentiële klanten"</li>
              <li><strong>Bestaande Code:</strong> "Ik heb al deze HTML structuur"</li>
              <li><strong>Problemen:</strong> "Deze code werkt niet omdat..."</li>
            </ul>
            <p><strong>Voorbeeld met Rijke Context:</strong></p>
            <pre><code>Ik ben een beginner developer die een portfolio website bouwt voor freelance werk. 
Ik gebruik HTML, CSS en vanilla JavaScript (geen frameworks). 
Ik heb al een basis HTML structuur met een contact formulier, maar de validatie werkt niet. 
Het formulier moet controleren of email geldig is en of alle velden ingevuld zijn. 
Kun je me helpen met de JavaScript validatie code?</code></pre>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎯 Specificiteit is Cruciaal</h4>
          <p>Hoe specifieker je bent, hoe beter het resultaat:</p>
          <div class="example-box">
            <strong>Specificiteit Voorbeelden:</strong>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
               <div>
                 <h5>❌ Vaag:</h5>
                 <ul>
                   <li>"maak een website"</li>
                   <li>"voeg styling toe"</li>
                   <li>"fix de bug"</li>
                   <li>"maak het mooi"</li>
                 </ul>
               </div>
               <div>
                 <h5>✅ Specifiek:</h5>
                 <ul>
                   <li>"maak een portfolio website met hero section, about, portfolio en contact pagina's"</li>
                   <li>"voeg moderne CSS styling toe met gradient achtergronden en hover effecten"</li>
                   <li>"de JavaScript functie geeft een error omdat de variabele undefined is"</li>
                   <li>"maak een modern design met donkere modus, orange accenten en smooth animaties"</li>
                 </ul>
               </div>
             </div>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔄 Iteratieve Prompting</h4>
          <p>De beste resultaten krijg je door prompts te verfijnen:</p>
          <div class="example-box">
            <strong>Iteratief Proces:</strong>
            <ol>
              <li><strong>Eerste Prompt:</strong> "Maak een contact formulier"</li>
              <li><strong>Verfijning:</strong> "Voeg validatie toe aan het formulier"</li>
              <li><strong>Verfijning:</strong> "Maak de validatie real-time met error messages"</li>
              <li><strong>Verfijning:</strong> "Voeg styling toe aan de error messages"</li>
              <li><strong>Verfijning:</strong> "Maak het responsive voor mobile"</li>
            </ol>
            <p><strong>Voordelen van Iteratieve Prompting:</strong></p>
            <ul>
              <li>Beter begrip van wat je wilt</li>
              <li>Meer controle over het resultaat</li>
              <li>Leren van elke iteratie</li>
              <li>Betere code kwaliteit</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>💡 Prompt Technieken</h4>
          <p>Verschillende technieken voor verschillende doelen:</p>
          <div class="example-box">
            <strong>Prompt Technieken:</strong>
            <ul>
              <li><strong>🎭 Role Playing:</strong> "Handel als een senior React developer"</li>
              <li><strong>📋 Step-by-Step:</strong> "Geef me een stap-voor-stap uitleg"</li>
              <li><strong>🔍 Analysis:</strong> "Analyseer deze code en leg uit wat er gebeurt"</li>
              <li><strong>🐛 Debugging:</strong> "Vind de bug in deze code en leg uit hoe je het oplost"</li>
              <li><strong>📚 Teaching:</strong> "Leer me hoe deze technologie werkt"</li>
              <li><strong>🔧 Optimization:</strong> "Optimaliseer deze code voor performance"</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎯 Prompt Best Practices</h4>
          <p>Volg deze best practices voor consistente resultaten:</p>
          <div class="example-box">
            <strong>Best Practices:</strong>
            <ul>
              <li><strong>✅ Wees Specifiek:</strong> Geef concrete details en requirements</li>
              <li><strong>✅ Geef Context:</strong> Leg uit wat je probeert te bereiken</li>
              <li><strong>✅ Specificeer Output:</strong> Vertel hoe je het resultaat wilt</li>
              <li><strong>✅ Gebruik Voorbeelden:</strong> "Zoals in dit voorbeeld..."</li>
              <li><strong>✅ Vraag om Uitleg:</strong> "Kun je uitleggen hoe dit werkt?"</li>
              <li><strong>✅ Iterate:</strong> Verfijn prompts op basis van resultaten</li>
              <li><strong>✅ Test en Valideer:</strong> Controleer of output correct is</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🚫 Prompt Anti-Patterns</h4>
          <p>Vermijd deze veelvoorkomende fouten:</p>
          <div class="example-box">
            <strong>Anti-Patterns om te Vermijden:</strong>
            <ul>
              <li><strong>❌ Te Vaag:</strong> "maak iets" of "doe dit"</li>
              <li><strong>❌ Geen Context:</strong> Verwacht niet dat AI je project kent</li>
              <li><strong>❌ Te Complex:</strong> Eén prompt voor alles</li>
              <li><strong>❌ Geen Feedback:</strong> Accepteer niet blindelings output</li>
              <li><strong>❌ Geen Iteratie:</strong> Verwacht perfecte resultaten in één keer</li>
              <li><strong>❌ Geen Validatie:</strong> Test output niet</li>
            </ul>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🎯 Praktische Oefeningen</h4>
          <p>Laten we enkele praktische oefeningen doen:</p>
          <div class="example-box">
            <strong>Oefening 1: Component Maken</strong>
            <p><strong>Slechte Prompt:</strong> "maak een component"</p>
            <p><strong>Goede Prompt:</strong> "Maak een React component voor een user profile card. Het moet de user's naam, email, avatar en een follow button tonen. Gebruik moderne CSS styling met hover effecten. Voeg ook PropTypes toe voor type checking."</p>
            
            <strong>Oefening 2: Bug Oplossen</strong>
            <p><strong>Slechte Prompt:</strong> "fix this"</p>
            <p><strong>Goede Prompt:</strong> "Deze JavaScript functie geeft een 'Cannot read property of undefined' error. Kun je de code analyseren, de bug identificeren en een oplossing geven met uitleg?"</p>
            
            <strong>Oefening 3: Styling Toevoegen</strong>
            <p><strong>Slechte Prompt:</strong> "maak het mooi"</p>
            <p><strong>Goede Prompt:</strong> "Voeg moderne CSS styling toe aan deze HTML pagina. Gebruik een donkere modus met orange accenten (#E33412), smooth transitions, en een responsive design. Maak het er professioneel uit zien voor een portfolio website."</p>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🔧 Prompt Templates</h4>
          <p>Gebruik deze templates als startpunt:</p>
          <div class="example-box">
            <strong>Code Generatie Template:</strong>
            <pre><code>Context: [Beschrijf je project en skill level]
Taak: [Specifieke taak die je wilt uitvoeren]
Technologie: [Welke technologieën gebruik je]
Constraints: [Beperkingen of vereisten]
Output: [Hoe wil je het resultaat]
Follow-up: [Extra vragen of verfijningen]</code></pre>
            
            <strong>Debugging Template:</strong>
            <pre><code>Ik heb een probleem met deze code:
[Plak de problematische code]

De error die ik krijg is:
[Beschrijf de error]

Wat ik probeer te bereiken:
[Beschrijf je doel]

Kun je me helpen dit op te lossen?</code></pre>
            
            <strong>Learning Template:</strong>
            <pre><code>Ik ben een beginner en wil leren over [onderwerp].
Kun je me uitleggen:
1. Wat het is
2. Waarom het belangrijk is
3. Hoe het werkt
4. Een praktisch voorbeeld
5. Best practices</code></pre>
          </div>
        </div>

        <div class="lesson-section">
          <h4>🚨 Troubleshooting Prompts</h4>
          <p>Wat te doen als prompts niet werken:</p>
          <div class="example-box">
            <strong>Probleem: AI begrijpt niet wat je wilt</strong>
            <p><strong>Oplossing:</strong> Geef meer context en specificeer je requirements</p>
            
            <strong>Probleem: Output is niet wat je verwachtte</strong>
            <p><strong>Oplossing:</strong> Verfijn je prompt met meer details en voorbeelden</p>
            
            <strong>Probleem: AI geeft te veel informatie</strong>
            <p><strong>Oplossing:</strong> Specificeer wat je precies wilt: "Geef alleen de code" of "Geef een korte uitleg"</p>
            
            <strong>Probleem: AI geeft te weinig informatie</strong>
            <p><strong>Oplossing:</strong> Vraag om meer details: "Kun je dit stap voor stap uitleggen?"</p>
          </div>
        </div>

        <div class="key-takeaway">
          <h4>🎯 Wat je nu kunt</h4>
          <p>Na deze les kun je:</p>
          <ul>
            <li>Effectieve prompts schrijven met duidelijke structuur</li>
            <li>Context toevoegen voor betere AI resultaten</li>
            <li>Specifieke en gedetailleerde instructies geven</li>
            <li>Iteratief prompts verfijnen</li>
            <li>Verschillende prompt technieken toepassen</li>
            <li>Best practices volgen en anti-patterns vermijden</li>
            <li>Prompt templates gebruiken</li>
            <li>Prompt problemen oplossen</li>
          </ul>
        </div>
      `,
      quiz: {
        question: "Wat is het belangrijkste element van een effectieve prompt?",
        options: ["Korte instructies", "Specificiteit en context", "Engelse taal", "Technische termen"],
        correct: 1
      }
    }
  }
}

export default function LessonPage() {
  const router = useRouter()
  const params = useParams()
  const moduleId = params.id
  const lessonId = params.lessonId
  const locale = params.locale as string
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null)
  const [quizResult, setQuizResult] = useState<boolean | null>(null)
  const [moduleProgress, setModuleProgress] = useState(() => {
    // Load progress from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`module-${moduleId}-progress`)
      return saved ? JSON.parse(saved) : { correct: 0, total: 0, completedLessons: [] }
    }
    return { correct: 0, total: 0, completedLessons: [] }
  })

  // Check if module is available
  if (moduleId !== '1' && moduleId !== '2' && moduleId !== '3' && moduleId !== '4' && moduleId !== '5' && moduleId !== '6' && moduleId !== '7' && moduleId !== '8') {
    return (
      <div className="locked-container">
        <div className="locked-content">
          <div className="locked-icon">🔒</div>
          <h2>Module Vergrendeld</h2>
          <div className="locked-description">
            Deze module is nog niet beschikbaar. Voltooi eerst de voorgaande modules.
          </div>
        </div>
      </div>
    )
  }

  const lesson = moduleLessons[moduleId]?.[lessonId as string]

  if (!lesson) {
    return (
      <div className="locked-container">
        <div className="locked-content">
          <div className="locked-icon">🔒</div>
          <h2>Les Niet Gevonden</h2>
          <div className="locked-description">
            Deze les bestaat niet of is nog niet beschikbaar.
          </div>
        </div>
      </div>
    )
  }

  const handleQuizAnswer = (selectedAnswer: number) => {
    if (quizResult !== null) return // Prevent multiple answers
    
    setQuizAnswer(selectedAnswer)
    const isCorrect = selectedAnswer === lesson.quiz.correct
    setQuizResult(isCorrect)
    
    // Update module progress
    const newProgress = {
      ...moduleProgress,
      total: moduleProgress.total + 1,
      correct: moduleProgress.correct + (isCorrect ? 1 : 0),
      completedLessons: moduleProgress.completedLessons.includes(Number(lessonId)) 
        ? moduleProgress.completedLessons 
        : [...moduleProgress.completedLessons, Number(lessonId)]
    }
    
    setModuleProgress(newProgress)
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(`module-${moduleId}-progress`, JSON.stringify(newProgress))
    }
  }

  const getModuleScore = () => {
    if (moduleProgress.total === 0) return 0
    return Math.round((moduleProgress.correct / moduleProgress.total) * 100)
  }

  return (
    <div className="lesson-content">
      <div className="lesson-header">
        <button 
          className="back-button"
          onClick={() => router.push(`/${locale}/dashboard/modules/${moduleId}`)}
        >
          ← Terug naar Module {moduleId}
        </button>
        <h2 className="lesson-title">{lesson.title}</h2>
        <div className="lesson-meta">
          <span className="lesson-duration">⏱️ {lesson.duration}</span>
          <span className="lesson-progress">Les {lessonId} van 5</span>
          <span className="module-score">📊 Module Score: {getModuleScore()}% ({moduleProgress.correct}/{moduleProgress.total})</span>
        </div>
        <div className="lesson-progress-bar">
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${(Number(lessonId) / 5) * 100}%`}}></div>
          </div>
        </div>
      </div>

      <div className="lesson-objectives">
        <h3>🎯 Leerdoelen</h3>
        <ul>
          {lesson.objectives.map((objective: string, index: number) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </div>

      <div className="lesson-body">
        <div 
          className="lesson-text"
          dangerouslySetInnerHTML={{ __html: lesson.content }}
        />
      </div>

      {/* Quiz Section */}
      <div className="lesson-quiz">
        <h3>🧠 Kennis Check</h3>
        <p>Test je kennis met deze vraag:</p>
        
        <div className="quiz-question">
          <h4>{lesson.quiz.question}</h4>
          <div className="quiz-options">
            {lesson.quiz.options.map((option: string, index: number) => (
              <button
                key={index}
                className={`quiz-option ${quizAnswer === index ? 'selected' : ''} ${quizResult !== null ? (index === lesson.quiz.correct ? 'correct' : quizAnswer === index ? 'incorrect' : '') : ''}`}
                onClick={() => handleQuizAnswer(index)}
                disabled={quizResult !== null}
              >
                {option}
              </button>
            ))}
          </div>
          
          {quizResult !== null && (
            <div className={`quiz-result ${quizResult ? 'correct' : 'incorrect'}`}>
              <h4>{quizResult ? '✅ Correct!' : '❌ Niet helemaal juist'}</h4>
              <p>
                {quizResult 
                  ? 'Goed gedaan! Je hebt de les goed begrepen.' 
                  : `Het juiste antwoord is: "${lesson.quiz.options[lesson.quiz.correct]}"`
                }
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="lesson-navigation">
        {Number(lessonId) > 1 && (
          <button 
            className="btn-secondary"
            onClick={() => router.push(`/${locale}/dashboard/modules/${moduleId}/lessons/${Number(lessonId) - 1}`)}
          >
            ← Vorige Les
          </button>
        )}
        
        {Number(lessonId) < 5 ? (
          <button 
            className="btn-primary"
            onClick={() => router.push(`/${locale}/dashboard/modules/${moduleId}/lessons/${Number(lessonId) + 1}`)}
          >
            Volgende Les →
          </button>
        ) : (
          <button 
            className="btn-primary"
            onClick={() => router.push(`/${locale}/dashboard/modules/${moduleId}`)}
          >
            Module Afronden
          </button>
        )}
      </div>
    </div>
  )
} 
> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# 🦖The web is for everyone!
<img width="1438" alt="Schermafbeelding 2022-04-07 om 19 53 46" src="https://user-images.githubusercontent.com/90189750/162266356-3fdc4fc9-9271-477a-bdb5-f18c96a47f44.png">


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## 📘Beschrijving
Veel sites worden op de client gerenderd, maar wat als Javascript het niet meer doet? doet je website het dan nogsteeds of niet? 
Voor deze opdracht was het van belang dat we server side gaan renderen. Dit word gedaan met Node.js. De afbeelding die je aan het begin ziet is afkomstig van de overzichtspagina van Chippr. De projecten die hier worden weergeven zijn afkomstig vanuit een API en de detailpage die hieraan gelinkt is ook. Deze 2 pagina worden server side gerenderd door middel van Node.js, EJS en express.
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## 💡Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
De volgende kenmerken heb ik gebruikt om deze pagina tot stand te brengen met een voorbeeld voor extra toevoeging:

### Node
### Express
```

const app = express()
const port = 3000
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))


//serve public files n
app.use(express.static('public'))

// hook up template engine 
app.set('view engine', 'ejs')
app.set('views', './views')

   
//fetch api project data//
app.get('/', (req, res) => {
    fetchJson("https://chipr.api.fdnd.nl/v1/project").then(function (jsonData) {
        res.render('index', {
          title: 'Dit is de chippr api',
          projects: jsonData.data,
        })
      })
    })

    // get detail page id//

    app.get("/:id", (req, res) => {
        fetchJson(`https://chipr.api.fdnd.nl/v1/project/${req.params.id}`).then(
          function (jsonData) {
            res.render("detail", {
              project: jsonData.data[0],
            });
          }
        );
      });
```
Dit is een voorbeeld van code die in express die ik heb gebruikt om deze opdracht te realiseren.

### EJS
```
 <ul class="customers-cards-wrapper">
            <div class="customers-cards-wrapper-sticky">
                <% projects.forEach(project => { %>
                    <li>
                      <% project.name %>
                      <img src="<%= project.logo %>"/>
                      <p><%= project.short_description %></p>
                      <a href="/<%- project.id %>">Bekijk project</a>
                    </li>
                <% }) %>
            </div>
        </ul>
    </section>
```
Dit stukje code komt uit de index.ejs bestand. Hierin laat ik de propjecten zien van Chippr die afkomstif zijn uit de API. Wanneer je op "bekijk project" klikt dan zal je doorgestuurd worden naar de detailpage.

## 💻Installatie

## ✔️Gebruik

## 📃Bronnen
   
## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).

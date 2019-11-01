# Musea Wereld Culturen
Musea wereldculturen bestaat uit het Volkenkundemuseum Leiden, Afrika Museum in Berg en Dal en het Wereldmuseum in Rotterdam.
De museums hebben een koloniaal verleden. Er zijn 500.000 voorwerpen en 1000.000 foto's en documenten op voorraad. Aan ons de uitdaging het koloniaal verhaal te vertellen aan een specifieke doelgroep uit onze samenleving. Dit doen we aan de hand van de website en te werken met de database.

<img width="800" alt="Tropenmuseum" src="https://user-images.githubusercontent.com/43657951/67070047-47d82900-f17f-11e9-8362-e461a3f5b3e2.jpg">

_Afbeelding: Tropenmuseum. Bron: Tropenmuseum.nl_

## Het Concept
Deze app is een spel waarbij kinderen spelenderwijs kennis maken met verschillende culturen over de Wereld. Er kan gekozen worden voor een werelddeel op de kaart. Er worden verchillende afbeeldingen getoond van culturen. De gebruiker moet raden welke afbeelding bij dit werelddeel hoort. Wanneer 5 keer een goed antwoord gegeven is heeft de gebruiker het werelddeel ontdekt en kan door naar een volgend werelddeel. Het spel is klaar wanneer alle werelddelen ontdekt zijn. 

### Afbeelding 1. Kies een werelddeel
<img width="700" alt="applicatie1" src="https://user-images.githubusercontent.com/43657951/67805641-a069c900-fa91-11e9-837b-8aa2e610ff14.png">

### Afbeelding 2. Raad de juiste afbeelding bij het werelddeel
<img width="700" alt="applicatie1" src="https://user-images.githubusercontent.com/43657951/67805164-c2af1700-fa90-11e9-88b3-fcbc576b1be8.png">


## Feature 
De Feature is het spel waarbij het doel is de hele wereld te ontdekken. Per werelddeel worden vragen gesteld. Wanneer de gebruiker 5 keer een goed antwoord heeft gegeven bij een land, is het land ontdekt en kan de gebruiker naar het volgende land reizen.

## Onderzoek
Bekijk hoe ik op dit idee gekomen ben en zie het onderzoek in de [Wiki](https://github.com/marissaverdonck/BlokTech_DatingApp/wiki)

## Installatie
1. Open de terminal

2. Navigeer in de CLI naar de map waar de applicatie geinstaleerd kan worden

3. Type <br/>
```
Git clone https://github.com/marissaverdonck/frontend-applications.git
```

4. Installeer Angular<br/>
```
npm install -g @angular/cli
```

5. Installeer de dependecies<br/>
```
npm install
```

## Gebruik
Om de applicatie te openen, ga in de CLI naar de map van de applicatie en typ
```
ng serve --open
```
Open de browser en navigeer naar `http://localhost:4200/`
De website wordt geopend.

## Angular
Om componenten aan te maken gebruik: `ng generate component component-name`
Kijk voor meer informatie op [Angular](https://angular.io/tutorial/toh-pt0)

## Database structuur
Data wordt opgehaald uit de [collectie wereldculturen](https://collectie.wereldculturen.nl). De Data is opgebouwd als een thesaurus. Via SPARQL kan data worden opgevraagd. Ik zoek eerst naar locatie per werelddeel en daarna op categorie en type. 

<img width="500" alt="Database NMVW collectie" src="https://user-images.githubusercontent.com/43657951/66906874-b0e96080-f008-11e9-949b-32b8e92b61a4.png">
<img width="800" alt="Schermafbeelding 2019-10-18 om 08 08 58" src="https://user-images.githubusercontent.com/43657951/67069849-b7014d80-f17e-11e9-9ac1-4ddb59a5cae7.png">

## License
[MIT License](https://github.com/marissaverdonck/frontend-applications/blob/master/license)




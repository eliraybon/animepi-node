# AnimePI

A Node.js helper library for [AnimePI](https://github.com/eliraybon/animepi)

## Installation

`npm install animepi`

## Getting Started 

Setup is simple. Just require ```animepi``` and start making queries.

```js
const Anime = require('animepi');

Anime.findById(7)
  .then(anime => console.log(anime));

Anime.find({ title: 'Terror in Resonance', year: 2014 })
  .then(res => console.log(res.results))
```

## Methods

```animepi``` has 2 simple methods to fetch data. 

The first is ```findById``` which accepts an anime id and returns the data for that anime. 

The second method is the ```find``` method, which accepts an object of search parameters. Here's the list of searchable params: ```title```, ```description```, ```year```, ```studio```, ```episodes```, ```genre```.

Say we wanted to find all anime by the animation studio Madhouse. We could search for studio like this: 

```js 
Anime.find({ studio: 'madhouse' })
```

Note: String params aren't case sensitive and can be matched even if the entire string isn't provided. ```Madhouse``` or ```mad``` would have also worked. 

If we wanted to narrow our search to anime by Madhouse from the year 2011, we could add another search param:

```js 
Anime.find({ studio: 'madhouse', year: 2011 })
```

If we wanted to sort the data by title in descending order, we could add the ```order``` and ```desc``` params: 

```js 
Anime.find({ studio: 'madhouse', year: 2011, order: 'title', desc: true })
```

The find method returns a JavaScript object with several values, including the number of results, the previous and next page, and the actual results of the search. If you wanted to get straight to the results and print them to the console, you could do something like this: 

```js
Anime.find({ studio: 'madhouse' })
  .then(res => console.log(res.results));
```

Results are limited to 25 per page. You can access other pages with the ```page``` param: 

```js
Anime.find({ studio: 'madhouse', page: 3 })
```




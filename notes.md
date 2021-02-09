# Code Review II

## Retro

#### Roses 
* Lots of good progress today, rendering articles (Heather)
* Firebase auth was enjoyable to implement (Ruchi)
* Learning new tech, Firebase, Cloud + PouchDB (Linh)

#### Thorns
* Lots of pivots, technology roulette, feature creep, "stack creep" (Heather)
* Firebase functions were a time-suck, lots of starts and stops (Ruchi)
* Lots of time spent on different approaches, ensuring sync, stack creep (Linh)
* Git thorns (x4)


## MVP Overview
* Remove Auth
* Need to link to single articles
* Chrome Plugin?
* Remove Redux/Console logs from deployed
* DO we have dangerouslySetHTML for Article component?

```javascript

const Article = props => <div dangerouslySetHTML = { {_html: props.content }}></div>

```

* For route,   `req.params` is acceptable way to pass URL
    * Urls shouldn't generally have spaces, or other non-alphanumeric characters

## Product Roadmap (Priority)

* Article List component
* Chrome Plugin (Heroku Pending)
* CSS/UX for demo
    * Responsive
    * Intuitive (Toast Notifaction)
    * Enjoyable
* Deploy

### Secondary Features
* Auth, multi-user
* Firebase for offline
* Mobile-friendly (PWA, ServiceWorker, Web Plugin, etc)


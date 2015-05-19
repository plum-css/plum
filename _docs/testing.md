---
layout: page
title: Testing
navigation: false
---

[CasperJS](http://casperjs.org/) / [PhantomCSS](https://github.com/Huddle/PhantomCSS) compatible visual regression tests are used to test your applications [layouts](layouts.html), [modules](modules.html), [units](units.html), and [pages](pages.html) UI.

## How does it work?

Visual regression tests are run against your [layouts](layouts.html), [modules](modules.html), [units](units.html), and [pages](pages.html) by loading a fixture, taking a screenshot and comparing it against a saved baseline screenshot.

<p data-height="380" data-theme-id="12653" data-slug-hash="LVZoWB" data-default-tab="js" data-user="jasonbellamy" class='codepen'>See the Pen <a href='http://codepen.io/jasonbellamy/pen/LVZoWB/'> by Jason Bellamy (<a href='http://codepen.io/jasonbellamy'>@jasonbellamy</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## How do I structure their files & folders?

Tests, baselines, and [fixtures](http://en.wikipedia.org/wiki/Test_fixture#Software) should be placed inside of the `tests` directory located at the root of each specific [layout](layouts.html#how-do-i-document-them?), [module](modules.html#how-do-i-document-them?), [unit](units.html#how-do-i-document-them?) and [page](pages.html#how-do-i-document-them?) folder.

```text
units
└── unit
    ├── _unit.scss
    └── tests
        ├── baselines
        │   └── unit.png
        ├── fixtures
        │   └── unit.hbs
        └── unit.js
```

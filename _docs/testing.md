---
layout: page
title: Testing
navigation: false
---

[CasperJS](http://casperjs.org/) / [PhantomCSS](https://github.com/Huddle/PhantomCSS) compatible visual regression tests are used to test your applications [layouts](layouts.html), [modules](modules.html), [units](units.html), and [pages](pages.html).

<p data-height="380" data-theme-id="12653" data-slug-hash="LVZoWB" data-default-tab="js" data-user="jasonbellamy" class='codepen'>See the Pen <a href='http://codepen.io/jasonbellamy/pen/LVZoWB/'> by Jason Bellamy (<a href='http://codepen.io/jasonbellamy'>@jasonbellamy</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## How does it work?
 
Visual regression tests are run against your [layouts](layouts.html), [modules](modules.html), [units](units.html), and [pages](pages.html) by loading a fixture, taking a screenshot and comparing it against a saved baseline screenshot.

## How do I write them?

A test file similar to the one above is automatically created for you in the `tests/` directory when using the [generator-plum](https://github.com/plum-css/generator-plum) scaffolding tool.

### Notes

- You have full access inside of your tests to all of the methods [CasperJS](http://casperjs.org/) & [PhantomCSS](https://github.com/Huddle/PhantomCSS) provide.

## How do I run them?
 
Tests can be run by using one of the following tools:

- [plum-test](https://github.com/plum-css/plum-test) - Build and run visual regression tests against plum stylesheets.
- [grunt-plum-test](https://github.com/plum-css/grunt-plum) - [Grunt](http://gruntjs.com) plugin wrapper for [plum-test](https://github.com/plum-css/plum-test).

## How do I structure their files & folders?

Tests, baselines, and [fixtures](http://en.wikipedia.org/wiki/Test_fixture#Software) should be placed inside of the `tests/` directory located at the root of each specific [layout](layouts.html), [module](modules.html), [unit](units.html) and [page](pages.html) folder.

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

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


## How do I run them?

Tests can be setup and run by executing the following commands after installing and configuring the [grunt-plum](https://github.com/plum-css/grunt-plum) task runner:

```bash
# run all visual regression tests.
grunt plum:test

# run only the units visual regression tests.
grunt plum:test --tests=units

# run only the footer units visual regression tests.
grunt plum:test --tests=units/footer
```

### Notes

- A baseline screenshot will be created in `tests/baselines` each time you run the [grunt-plum](https://github.com/plum-css/grunt-plum) task runner if one does not already exist.

## How do I structure their files & folders?

Tests, baselines, and [fixtures](http://en.wikipedia.org/wiki/Test_fixture#Software) should be placed inside of the `tests` directory located at the root of each specific [layout](layouts.html), [module](modules.html), [unit](units.html) and [page](pages.html) folder.

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

---
layout: page
title: Documentation
navigation: false
---

Documentation and [fixtures](http://en.wikipedia.org/wiki/Test_fixture#Software) are used to create a [living styleguide](https://github.com/kss-node/kss/blob/spec/SPEC.md#style-guide) to help develop and test your application.

<p data-height="500" data-theme-id="12653" data-slug-hash="MYXBZM" data-default-tab="css" data-user="jasonbellamy" class='codepen'>See the Pen <a href='http://codepen.io/jasonbellamy/pen/MYXBZM/'>Module Example</a> by Jason Bellamy (<a href='http://codepen.io/jasonbellamy'>@jasonbellamy</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## How does it work?

Documentation is created by prepending a [name](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [description](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [category](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-styleguide-reference), and a [fixture reference](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-markup) before your classes
and by creating a [fixture](http://en.wikipedia.org/wiki/Test_fixture#Software) that shows how your classes should be used.

## How do I structure their files & folders?

[Fixtures](http://en.wikipedia.org/wiki/Test_fixture#Software) should be placed inside of the `tests/fixtures` directory located at the root of each specific [layout](layouts.html#how-do-i-document-them?), [module](modules.html#how-do-i-document-them?), [unit](units.html#how-do-i-document-them?) and [page](pages.html#how-do-i-document-them?) folder.

```text
units
└── unit
    ├── _index.scss
    └── tests
        ├── baselines
        │   └── unit.png
        ├── fixtures
        │   └── unit.hbs
        └── unit.js
```

## Notes

- All [helpers](helpers.html#how-do-i-document-them?), [layouts](layouts.html#how-do-i-document-them?), [modules](modules.html#how-do-i-document-them?), [units](units.html#how-do-i-document-them?) and [page](pages.html#how-do-i-document-them?) **must** be documented using the [kss-node spec](https://github.com/kss-node/kss/blob/spec/SPEC.md).

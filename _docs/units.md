---
layout: page
title: Units
navigation: true
---

Units are finalized pieces of your applications UI that are built out of custom styles and on top of [modules](modules.html).

{% mermaid %}
graph LR;
    classDef default fill:#eaeaea,stroke:#666,stroke-width:2px;
    classDef active fill:#fff,stroke:#666,stroke-width:2px;
    CONFIG(Configs);
    CORE(Core);
    VENDORS(Vendors);
    MODULES(Modules);
    LAYOUTS(Layouts);
    UNITS(Units);
    PAGES(Pages);
    HELPERS(Helpers);
    HOTFIXES(Hotfixes);
    EXPORTS(Exports);
    CONFIG-->CORE;
    HELPERS-->CORE;
    CORE-->VENDORS;
    VENDORS---LAYOUTS;
    VENDORS---MODULES;
    MODULES---UNITS;
    LAYOUTS---UNITS;
    UNITS-->PAGES;
    PAGES-->HOTFIXES;
    HOTFIXES-->EXPORTS;
    class UNITS active;
{% endmermaid %}

<p data-height="500" data-theme-id="12653" data-slug-hash="zxQQda" data-default-tab="html" data-user="jasonbellamy" class='codepen'>See the Pen <a href='http://codepen.io/jasonbellamy/pen/zxQQda/'>Footer Unit example (Step 2)</a> by Jason Bellamy (<a href='http://codepen.io/jasonbellamy'>@jasonbellamy</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## How do they work?

Units can directly affect **all** the properties of an element and are built by creating [classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) under a chosen namespace and by extending and subclassing existing [modules](modules.html).

- `.unit`        - chosen define the default classes and interface for a unit.
- `.unit-child`  - define the child classes of a unit.
- `.unit-module` - extend and subclass an existing [module](modules.html) for use in a unit.

## How do I document them?

Units should be [documented](documentation.html) with a [name](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [description](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [fixture reference](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-markup), and [category](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-styleguide-reference).

## How do I test them?

Visual regression tests for units can be created, setup, and run by following the [documentation located here](testing.html).

## How do I structure their files & folders?

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

## Generator

You can automatically create and `@import` a unit file  with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:unit <name>`

---
layout: page
title: Helpers
navigation: true
---

Helpers are custom mixins and functions that help ease the development of your application.

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
    class HELPERS active;
{% endmermaid %}

<p data-height="330" data-theme-id="12653" data-slug-hash="wavKrG" data-default-tab="css" data-user="jasonbellamy" class='codepen'>See the Pen <a href='http://codepen.io/jasonbellamy/pen/wavKrG/'>Helper Example</a> by Jason Bellamy (<a href='http://codepen.io/jasonbellamy'>@jasonbellamy</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## How do I document them?

Helpers should be [documented](documentation.html) with a [name](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [description](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), and [category](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-styleguide-reference).

## How do I structure their files & folders?

```text
helpers
├── functions
│   └── _functions.scss
└── mixins
    ├── _animations.scss
    ├── _gradients.scss
    └── _transforms.scss
```

## Generator

You can automatically create and `@import` helper files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following commands:

- `yo plum:function <name>`  
- `yo plum:mixin <name>`

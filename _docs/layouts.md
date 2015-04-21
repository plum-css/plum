---
layout: page
title: Layouts
navigation: true
---

Layouts provide a top-level structure and/or grid for your applications [modules](modules.html) and [units](units.html).

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
    class LAYOUTS active;
{% endmermaid %}

## How do they work?

Layouts should only contain properties that affect the positioning and structure of an element and its [direct children](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors) and are built by creating parent/child/modifier [classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) under a namespace.

- `.l-layout`
- `.l-layout-child`
- `.l-layout-m-*`

<p data-height="500" data-theme-id="12653" data-slug-hash="emwdpm" data-default-tab="html" data-user="jasonbellamy" class='codepen'>See the Pen <a href='http://codepen.io/jasonbellamy/pen/MYXBZM/'>Module Example</a> by Jason Bellamy (<a href='http://codepen.io/jasonbellamy'>@jasonbellamy</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Notes

- Layouts should only affect the position of the base layout class and its [direct children](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors), **never** the content inside of them.

## How do I document them?

Layouts should be [documented](documentation.html) with a [name](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [description](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [template reference](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-markup), and [category](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-styleguide-reference).

## How do I structure their files & folders?

```text
layouts
└── layout
    ├── _layout.scss
    └── templates
        └── layout.hbs
```

## Generator

You can automatically create and `@import` a layout file with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:layout <name>`

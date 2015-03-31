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

## How do they work?

Units are created using **only** [class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) and can directly affect **all** the properties of an element.

## How do I use them?

Units are built by creating classes under the units namespace and by extending and subclassing [module](modules.html) classes:

- `.unit`
- `.unit-child`
- `.unit-module`
- `.unit-module-child`

## How do I document them?

Units should be [documented](documentation.html) with a [name](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [description](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [template reference](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-markup), and [category](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-styleguide-reference).

```scss
// Name
// Description of unit.
// Markup: templates/example.hbs
// Styleguide units.name
.unit { }
```

## How do I structure their files & folders?

```text
units
└── unit
    ├── _unit.scss
    └── templates
        └── example.hbs
```


## Generator

You can automatically create and `@import` a unit file  with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:unit <name>`

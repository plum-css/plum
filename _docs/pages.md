---
layout: page
title: Pages
navigation: true
---

Pages are templates built out of [modules](modules.html) and [units](units.html) that also contain **non-reusable** styles specific to this page.

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
    class PAGES active;
{% endmermaid %}

## How do they work?

Pages are created using **only** [class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) and can directly affect all the properties of an element.

## How do I use them?

Pages are built by creating classes under a chosen namespace and by extending and subclassing [module](modules.html) and/or [unit](units.html) classes:

 - `.page`        - define the default classes for a page.
 - `.page-child`  - define the child classes for a page.
 - `.page-unit`   - extend and subclass an existing [unit](units.html) for use in a page.
 - `.page-module` - extend and subclass an existing [module](modules.html) for use in a page.

## How do I document them?

Pages should be [documented](documentation.html) with a [name](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [description](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [fixture reference](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-markup), and [category](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-styleguide-reference).

## How do I test them?

Visual regression tests for pages can be created, setup, and run by following the [documentation located here](testing.html).

## How do I structure their files & folders?

```text
pages
└── page
    ├── _index.scss
    └── tests
        ├── baselines
        │   └── page.png
        ├── fixtures
        │   └── page.hbs
        └── page.js
```

## Generator

You can automatically create and `@import` a page file with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:page <name>`

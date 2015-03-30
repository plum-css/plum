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

Layout classes should only contain properties that affect the positioning and structure of an element and its [direct children](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors).

## How do I use them?

Layout classes are applied by appending `.l-*` to an element and `.l-*-*` to one of its [direct children](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors).

## How do I structure their files & folders?

```text
layouts
└── grid/_grid.scss
```

## Notes

- Layout classes should only affect the position of base layout class and its [direct children](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors), **never** the content inside of them.

## Generator

You can automatically create and `@import` a layout file with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:layout <name>`

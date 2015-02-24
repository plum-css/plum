---
layout: page
title: Layouts
navigation: true
---

Layouts provide a top-level structure for your site and are defined on a global and/or by-page basis.

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

Layout classes can contain any properties that affect the positioning and structure of an element.

## How do I use them?

Layouts are applied by adding a root class to an element: `.l-*` and modified by appending modifier classes:  `.l-*-m-*`.

## How do I structure their files & folders?

```text
layouts
└── _global.scss
```

## Example

```scss
.l-global {
  width: 100%;
}

.l-global-1 {
  display: block;
  width: 100;
}

.l-global-2 {
  float: left;
  width: 80%;
}

.l-global-3 {
  float: right;
  width: 20%;
}

.l-global-4 {
  display: block;
  width: 100%;
}

.l-global-m-flipped .l-global-2 {
  float: right;
}

.l-global-m-flipped .l-global-3 {
  float: left;
}
```

## Generator

You can automatically create and `@import` a layout file with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:layout <name>`

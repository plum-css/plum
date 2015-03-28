---
layout: page
title: Core
navigation: true
---

Core files contain styles and resets that will be shared across your entire application.

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
    class CORE active;
{% endmermaid %}

## How do they work?

Core styles are created with [universal](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors) and [type](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) selectors and can directly affect any properties of an element.

## How do I structure the files & folders?

```text
core
└── _base.scss
```

## Generator

You can automatically create and `@import` core files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:core <name>`

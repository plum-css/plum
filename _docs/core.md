---
layout: page
title: Core
navigation: true
---

The core should contain only [universal](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors) and [type](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) selectors and resets that will be shared across your entire application.

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

## How do I develop them?

Your core should consist of and be broken down into the following sections:

1. [Base](core-base.html)
2. [Reset](core-reset.html)

## How do I structure the files & folders?

```text
core
├── _base.scss
└── _reset.scss
```

## Generator

You can automatically create and `@import` core files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:core <name>`

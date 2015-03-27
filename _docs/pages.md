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

Page classes can directly affect all the properties of an element.

## How do I use them?

Pages are built by creating classes under the pages namespace and by extending and subclassing [module](modules.html) and/or [unit](units.html) classes:

 - `.page`
 - `.page-child`
 - `.page-unit`
 - `.page-unit-child`
 - `.page-unit-module`
 - `.page-unit-module-child`
 - `.page-module`
 - `.page-module-child`

## How do I structure their files & folders?

```text
pages
└── _page-name.scss
```

## Generator

You can automatically create and `@import` a page file with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:page <name>`

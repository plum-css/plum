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

- A pages root and child classes can directly affect **all** the properties of an element.
- A pages layout classes should follow the same rules as [global layouts](layouts.html).

## How do I use them?

A units classes can be applied by appending the following classes to any element:

 - `.page-*`
 - `.page-child-*`
 - `.page-l-*`

and by extending & subclassing any existing [modules](modules.html) and [units](units.html) classes:

 - `.page-module-*`
 - `.page-module-child-*`
 - `.page-unit-module-*`
 - `.page-unit-module-child-*`

## How do I structure their files & folders?

```text
pages
└── _page-name.scss
```

## Generator

You can automatically create and `@import` a page file with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:page <name>`

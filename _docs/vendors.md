---
layout: page
title: Vendors
navigation: true
---

Vendor files are external dependencies where you don't explicitly control the creationg of markup or css classes.

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
    class VENDORS active;
{% endmermaid %}

## How do I structure their files & folders?

```text
vendors
├── _some-third-party-plugin.scss
└── _styles-for-cms.scss
```

## Generator

You can automatically create and `@import` a vendor file  with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:vendor <name>`

---
layout: page
title: Helpers
navigation: true
---

Helpers are custom mixins and functions that help ease the development of your application.

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
    class HELPERS active;
{% endmermaid %}

## How do I structure their files & folders?

```text
helpers
├── functions
│   └── _functions.scss
└── mixins
    ├── _animations.scss
    ├── _gradients.scss
    └── _transforms.scss
```

## Generator

You can automatically create and `@import` helper files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following commands:

- `yo plum:function <name>`  
- `yo plum:mixin <name>`

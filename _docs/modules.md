---
layout: page
title: Modules
navigation: true
---

Modules are flexible and reusable components that are used as the foundation for your application's UI.

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
    class MODULES active;
{% endmermaid %}

## How do I develop them?

Your modules should consist of and be broken down into the following sections:

1. [Base](modules-base.html)
2. [Modifier](modules-modifier.html)
3. [State](modules-state.html)
4. [Theme](modules-theme.html)
5. [Layout](modules-layout.html)

## How do I structure their files & folders?

```text
modules
├── module-one
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _modifier.scss
│   ├── _state.scss
│   └── _theme.scss
└── module-two
    ├── _base.scss
    ├── _layout.scss
    ├── _modifier.scss
    ├── _state.scss
    └── _theme.scss
```

## Generator

You can automatically create and `@import` module files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:module <name>`

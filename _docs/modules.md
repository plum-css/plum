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

## How do they work?

A module should consist of and be broken down into the following classes:

Type                              | Base class     | Child class         | Description
----------------------------------|----------------|---------------------|-------------
[base](modules-base.html)         | `.module`      | `.module-child`     | classes that define the default interface.
[modifier](modules-modifier.html) | `.module-m-*`  | `.module-child-m-*` | classes that adapt changes in functionality and placement.
[state](modules-state.html)       | `.module-s-*`  | `.module-child-s-*` | classes that indicate a specific condition at a specific time.
[theme](modules-theme.html)       | `.module-t-*`  | `.module-child-t-*` | classes that alter the look and feel.
[layout](modules-layout.html)     | `.module-l-*`  | `.module-child-l-*` | classes that alter the positioning and layout.


## How do I structure their files & folders?

```text
modules
└── module
    ├── _base.scss
    ├── _layout.scss
    ├── _modifier.scss
    ├── _state.scss
    └── _theme.scss
```

## Generator

You can automatically create and `@import` module files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:module <name>`

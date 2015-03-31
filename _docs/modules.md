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

A module should consist of and be broken down into the following sections:

type                              | description                                                  | base class     | child class
----------------------------------|--------------------------------------------------------------|----------------|---------------------
[base](modules-base.html)         | classes that define the default interface.                   | `.module`      | `.module-child`
[modifier](modules-modifier.html) | classes that define changes relative to placement.           | `.module-m-*`  | `.module-child-m-*`
[state](modules-state.html)       | classes that define a specific condition at a specific time. | `.module-s-*`  | `.module-child-s-*`
[theme](modules-theme.html)       | classes that define the look and feel.                       | `.module-t-*`  | `.module-child-t-*`
[layout](modules-layout.html)     | classes that define the positioning and layout.              | `.module-l-*`  | `.module-child-l-*`

## How do I document them?

Module classes should be [documented](documentation.html) with a [name](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [description](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [modifier](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-modifiers), [category](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-styleguide-reference), and [template reference](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-markup).

```scss
// Name
// Description of module.
//
// .module-* - module modifier class
//
// Markup: templates/example.hbs
// Styleguide modules.name
.module { }
```

## How do I structure their files & folders?

```text
modules
└── module
    ├── _base.scss
    ├── _layout.scss
    ├── _modifier.scss
    ├── _state.scss
    ├── _theme.scss
    └── templates
        └── example.hbs
```

## Notes

- A modules base class name should always be in **singular** form. e.g. ``.button`` never ``.buttons``.

## Generator

You can automatically create and `@import` module files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:module <name>`

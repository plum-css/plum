---
layout: page
title: Hotfixes
navigation: true
---

Hotfixes are any critical bug fixes that need to go out immediately.

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
    class HOTFIXES active;
{% endmermaid %}

## How do I structure their files & folders?

```text
hotfixes
└── _fix-for-navigation.scss
```

## Example

```scss
// # Aside Navigation Specificity Fix
//
// It looks like a developer inadvertently targeted the "a" element instead of adding the style properties to the .list-item-link class.
// This is causing the link to be white and disappear into the background-color of the list.
// Users were complaining the navigation was unusable so this fix was added until we can properly refactor the .list-aside module.
.list-aside > .list-item > .list-item-link {
  color: red !important;
}
```

**Note:** *Anything added to hotfixes must be documented thoroughly and converted into a more reusable solution as soon as possible.*

## Generator

You can automatically create and `@import` a hotfix file with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:hotfix <name>`

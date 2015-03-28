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

## How do they work?

Hotfixes can target any valid selector and affect any properties required to fix the bug.

## How do I structure their files & folders?

```text
hotfixes
└── _fix-for-navigation.scss
```

## Notes

- Anything added to hotfixes must be documented thoroughly and converted into a more reusable solution as soon as possible.

## Generator

You can automatically create and `@import` a hotfix file with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:hotfix <name>`

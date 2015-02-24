---
layout: page
title: Configs
navigation: true
---

All of your application's configuration variables.

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
    class CONFIG active;
{% endmermaid %}

## How do I develop them?

Your configs should consist of and be broken down into the following sections:

1. [Colors](config-colors.html)
2. [Icons](config-icons.html)
3. [Images](config-images.html)
4. [Layouts](config-layouts.html)
5. [Typography](config-typography.html)

## How do I structure their files and folders?

```text
configs
├── config-one
│   └── _colors.scss
│   └── _icons.scss
│   └── _images.scss
│   └── _layouts.scss
│   └── _typography.scss
└── config-two
    ├── _colors.scss
    ├── _icons.scss
    ├── _images.scss
    ├── _layouts.scss
    └── _typography.scss
```

**Note:** *You can have multiple configs if you need to quickly change the overall "look and feel" of your application.*

## Generator

You can automatically create and `@import` config files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:config <name>`

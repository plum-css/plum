---
layout: page
title: Configs
navigation: true
---

Configs are all of your applications configuration varialbes.

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

## How do they work?

Your configs should consist of and be broken down into the following sections:

type                                 | description
-------------------------------------|-------------------------------------------------
[colors](config-colors.html)         | configuration variables specific to color values.
[icons](config-icons.html)           | configuration variables specific to icons.
[images](config-images.html)         | configuration variables specific to images.
[layouts](config-layouts.html)       | configuration variables specific to layouts and grids.
[typography](config-typography.html) | configuration variables specific to typography.

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

## Note

- You can have multiple configs if you need to quickly change the overall "look and feel" of your application.

## Generator

You can automatically create and `@import` config files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:config <name>`

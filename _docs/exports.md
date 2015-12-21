---
layout: page
title: Exports
navigation: true
---

Exports serve as the entry point to your stylesheet, combining all of the pieces that make up the publicly exposed parts of your application.


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
    class EXPORTS active;
{% endmermaid %}

## How do I structure their files and folders?

```text
exports
├── custom-page.scss
└── core.scss
```

## Example

```scss
// 1. <-configs->
@import "../configs/default/index";
@import "../configs/secondary/index";

// 2. <-functions->
@import "../helpers/functions/function";

// 3. <-mixins->
@import "../helpers/mixins/mixin";

// 4. <-core->
@import "../core/base";

// 5. <-vendors->
@import "../vendors/plugin";

// 6. <-layouts->
@import "../layouts/grid/index";

// 7. <-modules->
@import "../modules/button/index";
@import "../modules/heading/index";
@import "../modules/link/index";

// 8. <-units->
@import "../units/header/index";
@import "../units/hero/index";

// 9. <-pages->
@import "../pages/some-page/index";
@import "../pages/some-other-page/index";

// 10. <-hotfixes->
@import "../hotfixes/fix";
```

## Note

- Export files will compile to publicly available `.css` stylesheets.

## Generator

You can automatically create an export file with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:export <name>`

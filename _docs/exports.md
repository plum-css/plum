---
layout: page
title: Exports
navigation: true
---

Exports are where you combine all the pieces that will make up the publicly exposed parts of your application.

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
@import "../configs/default/colors";
@import "../configs/default/icons";
@import "../configs/default/images";
@import "../configs/default/layouts";
@import "../configs/default/typography";

// 2. <-functions->
@import "../helpers/functions/function";

// 3. <-mixins->
@import "../helpers/mixins/mixin";

// 4. <-core->
@import "../core/reset";
@import "../core/base";

// 5. <-vendors->
@import "../vendors/plugin";

// 6. <-layouts->
@import "../layouts/global";

// 7. <-modules->
@import "../modules/heading/base";
@import "../modules/heading/layout";
@import "../modules/heading/modifier";
@import "../modules/heading/state";
@import "../modules/heading/theme";

// 8. <-units->
@import "../units/header/header";
@import "../units/header/navigation";
@import "../units/header/footer";

// 9. <-pages->
@import "../pages/some-page";
@import "../pages/some-other-page";

// 10. <-hotfixes->
@import "../hotfixes/fix";
```

## Note

- Export files will compile to publicly available `.css` stylesheets.

## Generator

You can automatically create an export file with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:export <name>`

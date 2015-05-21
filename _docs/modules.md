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

Modules are built by creating [classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) under a chosen namespace and should be broken down in to the following sections:

- `.module`     - define the default classes and interface for a module. [[?]](modules-base.html)
- `.module-m-*` - define how a module will adapt relative to its placement. [[?]](modules-modifier.html)
- `.module-s-*` - define a condition at a specific time in a module. [[?]](modules-state.html)
- `.module-t-*` - define the look and feel of a module. [[?]](modules-theme.html)
- `.module-l-*` - define the positioning and layout of a module children. [[?]](modules-layout.html)

<p data-height="500" data-theme-id="12653" data-slug-hash="MYXBZM" data-default-tab="html" data-user="jasonbellamy" class='codepen'>See the Pen <a href='http://codepen.io/jasonbellamy/pen/MYXBZM/'>Module Example</a> by Jason Bellamy (<a href='http://codepen.io/jasonbellamy'>@jasonbellamy</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Notes

- A modules namespace should always be in **singular** form. e.g. ``.button`` never ``.buttons``.

## How do I document them?

Module classes should be [documented](documentation.html) with a [name](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [description](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [category](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-styleguide-reference), and [fixture reference](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-markup).

## How do I test them?

Visual regression tests for modules can be created, setup, and run by following the [documentation located here](testing.html).

## How do I structure their files & folders?

```text
modules
└── module
    ├── _base.scss
    ├── _layout.scss
    ├── _modifier.scss
    ├── _state.scss
    ├── _theme.scss
    └── tests
        ├── baselines
        │   └── module.png
        ├── fixtures
        │   └── module.hbs
        └── module.js
```

## Generator

You can automatically create and `@import` module files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:module <name>`

---
layout: page
title: Units
navigation: true
---

Units are built out of custom styles and on top of [modules](modules.html). They represent a finalized static piece of your application's UI.

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
    class UNITS active;
{% endmermaid %}

## How do they work?

- A units root and child classes can directly affect **all** the properties of an element.
- A units layout classes should follow the same rules as [global layouts](layouts.html).

## How do I use them?

A units classes can be applied by appending the following classes to any element:

 - `.unit-*`
 - `.unit-child-*`
 - `.unit-l-*`

and by extending & subclassing any existing [modules](modules.html) classes:

 - `.unit-module-*`
 - `.unit-module-child-*`

## How do I structure their files & folders?

```text
units
└── unit/_unit.scss
```

## Example

```scss
.footer {
 background: rgba(0, 0, 0, 1);
}

.footer-l {
  display: block;
  width: 100%;
}

.footer-l-1 {
  float: left;
  width: 75%;
}

.footer-l-2 {
  float: left;
  width: 25%;
}

.footer-l-3 {
  clear: both;
  float: left;
  width: 100%;
}

.footer-logo {
  background-image: url("path/to/footer/specific/logo.png");
  display: block;
  height: 75px;
  width: 150px;
}

.footer-logo-text {
  display: block;
  height: 0;
  width: 0;
  overflow: hidden;
}

.footer-list {
  background: rgba(255, 255, 255, 1);
}

.footer-list-item {
  color: rgba(0, 0, 0, 1);
}

.footer-copyright {
  color: rgba(255, 255, 255, 1);
  text-align: right;
}
```

## Generator

You can automatically create and `@import` a unit file  with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:unit <name>`

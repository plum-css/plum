---
layout: page
title: Modules->Layout
---

A modules layout classes define and alter the positioning of the module and its children.

{% mermaid %}
graph TD;
  classDef default fill:#eaeaea,stroke:#666,stroke-width:2px;
  classDef active fill:#fff,stroke:#666,stroke-width:2px;
  MODULES(Modules);
  MODULE1(Module 1);
  MODULES---MODULE1;
  MODULE1---MODULES-BASE(Base);
  MODULE1---MODULES-MODIFIER(Modifier);
  MODULE1---MODULES-STATE(State);
  MODULE1---MODULES-THEME(Theme);
  MODULE1---MODULES-LAYOUT(Layout);
  class MODULES-LAYOUT active;
{% endmermaid %}

## How do they work?

A modules layout classes can contain any properties that affect the positioning and structure of a module.

## How do I use them?

A modules layout classes are applied by appending: `.module-l-*`  to a modules root class.

## Example

```scss
.heading-l-left {
  text-align: left;
}

.heading-l-center {
  text-align: center;
}

.heading-l-right {
  text-align: right;
}
```

## Generator

You can automatically create and `@import` module files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:module <name>`

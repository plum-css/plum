---
layout: page
title: Modules->Base
---

A modules base defines the default classes and interface for your module.

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
  class MODULES-BASE active;
{% endmermaid %}

## How do they work?

Bases are created using **only** [class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) and can contain any properties that will be shared across your module.

## Notes

- A modules base class name should always be in **singular** form. e.g. ``.button`` never ``.buttons``.
- To provide a consistent interface, base classes should always be declared even if they don't have any properties set on them.

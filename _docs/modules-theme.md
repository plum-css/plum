---
layout: page
title: Modules->Theme
---

A modules theme classes define the look and feel of a module.

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
  class MODULES-THEME active;
{% endmermaid %}

## How do they work?

Theme classes can contain any properties needed to change the look and feel of a module.

## How do I use them?

Theme classes are applied by appending `.module-t-*` and/or `.module-child-t-*` to a modules base classes.

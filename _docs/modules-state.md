---
layout: page
title: Modules->State
---

A modules state classes define a specific condition at a specific time, *e.g.*, *hidden*, *disabled*, *active*, *etc.*

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
  class MODULES-STATE active;
{% endmermaid %}

## How do they work?

State classes can contain any properties required to affect the state of a module.

## How do I use them?

State classes are applied by appending `.module-s-*` and/or `.module-child-s-*` to one of a modules base classes.

## Notes

- State styles should **always** take precedence over others, so the use of `!important` with your properties is encouraged.

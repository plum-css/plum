---
layout: page
title: Modules->Layout
---

A modules layout classes define the positioning and layout of the module and its children.

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

Layout classes should only contain properties that affect the positioning and structure of a module.

## How do I use them?

Layout classes are applied by appending `.module-l-*` and/or `.module-child-l-*` to one of a modules base classes.

## Notes

- Layout classes should only affect the position of child elements, **never** the position of the module itself.

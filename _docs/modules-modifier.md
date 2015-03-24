---
layout: page
title: Modules->Modifier
---

A modules modifier classes allow the modules to adapt to changes in functionality and placement relative to its surroundings.

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
  class MODULES-MODIFIER active;
{% endmermaid %}

## How do they work?

Modifier classes should only contain properties that affect the placement of the inner content of a module.

## How do I use them?

Modifier classes are applied by appending `.module-m-*` and/or `.module-child-m-*` to a modules base classes.

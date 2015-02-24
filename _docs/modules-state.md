---
layout: page
title: Modules->State
---

A modules state classes are used to indicate a specific condition at a specific time, *e.g.*, *hidden*, *disabled*, *active*, *etc.*

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

A modules state classes can contain any properties required to affect the state of a module.

## How do I use them?

A modules modifier classes are applied by appending `.module-s-*` to the modules root class or by appending `.module-child-s-*` to one of its child classes.

## Example

```scss
.heading-s-hidden {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
}
```
**Note**: *A modules state styles should* **always** *take precedence over others, so the use of* `!important` *with your properties is encouraged.*

## Generator

You can automatically create and `@import` module files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:module <name>`

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

Module base classes can contain any properties that will be shared across most occurrences and variations of your module.

## Example

```scss
.heading {
  display: block;
  font-weight: bold;
}
```

**Note:** *To provide a consistent interface for all developers, base classes should always be declared even if they do not have any properties set on them.*

## Generator

You can automatically create and `@import` module files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:module <name>`

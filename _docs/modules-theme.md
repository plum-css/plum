---
layout: page
title: Modules->Theme
---

A modules theme classes define and alter the look and feel of a module.

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

A modules theme classes can contain any properties required to affect the look and feel of a module.

## How do I use them?
Themes can be applied by appending the following class names to a module's base class.
 - `.module-t-*`

## Example

```scss
.heading-t-primary {
  color: rgb(255, 0, 0);
}

.heading-t-secondary {
  color: rgb(155, 155, 155);
}

.heading-t-small {
  font-size: 0.75em;
  line-height: 1
}

.heading-t-medium {
  font-size: 1em;
  line-height: 1.5
}

.heading-t-large {
  font-size: 1.2em;
  line-height: 2.3;
}

.heading-t-xlarge {
  font-size: 1.5em;
  line-height: 2;
}
```

## Generator

You can automatically create and `@import` module files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:module <name>`

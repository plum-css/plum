---
layout: page
title: Core->Base
---

The base should contain only [universal](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors) and [type](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) selectors that will be shared across your application.

{% mermaid %}
graph TD;
  classDef default fill:#eaeaea,stroke:#666,stroke-width:2px;
  classDef active fill:#fff,stroke:#666,stroke-width:2px;
  CORE(Core);
  CORE-BASE(Base);
  CORE-RESET(Reset);
  CORE---CORE-BASE;
  CORE---CORE-RESET;
  class CORE-BASE active;
{% endmermaid %}

## Example

```scss
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 87.5%;
  line-height: 1.5;
}
```

## Generator

You can automatically create and `@import` core files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:core <name>`

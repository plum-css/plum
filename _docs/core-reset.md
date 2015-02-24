---
layout: page
title: Core->Reset
---

The reset should contain only the global or localized reset rules for your application.

{% mermaid %}
graph TD;
  classDef default fill:#eaeaea,stroke:#666,stroke-width:2px;
  classDef active fill:#fff,stroke:#666,stroke-width:2px;
  CORE(Core);
  CORE-BASE(Base);
  CORE-RESET(Reset);
  CORE---CORE-BASE;
  CORE---CORE-RESET;
  class CORE-RESET active;
{% endmermaid %}

## Example

```scss
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  border: 0;
}

article, aside, footer, header, menu, nav, section, main {
  display: block;
}
```

## Generator

You can automatically create and `@import` core files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:core <name>`

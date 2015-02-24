---
layout: page
title: Configs->Layouts
---

All of your application's local and vendor configuration variables specific to layouts and grids.

{% mermaid %}
  graph TD;
    classDef default fill:#eaeaea,stroke:#666,stroke-width:2px;
    classDef active fill:#fff,stroke:#666,stroke-width:2px;
    CONFIG(Configs);
    CONFIG1(Config 1);
    CONFIG---CONFIG1;
    CONFIG1---CONFIG-COLORS(Colors);
    CONFIG1---CONFIG-ICONS(Icons);
    CONFIG1---CONFIG-IMAGES(Images);
    CONFIG1---CONFIG-LAYOUTS(Layouts);
    CONFIG1---CONFIG-TYPOGRAPHY(Typography);
    class CONFIG-LAYOUTS active;
{% endmermaid %}

## Example

```scss
// Grid settings.
$grid-gutter-width: 24px;
$grid-column-count: 24;
$grid-max-width: 960px;

// Break points
$break-small: 320px;
$break-medium: 720px;
$break-large: 960px;
```

## Generator

You can automatically create and `@import` config files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:config <name>`

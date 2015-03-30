---
layout: page
title: Configs->Color
---

All of your application's configuration variables specific to color values.

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
    class CONFIG-COLORS active;
{% endmermaid %}

## Example

```scss
$color-fg-1: $_color-base-1; // foreground color
$color-bg-1: $_color-base-2; // background color
$color-bd-1: $_color-base-1; // border color
$color-hl-1: $_color-base-3; // highlight color

$color-fg-2: $_color-base-4; // foreground color
$color-bg-2: $_color-base-2; // background color
$color-bd-2: $_color-base-3; // border color
$color-hl-2: $_color-base-1; // highlight color
```

## Generator

You can automatically create and `@import` config files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:config <name>`

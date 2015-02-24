---
layout: page
title: Configs->Images
---

All of your application's configuration variables specific to images.

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
    class CONFIG-IMAGES active;
{% endmermaid %}

## Example

```scss
$image-logo-small-url: "/images/logo_small.png";
$image-logo-small-height: 24px;
$image-logo-small-width: 72px;

$image-logo-medium-url: "/images/logo_medium.png";
$image-logo-medium-height: 42px;
$image-logo-medium-width: 126px;
```

## Generator

You can automatically create and `@import` config files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:config <name>`

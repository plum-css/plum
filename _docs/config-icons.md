---
layout: page
title: Configs->Icons
---

All of your application's configuration variables specific to icons.

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
    class CONFIG-ICONS active;
{% endmermaid %}

## Example

```scss
$icon-stack-1-name: "iconSet";
$icon-stack-1-url: "/icons/icon-set";

$icon-stack-2-name: "alertnateIconSet";
$icon-stack-2-url: "/icons/alternate-icon-set";
```

## Generator

You can automatically create and `@import` config files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:config <name>`

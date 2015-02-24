---
layout: page
title: Configs->Typography
---

All of your application's local and vendor configuration variables specific to font families, sizes, and settings.

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
    class CONFIG-TYPOGRAPHY active;
{% endmermaid %}

## Example

```scss
$font-stack-1: Helvetica, Arial, sans-serif;
$font-stack-2: Georgia, serif;

$font-size-1: 36px;
$font-size-2: 24px;
$font-size-3: 18px;
$font-size-4: 16px;
$font-size-5: 14px;
$font-size-6: 12px;

$line-height: 1.5;
```

## Generator

You can automatically create and `@import` config files with the [Plum Generator](https://github.com/plum-css/generator-plum) by running the following command:

- `yo plum:config <name>`

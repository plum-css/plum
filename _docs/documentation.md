---
layout: page
title: Documentation
navigation: false
---

Documentation and example templates will be used to create a [living styleguide](https://github.com/kss-node/kss/blob/spec/SPEC.md#style-guide) to help develop and test your application.

## How does it work?

Documentation is created by prepending a [name](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [description](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-heading-and-description), [modifier](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-modifiers), [category](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-styleguide-reference), and a [template reference](https://github.com/kss-node/kss/blob/spec/SPEC.md#the-markup) before your classes
and by creating an example markup template that shows how your classes should be used.

## How do I structure their files & folders?

Example files should be placed inside a `/templates` directory located at the root of each specific [layout](layouts.html#how-do-i-document-them?), [module](modules.html#how-do-i-document-them?), and [unit](units.html#how-do-i-document-them?) folder.

```text
units
└── unit
    ├── _unit.scss
    └── templates
        └── example.hbs
```

## Notes

- All [helpers](helpers.html#how-do-i-document-them?), [layouts](layouts.html#how-do-i-document-them?), [modules](modules.html#how-do-i-document-them?), and [units](units.html#how-do-i-document-them?) **must** be documented using the [kss-node spec](https://github.com/kss-node/kss/blob/spec/SPEC.md).

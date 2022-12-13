# Rule to enforce use of onClick with hoverIndicator on Box and Card (hoverindicator-onclick)

When using `hoverIndicator` on [Box](https://v2.grommet.io/box) or [Card](https://v2.grommet.io/card), you must also provide an `onClick` property in order for the hover behavior to be applied.

Hover indication is a way to inform users that an element is clickable. Therefore, if an element is not clickable, no hover behavior will be applied.

## Rule Details

This rule aims to ensure that `onClick` is always applied when `hoverIndicator` is used.

Examples of **incorrect** code for this rule:

```js
<Box hoverIndicator>content<Box>

<Box hoverIndicator={{ elevation: 'large' }}>content<Box>

<Card hoverIndicator={{ elevation: 'large' }}>content<Card>
```

Examples of **correct** code for this rule:

```js
<Box hoverIndicator onClick={() => {}}>content<Box>

<Box hoverIndicator={{ elevation: 'large' }} onClick={() => {}}>content<Box>

<Card hoverIndicator={{ elevation: 'large' }} onClick={() => {}}>content<Card>
```

# Rule to enforce Button does not have multiple kinds applied (button-single-kind)

[Button](https://v2.grommet.io/button) can only be styled by a single kind at once. For example, it can be a `primary` button or a `secondary` button but not both at the same time.

## Rule Details

This rule aims to reduce unnecessary props on Button.

Examples of **incorrect** code for this rule:

```js
<Button label="Label" primary secondary />
```

Examples of **correct** code for this rule:

```js
<Button label="Label" primary />
<Button label="Label" secondary />
```

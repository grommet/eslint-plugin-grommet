# Rule to enforce a11yTitle on icon-only buttons (button-icon-a11ytitle)

When [Button](https://v2.grommet.io/button) has an `icon` but no `label` (icon-only), it should have an `a11yTitle` or `aria-label` that is descriptive about the action of the button.

This is critical for users that rely on assistive technology because the default a11yTitle on an icon may not be fitting for the use case of the button. For example,

## Rule Details

This rule aims to ensure `a11yTitle` or `aria-label` is present on icon-only buttons.

Examples of **incorrect** code for this rule:

```js
<Button icon={<FormClose />} />
```

Examples of **correct** code for this rule:

```js
<Button icon={<FormClose />} a11yTitle="Close Edit Profile Layer" />

<Button icon={<FormClose />} aria-label="Close Edit Profile Layer" />
```

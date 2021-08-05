# Recommend use of children with FormField as opposed to component property (formfield-prefer-children)

It is considered Grommet best practice to implement inputs as children of [FormField](https://v2.grommet.io/formfield) as opposed to passing the input to FormField's component property.

## Rule Details

This rule aims to ensure FormField inputs are provided as children.

Examples of **incorrect** code for this rule:

```js

<FormField component={CheckBox}> />

```

Examples of **correct** code for this rule:

```js
<FormField>
  <CheckBox />
</FormField>
```

# Rule to enforce matching htmlFor and id on FormField and its child input, respectively (formfield-htmlfor-id)

It is necessary to associate a label with its input. This allows assistive technology to refer to the correct label when presenting a form control.

Read more about [W3C Form Control Accessibility](https://www.w3.org/WAI/tutorials/forms/labels/).

## Rule Details

This rule aims to ensure that FormField has an `htmlFor` prop that matches the `id` prop of its child input.

Examples of **incorrect** code for this rule:

```js

<FormField label="Test Input">
   <TestInput />
</FormField>

<FormField label="Test Input" htmlFor="test-input">
   <TestInput />
</FormField>

<FormField label="Test Input">
   <TestInput id="test-input" />
</FormField>

```

Examples of **correct** code for this rule:

```js
<FormField label="Test Input" htmlFor="test-input">
  <TestInput id="test-input" />
</FormField>
```

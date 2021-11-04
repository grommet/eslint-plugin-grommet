# Rule to enforce name on FormField and its child input (formfield-name)

FormField and its child input require a matching `name` prop to ensure that data is included on form submission.

Note from [W3Schools](https://www.w3schools.com/tags/att_input_name.asp): Only form elements with a name attribute will have their values passed when submitting a form.

## Rule Details

This rule aims to ensure that a matching `name` is applied to both a FormField and its child input.

Examples of **incorrect** code for this rule:

```js
<Form>
  <FormField label="Test Text Input">
    <TextInput name="testinput" />
  </FormField>
  <FormField label="Another Test Text Input" name="testinput-2">
    <TextInput name="abc" />
  </FormField>
</Form>
```

Examples of **correct** code for this rule:

```js
<Form>
  <FormField label="Test Text Input" name="testinput">
    <TextInput name="testinput" />
  </FormField>
  <FormField label="Another Test Text Input" name="testinput-2">
    <TextInput name="testinput-2" />
  </FormField>
</Form>
```

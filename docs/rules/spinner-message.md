# Rule to ensure message is applied to Spinner (spinner-message)

[Spinner](https://v2.grommet.io/spinner) `message` prop is announced to screen reader users to provide better context on what is being loaded. It is recommended to use the object structure where both a "start" and "end" message are provided so screen reader users are alerted both when a spinner appears on the screen and when it disappears.

Tips to consider:

- Be specific. Don't just say, "Data is loading." Instead, provide clarity around what kind of data is loading. For example, "Loading user data."

## Rule Details

This rule aims to ensure `message` prop is applied to Spinner.

Examples of **incorrect** code for this rule:

```js
<Spinner />
```

Examples of **correct** code for this rule:

```js
<Spinner
  message={{ start: "Loading user data", end: "User data successfully loaded" }}
/>

// Object structure is preferred over string
<Spinner message="Loading user data" />
```

# Rule to enforce descriptive anchor label (anchor-label)

[Anchor](https://v2.grommet.io/anchor) should have a `label` or child string that is descriptive about where the anchor will navigate to when clicked as opposed to vague text such as "here" or "Click here".

This is critical for users that navigate via screen readers because often they use quick commands to view all anchors within a page. If an anchor is only labeled with "here" or "Click here", a user navigating via screen reader will have no context around where this link will lead.

## Rule Details

This rule aims to ensure that vague text such as "here" or "Click here" is not used as label text for Anchors.

Examples of **incorrect** code for this rule:

```js

You can learn more <Anchor label="here" href="/some-page" />.

To learn more, <Anchor label="click here" href="/some-page" />.

```

Examples of **correct** code for this rule:

```js
To learn more, read more about <Anchor "Grommet docs" href="https://grommet.io" />.
```

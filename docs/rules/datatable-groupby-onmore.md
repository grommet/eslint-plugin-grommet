# Rule to ensure groupBy and onMore are not used together on DataTable (datatable-groupby-onmore)

[DataTable](https://v2.grommet.io/datatable) does not support using `groupBy` and `onMore` together.

## Rule Details

This rule aims to ensure `groupBy` and `onMore` are not used together.

Examples of **incorrect** code for this rule:

```js
<DateTable groupBy="location" onMore={() => {}} />
```

Examples of **correct** code for this rule:

```js
<DateTable groupBy="location" />
<DateTable onMore={() => {}} />
```

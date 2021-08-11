# Rule to enforce aria-describedby on DataTable (datatable-aria-describedby)

[DataTable](https://v2.grommet.io/datatable) requires `aria-describedby` prop that aligns with an `id` on a text element. This property allows screen readers to provide better context about the data of a DataTable.

## Rule Details

This rule aims to provide an accessible DataTable experience for screen reader users.

Examples of **incorrect** code for this rule:

```js

<Heading>Users</Heading>
<DataTable columns={columns} data={data} />

```

Examples of **correct** code for this rule:

```js

<Heading id="user-table-heading">Users</Heading>
<DataTable aria-describedby="user-table-heading" columns={columns} data={data} />


```

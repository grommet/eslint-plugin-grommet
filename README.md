# eslint-plugin-grommet

Lint rules to use with Grommet.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-grommet`:

```
$ npm install eslint-plugin-grommet --save-dev
```

## Usage

### Recommended rules

To use the recommended set of rules, add `plugin:grommet/recommended` to the extends section of your `.eslintrc` configuration file. The `plugin:` prefix informs ESLint that the configuration lives within an `eslint-plugin-` package as opposed to an `eslint-config-` package.


```json
{
  "extends": ["plugin:grommet/recommended"]
}
```

### Opting into and out of specific rules

To opt-in or opt-out of specific rules, add `grommet` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["grommet"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "grommet/rule-name": 2
  }
}
```

### Example configuration

In the configuration below, the recommended rules are all being enforced except for `formfield-prefer-children`. Be mindful when disabling rules from the recommended configuration as this may result in accessibility errors or other missed best practice guidance.

```json
{
  "extends": ["plugin:grommet/recommended"],
  "plugins": ["grommet"],
  "rules": {
    "grommet/formfield-prefer-children": 0
  }
}
```

## Supported Rules

- [anchor-label](https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/anchor-label.md)
- [button-icon-a11ytitle](https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/button-icon-a11ytitle.md)
- [button-single-kind](https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/button-single-kind.md)
- [datatable-aria-describedby](https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/datatable-aria-describedby.md)
- [datatable-groupby-onmore](https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/datatable-groupby-onmore.md)
- [formfield-htmlfor-id](https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/formfield-htmlfor-id.md)
- [formfield-name.md](https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/formfield-name.md)
- [formfield-prefer-children](https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/formfield-prefer-children.md)
- [hoverindicator-onclick](https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/hoverindicator-onclick.md)
- [image-alt-text](https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/image-alt-text.md)
- [spinner-message](https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/spinner-message.md)



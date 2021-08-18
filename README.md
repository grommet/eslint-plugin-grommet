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

Add `grommet` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

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

## Supported Rules

- [image-alt-text](https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/image-alt-text.md)
- [spinner-message](<(https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/spinner-message.md)>)

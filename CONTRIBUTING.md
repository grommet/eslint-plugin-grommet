# Contributing

Thank you for making this step of contributing and for helping us improve our linting rules. You came to the right place to start your contribution! Follow the guidelines and let us know if we can help with anything else.

## How to Contribute

No contribution is too small, so thank you for helping! We strive to process all pull requests as soon as possible and
with constructive feedback.

To make a pull request you will need a GitHub account. For help, see GitHub’s documentation on [forking] and [pull requests].

Development happens on the `master` branch. In order for you to get
started you should:

1. fork the `eslint-plugin-grommet` repository
1. clone it `git clone https://github.com/<your-username>/eslint-plugin-grommet.git`
1. install dependencies using: `yarn`

### Updating an existing rule

1. Update the rule: `lib/rules/<your-rule>.js`
1. Update the documentation: `docs/rules/<your-rule>.js`
1. Update the tests: `tests/lib/rules/<your-rule>.js`

### Writing a new rule

To set-up a new rule, the easist approach is to use [Yeoman generator](https://www.npmjs.com/package/generator-eslint).

To install Yeoman globally, run:

```
yarn global add yo
```

You will also need to install `generator-eslint`:

```
yarn global add generator-eslint
```


Once you are in the root of your forked `eslint-plugin-grommet` repository, you can run the following to write a new rule:

```
yo eslint:rule
```

Follow the prompts to name your rule and give a description. Once your rule has been created, you should see 3 files associated with your rule:

- `lib/rules/<your-rule>.js`
- `docs/rules/<your-rule>.js`
- `tests/lib/rules/<your-rule>.js`
  
Write the logic for your rule in the `lib/rules/<your-rule>.js` file. For guidance, refer to Eslint's [Working with Plugins](https://eslint.org/docs/developer-guide/working-with-plugins) documentation.
  
It may be helpful to use [Abstract Syntax Tree (AST)](https://astexplorer.net/) to find the appropriate selector for your rule. More guidance on selectors can be found under Eslint's [Selectors](https://eslint.org/docs/developer-guide/selectors) documentation.

### Rule naming conventions

All rules should be lowercase with a dash (-) separate words. For example: `alt-text`.

## Testing Your Rule

- You can use Eslint's [RuleTester](https://eslint.org/docs/developer-guide/nodejs-api#ruletester) to test your rule. Tests are written in tests/lib/rules/<your-rule>.js. To test your rule, run:

```
yarn test
```

## Contributing to the Documentation

If you are adding a new rule or adjusting an existing rule, ensure that the documentation for that rule is up-to-date. Documentation for a given rule is found in `docs/rules/<your-rule>.js`.

When writing documentation, be specific and succinct. Provide clear, realistic code examples where it is appropriate.

## References

This contribution guide was inspired by the contribution guides for [Grunt],
[CloudSlang], and [Docker Library].

[cloudslang]: http://www.cloudslang.io/#/docs#contributing-code
[docker library]: https://github.com/docker-library/docs/tree/master/node
[forking]: https://help.github.com/en/articles/fork-a-repo
[grunt]: http://gruntjs.com/contributing
[pull requests]: https://help.github.com/en/articles/creating-a-pull-request-from-a-fork

# Contributing

Thank you for making this step of contributing and for helping us improve our linting rules. You came to the right place to start your contribution! Follow the guidelines and let us know if we can help with anything else.

## How to Contribute

No contribution is too small, so thank you for helping! We strive to process all pull requests as soon as possible and
with constructive feedback.

To make a pull request you will need a GitHub account. For help, see GitHub’s documentation on [forking] and [pull requests].

Development happens on the `master` branch. In order for you to get
started you should:

1. clone the `eslint-plugin-grommet` repository
1. install dependencies using: `yarn`

### Updating an existing rule

1. Update the rule: `lib/rules/<your-rule>.js`
1. Update the documentation: `docs/rules/<your-rule>.js`
1. Update the tests: `tests/lib/rules/<your-rule>.js`

### Creating a new rule

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

Follow the prompts to name your rule and give a description. Keep in mind our [rule naming conventions](#rule-naming-conventions). Once your rule has been created, you should see 3 files associated with your rule:

- `lib/rules/<your-rule>.js`
- `docs/rules/<your-rule>.js`
- `tests/lib/rules/<your-rule>.js`

#### Rule naming conventions

- If a rule is specific to a single component, it should be prefixed with that component name. For example, `image-alt-text`.
- All rules should be lowercase with a dash (-) separate words. Component names are considered a single word. For example: `datatable-groupby-onmore`.

### Writing your rule

Your rule can be found in `lib/rules/<your-rule>.js` file. Follow these steps when writing your rule:

1. Use [Abstract Syntax Tree (AST)](https://astexplorer.net/) as a sandbox to write and test your rule. AST makes it easy to find the correct selector for a given element. More guidance on selectors can be found under Eslint's [Selectors](https://eslint.org/docs/developer-guide/selectors) documentation.
2. Copy and paste the return state from your AST sandbox into the return statement of `lib/rules/<your-rule>.js`.
3. Update `meta.docs.category` to "Best Practices" and `meta.docs.recommended` to true.
4. Delete `meta.docs.schema`.
5. Add `messages` to your `meta.docs` with a key that matches your rule name and a string value that serves as the message for ESLint to display when your rule fails. For example, for the rule `image-alt-text`, the following should be added:
```
meta: {
   docs: {
   ...
      messages: {
         'image-alt-text': 'Image requires alt text that is descriptive about what the image contains.',
      },
   },
}
```
6. In the `context.report` of your rule, reference the message via the messageId. For example, for the rule `image-alt-text`, you should reference the messageId defined in `message.docs.messages`:
```
context.report({
   node: node,
   messageId: 'image-alt-text',
});
```

For additional guidance, refer to Eslint's [Working with Plugins](https://eslint.org/docs/developer-guide/working-with-plugins) documentation.

### Adding your rule to the recommended configuration

When a rule is part of the recommended configuration, it will automatically be enabled when a project adds `plugin:grommet/recommended` to the `extends` object of their ESLint configuration.

To add your rule to the recommended configuration, go to `lib/index.js` and add your rule in alphabetical order to `configs.recommended.rules`. If your rule should cause an error, mark its value as `error`. If your rule should cause a warning, mark its value as `warn`. See [ESLint Configuring Rules](https://eslint.org/docs/user-guide/configuring/rules#configuring-rules) documentation for added guidance.

For example, if your rule should cause an error, you would add the following to the config:

```
module.exports.configs = {
  recommended: {
    plugins: ['grommet'],
    rules: {
      ...
      'grommet/<your-rule>': 'error',
    },
  },
};
```

### Testing Your Rule

You can use Eslint's [RuleTester](https://eslint.org/docs/developer-guide/nodejs-api#ruletester) to test your rule. Tests are written in `tests/lib/rules/<your-rule>.js`. Tests should be added to the `tests/lib/rules/<your-rule>.js` file.
  
To allow the parser to accept JSX, add the following configurations to the `ruleTester` variable:

```
var ruleTester = new RuleTester({
  parserOptions: { ecmaFeatures: { jsx: true } },
});
```
  
To check that your error is appearing properly, reference it by its `messageId`. For example, if your rule was `image-alt-text`, you would do the following:

```
invalid: [
    {
      code: '<Image src="/ocean.png" />',
      errors: [
        {
          messageId: "image-alt-text",
        },
      ],
    },
  ],
 ```

To test your rule, run:

```
yarn test
```

### Contributing to the Documentation

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

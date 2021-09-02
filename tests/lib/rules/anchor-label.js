/**
 * @fileoverview Rule to enforce descriptive anchor label
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/anchor-label'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: { ecmaFeatures: { jsx: true } },
});
ruleTester.run('anchor-label', rule, {
  valid: [
    '<Anchor label="Grommet docs" href="https://grommet.io" />',
    '<Anchor href="https://grommet.io">Grommet docs</Anchor>',
  ],
  invalid: [
    {
      code: '<Anchor label="here" href="/some-page" />',
      errors: [
        {
          messageId: 'anchor-label',
        },
      ],
    },
    {
      code: '<Anchor label="Click here" href="/some-page" />',
      errors: [
        {
          messageId: 'anchor-label',
        },
      ],
    },
    {
      code: '<Anchor href="/some-page">Click here</Anchor>',
      errors: [
        {
          messageId: 'anchor-label',
        },
      ],
    },
  ],
});

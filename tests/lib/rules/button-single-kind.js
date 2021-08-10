/**
 * @fileoverview Rule to enforce Button does not have multiple kinds applied
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/button-single-kind'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: { ecmaFeatures: { jsx: true } },
});
ruleTester.run('button-single-kind', rule, {
  valid: [
    '<Button label="Label" primary />',
    '<Button label="Label" secondary />',
    '<Button label="Label" kind="toolbar" />',
  ],

  invalid: [
    {
      code: '<Button label="Label" secondary primary />',
      errors: [
        {
          messageId: 'primary-secondary',
        },
      ],
    },
    {
      code: '<Button label="Label" primary kind="toolbar" />',
      errors: [
        {
          messageId: 'primary-kind',
        },
      ],
    },
    {
      code: '<Button label="Label" secondary kind="toolbar" />',
      errors: [
        {
          messageId: 'secondary-kind',
        },
      ],
    },
  ],
});

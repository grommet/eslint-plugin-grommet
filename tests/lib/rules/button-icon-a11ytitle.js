/**
 * @fileoverview Rule to enforce a11yTitle on icon-only buttons
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/button-icon-a11ytitle'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: { ecmaFeatures: { jsx: true } },
});
ruleTester.run('button-icon-a11ytitle', rule, {
  valid: [
    '<Button icon={<FormClose />} a11yTitle="Exit Edit Profile Layer" />',
    '<Button icon={<FormClose />} aria-label="Exit Edit Profile Layer" />',
    '<Button icon={<FormClose />} tip="Exit Edit Profile Layer" />',
  ],

  invalid: [
    {
      code: '<Button icon={<FormClose />} />',
      errors: [
        {
          messageId: 'button-icon-a11ytitle',
        },
      ],
    },
    {
      code: '<Button icon={<FormClose />} tip={{ content: "Close" }} />',
      errors: [
        {
          messageId: 'button-icon-custom-tip',
        },
      ],
    },
  ],
});

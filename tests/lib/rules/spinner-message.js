/**
 * @fileoverview Rule to ensure message is applied to Spinner.
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/spinner-message'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: { ecmaFeatures: { jsx: true } },
});
ruleTester.run('spinner-message', rule, {
  valid: [
    '<Spinner message="Loading users" />',
    '<Spinner message={{ start: "Loading users", end: "Users successfully loaded" }} />',
  ],

  invalid: [
    {
      code: '<Spinner />',
      errors: [
        {
          messageId: 'spinner-message',
        },
      ],
    },
  ],
});

/**
 * @fileoverview Rule to enforce name on FormField and its child input
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/formfield-name'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: { ecmaFeatures: { jsx: true } },
});
ruleTester.run('formfield-name', rule, {
  valid: [
    '<FormField label="Test Text Input" name="testinput"><TextInput name="testinput" /></FormField>',
  ],

  invalid: [
    {
      code: '<FormField label="Label"><TextInput /></FormField>',
      errors: [
        {
          messageId: 'formfield-name',
        },
      ],
    },
    {
      code: '<FormField label="Label" name="test-input"><TextInput /></FormField>',
      errors: [
        {
          messageId: 'formfield-name',
        },
      ],
    },
    {
      code: '<FormField label="Label" name="test-input"><TextInput name="abc" /></FormField>',
      errors: [
        {
          messageId: 'formfield-name',
        },
      ],
    },
  ],
});

/**
 * @fileoverview Rule to enforce matching htmlFor and id on FormField and its child input, respectively
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/formfield-htmlfor-id'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: { ecmaFeatures: { jsx: true } },
});
ruleTester.run('formfield-htmlfor-id', rule, {
  valid: [
    '<FormField label="Test Input" htmlFor="test-input"><TextInput id="test-input" /></FormField>',
  ],

  invalid: [
    {
      code: '<FormField label="Test Input"><TextInput /></FormField>',
      errors: [
        {
          messageId: 'formfield-htmlfor-id',
        },
      ],
    },
    {
      code: '<FormField label="Test Input" htmlFor="test-input"><TextInput /></FormField>',
      errors: [
        {
          messageId: 'formfield-htmlfor-id',
        },
      ],
    },
    {
      code: '<FormField label="Test Input"><TextInput id="test-input" /></FormField>',
      errors: [
        {
          messageId: 'formfield-htmlfor-id',
        },
      ],
    },
    {
      code: '<FormField label="Test Input" htmlFor="other-input"><TextInput id="test-input" /></FormField>',
      errors: [
        {
          messageId: 'formfield-htmlfor-id',
        },
      ],
    },
  ],
});

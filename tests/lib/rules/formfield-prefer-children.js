/**
 * @fileoverview Recommend use of children with FormField as opposed to component property
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/formfield-prefer-children'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: { ecmaFeatures: { jsx: true } },
});
ruleTester.run('formfield-prefer-children', rule, {
  valid: ['<FormField><TextInput /></FormField>'],

  invalid: [
    {
      code: '<FormField component={CheckBox} />',
      errors: [
        {
          messageId: 'formfield-prefer-children',
        },
      ],
    },
  ],
});

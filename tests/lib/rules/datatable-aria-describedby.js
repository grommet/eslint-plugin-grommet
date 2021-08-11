/**
 * @fileoverview Rule to enforce aria-describedby on DataTable
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/datatable-aria-describedby'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: { ecmaFeatures: { jsx: true } },
});
ruleTester.run('datatable-aria-describedby', rule, {
  valid: [
    '<DataTable aria-describedby="some-heading" columns={columns} data={data} />',
  ],

  invalid: [
    {
      code: '<DataTable columns={columns} data={data} />',
      errors: [
        {
          messageId: 'datatable-aria-describedby',
        },
      ],
    },
  ],
});

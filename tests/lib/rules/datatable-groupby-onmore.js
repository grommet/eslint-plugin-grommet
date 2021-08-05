/**
 * @fileoverview Rule to ensure groupBy and onMore are not used together on DataTable
 * @author Taylor Seamans
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/datatable-groupby-onmore"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: { ecmaFeatures: { jsx: true } },
});
ruleTester.run("datatable-groupby-onmore", rule, {
  valid: ['<DataTable groupBy="location" />', "<DataTable onMore={onMore} />"],

  invalid: [
    {
      code: '<DataTable groupBy="location" onMore={onMore} />',
      errors: [
        {
          messageId: "datatable-groupby-onmore",
        },
      ],
    },
  ],
});

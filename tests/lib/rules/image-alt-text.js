/**
 * @fileoverview Rule to enforce alt attribute on Image
 * @author Taylor Seamans
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/image-alt-text"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: { ecmaFeatures: { jsx: true } },
});
ruleTester.run("image-alt-text", rule, {
  valid: [
    '<Image alt="Waves breaking on an empty shoreline at sunset" src="/ocean.png" />',
  ],

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
});

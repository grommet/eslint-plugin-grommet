/**
 * @fileoverview Rule to enforce use of onClick with hoverIndicator on Box and Card
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/hoverindicator-onclick'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: { ecmaFeatures: { jsx: true } },
});
ruleTester.run('hoverindicator-onclick', rule, {
  valid: [
    '<Box hoverIndicator={{ elevation: "large" }} onClick={onClick}>content</Box>',
    '<Card hoverIndicator={{ elevation: "large" }} onClick={onClick}>content</Card>',
    '<Box hoverIndicator onClick={onClick}>content</Box>',
    '<Card hoverIndicator onClick={onClick}>content</Card>',
  ],

  invalid: [
    {
      code: '<Box hoverIndicator>content</Box>',
      errors: [
        {
          messageId: 'hoverindicator-onclick',
        },
      ],
    },
    {
      code: '<Card hoverIndicator>content</Card>',
      errors: [
        {
          messageId: 'hoverindicator-onclick',
        },
      ],
    },
    {
      code: "<Box hoverIndicator={{ elevation: 'large' }}>content</Box>",
      errors: [
        {
          messageId: 'hoverindicator-onclick',
        },
      ],
    },
    {
      code: "<Card hoverIndicator={{ elevation: 'large' }}>content</Card>",
      errors: [
        {
          messageId: 'hoverindicator-onclick',
        },
      ],
    },
  ],
});

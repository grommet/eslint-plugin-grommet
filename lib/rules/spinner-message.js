/**
 * @fileoverview Rule to ensure message is applied to Spinner
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  type: 'problem',
  meta: {
    docs: {
      description: 'Rule to ensure message is applied to Spinner',
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/spinner-message.md',
    },
    fixable: null,
    messages: {
      'spinner-message': `Spinner requires the 'message' prop describing what is being loaded. 
      The message will be announced by screen readers. See Spinner docs: https://v2.grommet.io/spinner#message.`,
    },
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (node?.openingElement?.name?.name === 'Spinner') {
          let message = false;
          node.openingElement.attributes.forEach((attribute) => {
            if (attribute?.name?.name === 'message') {
              message = true;
            }
          });
          if (!message)
            context.report({
              node: node,
              messageId: 'spinner-message',
            });
        }
      },
    };
  },
};

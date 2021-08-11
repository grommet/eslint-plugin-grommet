/**
 * @fileoverview Rule to ensure Button does not have multiple kinds applied
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Rule to ensure Button does not have multiple kinds applied',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null,
    messages: {
      'primary-secondary':
        '`primary` and `secondary` cannot be used together, remove one.',
      'primary-kind':
        '`primary` and `kind` cannot be used together, remove one.',
      'secondary-kind':
        '`secondary` and `kind` cannot be used together, remove one.',
    },
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (node.openingElement.name.name === 'Button') {
          let secondary = false;
          let primary = false;
          let kind = false;
          node.openingElement.attributes.forEach((attribute) => {
            if (attribute.name.name === 'secondary') {
              secondary = true;
            } else if (attribute.name.name === 'primary') {
              primary = true;
            } else if (attribute.name.name === 'kind') {
              kind = true;
            }
          });
          if (primary && secondary)
            context.report({
              node: node,
              messageId: 'primary-secondary',
            });
          else if (primary && kind)
            context.report({
              node: node,
              messageId: 'primary-kind',
            });
          else if (secondary && kind)
            context.report({
              node: node,
              messageId: 'secondary-kind',
            });
        }
      },
    };
  },
};

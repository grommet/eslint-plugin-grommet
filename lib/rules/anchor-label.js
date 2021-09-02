/**
 * @fileoverview Rule to enforce descriptive anchor label
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Rule to enforce descriptive anchor label',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null,
    messages: {
      'anchor-label':
        'Anchor should have a descriptive label that provides clear context about where it will navigate to.',
    },
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (node?.openingElement?.name?.name === 'Anchor') {
          let vagueLabel = false;
          const regexp = /.*here.*/gi;
          node.openingElement.attributes.forEach((attribute) => {
            if (attribute?.name?.name === 'label') {
              vagueLabel = regexp.test(attribute.value.raw);
            }
          });
          if (node.children)
            node.children.map((child) => {
              vagueLabel = regexp.test(child.value);
            });
          if (vagueLabel)
            context.report({
              node: node,
              messageId: 'anchor-label',
            });
        }
      },
    };
  },
};

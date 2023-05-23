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
    type: 'problem',
    docs: {
      description: 'Rule to enforce descriptive anchor label',
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/anchor-label.md',
    },
    fixable: null,
    messages: {
      'anchor-label':
        'Anchor should have a descriptive label providing clear context as to where it will navigate.',
    },
    schema: [],
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

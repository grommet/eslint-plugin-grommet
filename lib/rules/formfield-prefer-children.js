/**
 * @fileoverview Recommend use of children with FormField as opposed to component property
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description:
        'Recommend use of children with FormField as opposed to component property',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null,
    messages: {
      'formfield-prefer-children':
        'It is not recommended to use component property. Instead, implement input as a child of FormField.',
    },
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (node.openingElement.name.name === 'FormField') {
          let component = false;
          node.openingElement.attributes.forEach((attribute) => {
            if (attribute.name.name === 'component') {
              component = true;
            }
          });
          if (component)
            context.report({
              node: node,
              messageId: 'formfield-prefer-children',
            });
        }
      },
    };
  },
};

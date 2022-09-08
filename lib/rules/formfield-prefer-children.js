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
      url: 'https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/formfield-prefer-children.md',
    },
    fixable: null,
    messages: {
      'formfield-prefer-children': `It is not recommended to use the 'component' property. Instead, 
      implement the input as a child of FormField.`,
    },
    type: 'suggestion',
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (node?.openingElement?.name?.name === 'FormField') {
          let component = false;
          node.openingElement.attributes.forEach((attribute) => {
            if (attribute?.name?.name === 'component') {
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

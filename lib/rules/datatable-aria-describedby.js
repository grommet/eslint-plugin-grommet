/**
 * @fileoverview Rule to enforce aria-describedby on DataTable
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
      description: 'Rule to enforce aria-describedby on DataTable',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null,
    messages: {
      'datatable-aria-describedby':
        'DataTable requires `aria-describedby` property that aligns with an `id` on a text element that describes the context of the DataTable.',
    },
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (node.openingElement.name.name === 'DataTable') {
          let ariaDescribedBy = false;
          node.openingElement.attributes.forEach((attribute) => {
            if (attribute.name.name === 'aria-describedby') {
              ariaDescribedBy = true;
            }
          });
          if (!ariaDescribedBy)
            context.report({
              node: node,
              messageId: 'datatable-aria-describedby',
            });
        }
      },
    };
  },
};

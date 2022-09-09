/**
 * @fileoverview Rule to ensure groupBy and onMore are not used together on DataTable
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
      description:
        'Rule to ensure groupBy and onMore are not used together on DataTable',
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/datatable-groupby-onmore.md',
    },
    fixable: null,
    messages: {
      'datatable-groupby-onmore': `'groupBy' and 'onMore' cannot be used together, remove one.`,
    },
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (node?.openingElement?.name?.name === 'DataTable') {
          let groupBy = false;
          let onMore = false;
          node.openingElement.attributes.forEach((attribute) => {
            if (attribute?.name?.name === 'groupBy') {
              groupBy = true;
            } else if (attribute?.name?.name === 'onMore') {
              onMore = true;
            }
          });
          if (groupBy && onMore)
            context.report({
              node: node,
              messageId: 'datatable-groupby-onmore',
            });
        }
      },
    };
  },
};

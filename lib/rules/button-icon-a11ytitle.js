/**
 * @fileoverview Rule to enforce a11yTitle on icon-only buttons
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Rule to enforce a11yTitle on icon-only buttons',
      category: 'Best Practices',
      recommended: false,
      url: 'https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/button-icon-a11ytitle.md',
    },
    fixable: null,
    messages: {
      'button-icon-a11ytitle': `Icon-only button requires 'a11yTitle' or 'aria-label' describing the action of the button.`,
    },
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (node?.openingElement?.name?.name === 'Button') {
          let a11yTitle;
          let label;
          let icon;

          node?.openingElement?.attributes?.forEach((attribute) => {
            if (attribute?.name?.name === 'label') {
              label = true;
            } else if (attribute?.name?.name === 'icon') {
              icon = true;
            } else if (
              attribute?.name?.name === 'a11yTitle' ||
              attribute?.name?.name === 'aria-label'
            ) {
              a11yTitle = true;
            }
          });

          if (!label && icon && !a11yTitle)
            context.report({
              node: node,
              messageId: 'button-icon-a11ytitle',
            });
        }
      },
    };
  },
};

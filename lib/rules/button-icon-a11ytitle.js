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
    type: 'problem',
    docs: {
      description: 'Rule to enforce a11yTitle on icon-only buttons',
      category: 'Best Practices',
      recommended: false,
      url: 'https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/button-icon-a11ytitle.md',
    },
    fixable: null,
    messages: {
      'button-icon-a11ytitle': `Icon-only button requires 'a11yTitle', 'aria-label', or 'tip' describing the action of the button. Use 'tip' if it would be valuable for the description to appear on hover.`,
      'button-icon-custom-tip': `Because 'tip' is implemented as a custom object an `aria-label` is not automatically added to button. Include an accompanying 'a11yTitle' or 'aria-label' describing the action of the button to help users of assistive technologies.`,
    },
    schema: [],
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (node?.openingElement?.name?.name === 'Button') {
          let a11yTitle;
          let label;
          let icon;
          let tip;

          node?.openingElement?.attributes?.forEach((attribute) => {
            if (attribute?.name?.name === 'label') {
              label = true;
            } else if (attribute?.name?.name === 'icon') {
              icon = true;
            } else if (attribute?.name?.name === 'tip') {
              tip = attribute.value.type;
            } else if (
              attribute?.name?.name === 'a11yTitle' ||
              attribute?.name?.name === 'aria-label'
            ) {
              a11yTitle = true;
            }
          });

          const iconOnly = !label && icon;

          if (iconOnly && !tip && !a11yTitle)
            context.report({
              node: node,
              messageId: 'button-icon-a11ytitle',
            });
          else if (iconOnly && tip === 'JSXExpressionContainer' && !a11yTitle)
            context.report({
              node: node,
              messageId: 'button-icon-custom-tip',
            });
        }
      },
    };
  },
};

/**
 * @fileoverview Rule to enforce use of onClick with hoverIndicator on Box and Card
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
        'Rule to enforce use of onClick with hoverIndicator on Box and Card',
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/hoverindicator-onclick.md',
    },
    fixable: null,
    messages: {
      'hoverindicator-onclick': `Using hoverIndicator without onClick will not apply the hover behavior. 
      A hover indicator is intended to provide feedback that an element is clickable, and therefore 
      is not applied to static elements.`,
    },
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (
          node?.openingElement?.name?.name === 'Card' ||
          node?.openingElement?.name?.name === 'Box'
        ) {
          let hoverIndicator = false;
          let onClick = false;
          node?.openingElement?.attributes?.forEach((attribute) => {
            if (attribute?.name?.name === 'hoverIndicator') {
              hoverIndicator = true;
            } else if (attribute?.name?.name === 'onClick') {
              onClick = true;
            }
          });
          if (hoverIndicator && !onClick)
            context.report({
              node: node,
              messageId: 'hoverindicator-onclick',
            });
        }
      },
    };
  },
};

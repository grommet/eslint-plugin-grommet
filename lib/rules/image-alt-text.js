/**
 * @fileoverview Rule to enforce alt attribute on Image
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
      description: 'enforce alt attribute on Image',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null,
    messages: {
      'image-alt-text':
        'Image requires alt text that is descriptive about what the image contains.',
    },
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (node?.openingElement?.name?.name === 'Image') {
          let alt = false;
          node.openingElement.attributes.forEach((attribute) => {
            if (attribute?.name?.name === 'alt') alt = true;
          });
          if (!alt)
            context.report({
              node: node,
              messageId: 'image-alt-text',
            });
        }
      },
    };
  },
};

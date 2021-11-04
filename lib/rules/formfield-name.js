/**
 * @fileoverview Rule to enforce name on FormField and its child input
 * @author Taylor Seamans
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Rule to enforce name on FormField and its child input',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null, // or "code" or "whitespace"
    messages: {
      'formfield-name':
        'Image requires alt text that is descriptive about what the image contains.',
    },
  },

  create: function (context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      JSXElement(node) {
        if (node.openingElement.name.name === 'FormField') {
          let matchingName;

          node.children.forEach((child) => {
            node?.openingElement?.attributes?.forEach((attribute) => {
              if (attribute?.name?.name === 'name') {
                if (
                  child.type === 'JSXElement' &&
                  child.openingElement.attributes
                ) {
                  child.openingElement.attributes.forEach((childAttribute) => {
                    if (
                      childAttribute?.name?.name === 'name' &&
                      childAttribute?.value?.value === attribute?.value?.value
                    ) {
                      matchingName = true;
                    }
                  });
                }
              }
            });
          });

          if (!matchingName)
            context.report({
              node: node,
              messageId: 'formfield-name',
            });
        }
      },
    };
  },
};

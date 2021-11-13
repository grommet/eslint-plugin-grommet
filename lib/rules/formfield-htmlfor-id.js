/**
 * @fileoverview Rule to enforce matching htmlFor and id on FormField and its child input, respectively
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
        'Rule to enforce matching htmlFor and id on FormField and its child input, respectively',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null, // or "code" or "whitespace"
    messages: {
      'formfield-htmlfor-id':
        'FormField requires `htmlFor` prop and its child input requires an `id` prop with matching value. This associates a FormField label with its input as is required for assistive technology.',
    },
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (node.openingElement.name.name === 'FormField') {
          let associatedLabel;

          node.children.forEach((child) => {
            node?.openingElement?.attributes?.forEach((attribute) => {
              if (attribute?.name?.name === 'htmlFor') {
                if (
                  child.type === 'JSXElement' &&
                  child.openingElement.attributes
                ) {
                  child.openingElement.attributes.forEach((childAttribute) => {
                    if (
                      childAttribute?.name?.name === 'id' &&
                      childAttribute?.value?.value === attribute?.value?.value
                    ) {
                      associatedLabel = true;
                    }
                  });
                }
              }
            });
          });

          if (!associatedLabel)
            context.report({
              node: node,
              messageId: 'formfield-htmlfor-id',
            });
        }
      },
    };
  },
};

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
    type: 'problem',
    docs: {
      description:
        'Rule to enforce matching htmlFor and id on FormField and its child input, respectively',
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/formfield-htmlfor-id.md',
    },
    fixable: null, // or "code" or "whitespace"
    messages: {
      'formfield-htmlfor-id': `FormField requires an 'htmlFor' prop and its child 
        input requires an 'id' prop with matching value. This associates a label with 
        its input and is required for assistive technology.`,
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

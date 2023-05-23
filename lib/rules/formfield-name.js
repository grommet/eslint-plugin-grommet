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
    type: 'problem',
    docs: {
      description: 'Rule to enforce name on FormField and its child input',
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/grommet/eslint-plugin-grommet/blob/master/docs/rules/formfield-name.md',
    },
    fixable: null, // or "code" or "whitespace"
    messages: {
      'formfield-name': `FormField requires a 'name' prop with a value matching the 
      'name' prop of its child input. Only form inputs with a 'name' attribute will 
      have their values passed when submitting a form.`,
    },
    schema: [],
  },

  create: function (context) {
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

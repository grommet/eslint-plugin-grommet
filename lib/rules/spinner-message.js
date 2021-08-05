/**
 * @fileoverview Rule to ensure message is applied to Spinner
 * @author Taylor Seamans
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Rule to ensure message is applied to Spinner",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null,
    messages: {
      "spinner-message":
        'Spinner requires message prop that is descriptive about what is being loaded. It will be announced by screen readers. Message can be string or object { start: "", end: ""}, where "start" is announced when the Spinner appears and "end" is announced when spinner closes.',
    },
  },

  create: function (context) {
    return {
      JSXElement(node) {
        if (node.openingElement.name.name === "Spinner") {
          let message = false;
          node.openingElement.attributes.forEach((attribute) => {
            if (attribute.name.name === "message") {
              message = true;
            }
          });
          if (!message)
            context.report({
              node: node,
              messageId: "spinner-message",
            });
        }
      },
    };
  },
};

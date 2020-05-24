// @ts-check
'use strict';

const { hasProp } = require('jsx-ast-utils');

/** @type import('eslint').Rule.RuleModule */
module.exports = {
  meta: {
    docs: {
      description: 'Forbid media element without an explicit size attributes',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [],
  },

  create(context) {
    return {
      JSXOpeningElement: (node) => {
        const onChange = hasProp(node.attributes, 'onChange');

        if (onChange) {
          context.report({
            node,
            message: `No onChange!`,
          });
        }
      },
    };
  },
};

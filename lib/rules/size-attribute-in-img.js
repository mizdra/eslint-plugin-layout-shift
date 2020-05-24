// @ts-check
'use strict';

const { hasProp } = require('jsx-ast-utils');

/** @type import('eslint').Rule.RuleModule */
module.exports = {
  meta: {
    docs: {
      description: 'Prevent missing width/height attributes in img tag.',
      category: 'Best Practices',
      recommended: true,
    },
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

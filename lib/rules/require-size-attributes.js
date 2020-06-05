// @ts-check

const { elementType, hasProp } = require('jsx-ast-utils');

const MEDIA_ELEMENTS = ['img'];

/** @type import('eslint').Rule.RuleModule */
module.exports = {
  meta: {
    docs: {
      description: 'Forbid media element without an explicit size attributes',
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/mizdra/eslint-plugin-layout-shift/blob/master/docs/rules/require-size-attributes.md',
    },
    schema: [],
  },

  create(context) {
    return {
      JSXOpeningElement: (node) => {
        const tagName = elementType(node);
        if (!MEDIA_ELEMENTS.includes(tagName)) return;

        const width = hasProp(node.attributes, 'width');
        const height = hasProp(node.attributes, 'height');

        if (width === false) {
          context.report({
            node,
            message: 'Missing an explicit `width` prop for media element',
          });
        }
        if (height === false) {
          context.report({
            node,
            message: 'Missing an explicit `height` prop for media element',
          });
        }
      },
    };
  },
};

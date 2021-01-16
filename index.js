const { SchemeParser } = require('./eason-parser.cjs.production.min')

module.exports = {
  // Map of hooks
  hooks: {},

  // Map of new blocks
  blocks: {
    eason: {
      process: function(block) {
        return '<pre>' + [
          new SchemeParser().buildSyntaxTree(block.body)
              .expandToEnd()].join('\n') + '</pre>'
      },
    },
  },

  // Map of new filters
  filters: {},
}

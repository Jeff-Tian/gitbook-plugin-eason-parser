const { SchemeParser } = require('./eason-parser.cjs.production.min')

module.exports = {
  // Map of hooks
  hooks: {},

  // Map of new blocks
  blocks: {
    eason: {
      process: function(block) {
        const define = new SchemeParser().buildSyntaxTree(`(define (A x y)
(cond ((= y 0) 0)
      ((= x 0) (* 2 y))
      ((= y 1) 2)
      (else (A (- x 1)
               (A x (- y 1))))))`)

        define.define()
        define.defineExplain()

        return '<pre>' +
            new SchemeParser().buildSyntaxTree(block.body)
                .expandToEnd().join('\n') + '</pre>'
      },
    },
  },

  // Map of new filters
  filters: {},
}

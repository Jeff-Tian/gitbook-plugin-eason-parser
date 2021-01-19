const plugin = require('./index')

describe('expand', () => {
  it('expands', () => {
    const res = plugin.blocks.eason.process({
      body: '(A 1 10)',
    })

    expect(res).toStrictEqual(`<pre>(A (- 1 1) (A 1 (- 10 1)))
(A 0 (A 1 9))
(A 0 (A (- 1 1) (A 1 (- 9 1))))
(A 0 (A 0 (A 1 8)))
(A 0 (A 0 (A (- 1 1) (A 1 (- 8 1)))))
(A 0 (A 0 (A 0 (A 1 7))))
(A 0 (A 0 (A 0 (A (- 1 1) (A 1 (- 7 1))))))
(A 0 (A 0 (A 0 (A 0 (A 1 6)))))
(A 0 (A 0 (A 0 (A 0 (A (- 1 1) (A 1 (- 6 1)))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 1 5))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A (- 1 1) (A 1 (- 5 1))))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 1 4)))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A (- 1 1) (A 1 (- 4 1)))))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 1 3))))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A (- 1 1) (A 1 (- 3 1))))))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 1 2)))))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A (- 1 1) (A 1 (- 2 1)))))))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 1 1))))))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 2)))))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (* 2 2)))))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 4))))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (* 2 4))))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (A 0 8)))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 (* 2 8)))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (A 0 16))))))
(A 0 (A 0 (A 0 (A 0 (A 0 (* 2 16))))))
(A 0 (A 0 (A 0 (A 0 (A 0 32)))))
(A 0 (A 0 (A 0 (A 0 (* 2 32)))))
(A 0 (A 0 (A 0 (A 0 64))))
(A 0 (A 0 (A 0 (* 2 64))))
(A 0 (A 0 (A 0 128)))
(A 0 (A 0 (* 2 128)))
(A 0 (A 0 256))
(A 0 (* 2 256))
(A 0 512)
(* 2 512)
1024</pre>`)
  })

  it('expands (A 0 n) as (* 2 n)', () => {
    const res = plugin.blocks.eason.process({ body: '(A 0 n)' })
    expect(res).toStrictEqual('<pre>(* 2 n)</pre>')
  })

  it('expands (A 1 n) as (A (-1 1) (A 1 (- n 1)))', () => {
    const res = plugin.blocks.eason.process({ body: '(A 1 n)' })
    expect(res).toStrictEqual('<pre>(A (- 1 1) (A 1 (- n 1)))</pre>')
  })
})

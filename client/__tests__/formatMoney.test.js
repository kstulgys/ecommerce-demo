import formatMoney from '../src/utils/formatMoney'
// const formatMoney = require('./src/utils/formatMoney')

describe('format money function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01')
    expect(formatMoney(40)).toEqual('$0.40')
  })

  it('formats the whole dollar', () => {
    expect(formatMoney(5000)).toEqual('$50')
    expect(formatMoney(100)).toEqual('$1')
  })

  it('formats fractional numbers', () => {
    expect(formatMoney(5025)).toEqual('$50.25')
    expect(formatMoney(109)).toEqual('$1.09')
  })
})

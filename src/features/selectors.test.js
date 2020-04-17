import { selectFirstList, selectLenOfInputs, doGoodArray } from './selectors'

describe('selectFirstList() in OutputDataTextareas', () => {
  it('get 2 array for compare and boolean, output changed first array without duplicates or empty string', () => {
    expect(selectFirstList(['4', '99'], ['1'], false)).toEqual('4\n99')
  })
  it('get 2 array for compare and boolean, output changed first array without duplicates or empty string', () => {
    expect(selectFirstList(['4.1', '99'], ['89', '4.1', '3'], false)).toEqual(
      '99'
    )
  })
  it('get 2 array for compare and boolean, output changed first array without duplicates or empty string', () => {
    expect(selectFirstList(['89', '4.1', '3'], ['4.1', '99'], false)).toEqual(
      '89\n3'
    )
  })
  it('get 2 array for compare and boolean, output changed first array without duplicates or empty string', () => {
    expect(
      selectFirstList(['89', '4.1', '3'], ['4.1', '3', '89'], false)
    ).toEqual('')
  })
  it('get 2 array for compare and boolean, output changed first array without duplicates or empty string', () => {
    expect(selectFirstList(['4', '99'], ['1'], true)).toEqual('')
  })
})

describe('selectLenOfInputs() in TwoLeftTextarea and OutputDataTextareas', () => {
  it('compute length of elements', () => {
    expect(selectLenOfInputs(' 4\n\n  99\n2  ')).toBe(3)
  })
  it('compute length of elements', () => {
    expect(selectLenOfInputs('0\n1\n2\n3\n4\n5\n6')).toBe(7)
  })
  it('compute length of elements', () => {
    expect(selectLenOfInputs('  9.6\n3\n88\n77.88\n9.6\n3\n88\n77.88')).toBe(8)
  })
})

describe('doGoodArray() in leftTextareaSlice', () => {
  it('must pass only number & string lines', () => {
    expect(doGoodArray('  ##\n foo\n\n  \n\nbar\n  777%  \n 77,88  ')).toEqual([
      'foo',
      'bar',
      '777%',
      '77.88',
    ])
  })
  it('must pass only number & string lines', () => {
    expect(doGoodArray('9.6\n3\n88\n77.88')).toEqual([
      '9.6',
      '3',
      '88',
      '77.88',
    ])
  })
})

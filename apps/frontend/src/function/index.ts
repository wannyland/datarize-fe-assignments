/**
 *
 * @What 쿼리 스트링 핸들러
 */
export const createUrlParam = (data: any) => {
  let form = ['?']
  for (let i in data) {
    if (data[i] !== undefined && data[i] !== null) form.push(`${i}=${data[i]}&`)
  }
  const result = form.toString().replace(/,/g, '').slice(0, -1)
  return result
}

/**
 *
 * @What 1000 => 1,000 으로 표기
 */
export const addNumberComma = (n?: number): string => {
  if (!n) return '0'

  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

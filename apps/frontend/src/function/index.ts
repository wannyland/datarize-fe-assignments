/**
 *
 * @HOW 쿼리 스트링 핸들러
 */
export const createUrlParam = (data: any) => {
  let form = ['?']
  for (let i in data) {
    if (data[i] !== undefined && data[i] !== null) form.push(`${i}=${data[i]}&`)
  }
  const result = form.toString().replace(/,/g, '').slice(0, -1)
  return result
}

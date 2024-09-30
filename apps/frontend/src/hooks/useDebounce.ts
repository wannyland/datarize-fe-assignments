import { useRef } from 'react'

/**
 * 
 * @param callback: 호출될 함수. 여러 매개변수를 받을 수 있음.
          time: 디바운스 대기 시간(밀리초 단위). 
 */
function useDebounce<T extends any[]>(callback: (...params: T) => void, time: number) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  return (...params: T) => {
    if (timer.current) clearTimeout(timer.current)

    timer.current = setTimeout(() => {
      callback(...params)
      timer.current = null
    }, time)
  }
}

export default useDebounce

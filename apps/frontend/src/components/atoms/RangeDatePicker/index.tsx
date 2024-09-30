import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface DatePickerProps {
  defaultValue?: string | null
  getDate?: (start: string | null, end: string | null) => void
}

const RangeDatePicker = ({ defaultValue, getDate }: DatePickerProps) => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  // 날짜를 YYYY-MM-DD 형식으로 변환하는 함수
  const formatDate = (date: Date | undefined): string | null => {
    return date ? format(date, 'yyyy-MM-dd') : null
  }

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates

    if (start) {
      setStartDate(start)

      // 시작날짜를 선택하면 마지막 날짜 초기화
      setEndDate(undefined)
    }

    if (end) {
      setEndDate(end)
    }
  }

  useEffect(() => {
    // 기간 선택이기 때문에 동시에 공존할 때만 데이터 전달
    if (startDate && endDate) {
      getDate && getDate(formatDate(startDate), formatDate(endDate))
    }
  }, [startDate, endDate])

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat={'yyyy-MM-dd'}
        startDate={startDate}
        endDate={endDate}
        minDate={new Date(2000, 0, 1)} // 시작 가능 날짜 제한 (예: 2000-01-01)
        maxDate={new Date()} // 오늘 날짜를 최대 날짜로 제한
        placeholderText="날짜를 선택해 주세요."
        selectsRange
      />
    </>
  )
}

export default RangeDatePicker

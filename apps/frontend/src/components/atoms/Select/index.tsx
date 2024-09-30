interface Props {
  options: string[]
  getValue: (e: string) => void
}

const Select = ({ options, getValue }: Props) => {
  const onChange = (e: string) => {
    getValue && getValue(e)
  }
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map((_, i) => {
        return (
          <option key={`select_option_${i}`} value={_}>
            {_ === 'desc' ? '내림차순' : '오름차순'}
          </option>
        )
      })}
    </select>
  )
}

export default Select

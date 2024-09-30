import { FastOmit } from 'styled-components'
import { IStyledComponentBase } from 'styled-components/dist/types'

// div 타입 선언
export type StyledDivElementType = IStyledComponentBase<
  'web',
  FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>
> &
  string

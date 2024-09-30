import { StyledWhiteBoardHead } from './index.styled'

interface Props {
  title: string
  children?: React.ReactNode
}

const WhiteBoardTitle = ({ title, children }: Props) => {
  return (
    <StyledWhiteBoardHead.Container>
      <StyledWhiteBoardHead.Wrapper>
        <StyledWhiteBoardHead.Title>{title}</StyledWhiteBoardHead.Title>
      </StyledWhiteBoardHead.Wrapper>
      {children && <StyledWhiteBoardHead.Wrapper>{children}</StyledWhiteBoardHead.Wrapper>}
    </StyledWhiteBoardHead.Container>
  )
}

export default WhiteBoardTitle

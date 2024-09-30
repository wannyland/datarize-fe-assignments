import { useRecoilState } from 'recoil'
import { initMenuState } from '../../../recoil/atom/menu'
import { StyledMenu } from './index.styled'

const Menu = () => {
  const [menuState, setMenuState] = useRecoilState(initMenuState)

  const menuHandler = (_: string) => {
    setMenuState(_)
  }

  return (
    <StyledMenu.Container>
      <StyledMenu.Section>
        <StyledMenu.Wrapper>
          <StyledMenu.Title $isActive={menuState === 'purchase'} onClick={() => menuHandler('purchase')}>
            고객 구매 빈도
          </StyledMenu.Title>
          <StyledMenu.Title $isActive={menuState === 'members'} onClick={() => menuHandler('members')}>
            고객 목록
          </StyledMenu.Title>
        </StyledMenu.Wrapper>
      </StyledMenu.Section>
    </StyledMenu.Container>
  )
}

export default Menu

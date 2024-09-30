import { Outlet } from 'react-router-dom'
import Menu from '../../atoms/Menu'
import { StyledOutlet } from './index.styled'

const Dashboard = () => {
  return (
    <main id="globalMain">
      <Menu />
      <div id="outlet">
        <StyledOutlet.Content>
          <Outlet />
        </StyledOutlet.Content>
      </div>
    </main>
  )
}

export default Dashboard

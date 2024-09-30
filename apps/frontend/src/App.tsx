import { Outlet } from 'react-router-dom'
import { GlobalStyle } from './theme/GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  )
}

export default App

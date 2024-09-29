import { Outlet } from 'react-router-dom'
import { GlobalStyle } from './theme/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  )
}

export default App

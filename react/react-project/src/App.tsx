
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from "./components/usecontext/ThemeContext"; 
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div style= {{ padding: 24 }}>
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default App

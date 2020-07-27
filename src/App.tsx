import React from 'react'
import { Header } from './components/HeaderComponent/Header'
import { Sidebar } from './components/SidebarComponent/Sidebar'

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className='container'>
        <div className='main'>
          <Sidebar />

        </div>
      </div>
    </div>
  )
}

export default App

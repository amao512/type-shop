import React from 'react'
import { Header } from './components/HeaderComponent/Header'
import Sidebar from './components/SidebarComponent/Sidebar'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Category from './pages/category'

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className='container'>
        <div className='main'>
          <Sidebar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:category' component={Category} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App

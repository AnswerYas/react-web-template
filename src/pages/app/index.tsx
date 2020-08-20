import React from 'react'
import './index.less'
import Logo from '../../assets/icons/logo.svg'
const App = () => {
    return (
        <div className="app">
            <img src={Logo} className="app-logo" alt="logo" />
            <h1>react template</h1>
        </div>
    )
}

export default App

import React from 'react'
import { render } from 'react-dom'
import routers from '@/routers'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import 'normalize.css'
import './style/common.less'

const history = createBrowserHistory()
const App = () => <Router history={history}>{routers()}</Router>

render(<App />, document.querySelector('#root'))

if (module.hot) {
    module.hot.accept()
}

import React from 'react'
import ReactDOM from 'react-dom'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import client from './client'
import NavBar from './components/navigation/NavBar'
import SearchField from './components/search/SearchField'
import SignUp from './components/navigation/SignUp'
import ItemList from './components/item/ItemList'
import ModalConductor from './components/modal/ModalConductor'

// import TestModal from './components/TestModal'

import { Button, Pane, Text, Heading } from 'evergreen-ui'
import './styles.css'
import 'tachyons'

// <ModalConductor />
function App() {
  return (
    <div className="App">
      <Router>
        <>
          <NavBar />
          <SearchField />
          <Switch>
            <Route exact path="/" component={ItemList} />
            <Route exact path="/token/:token" component={SignUp} />
          </Switch>
        </>
      </Router>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement,
)

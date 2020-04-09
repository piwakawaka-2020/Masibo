import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'

import Shape1 from './Shape1'
import Shape2 from './Shape2'

const App = () => {
  return (
    <>
    <Router>
      <h1>React development has begun!</h1>
      <Route path="/" component={Shape1} />
      <Route path="/" component={Shape2}/>
    </Router>
    </>
  )
}



export default App

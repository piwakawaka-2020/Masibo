import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'

import Shape1 from './Shape1'
import Ellipse2 from './Ellipse2'
import Triangle from './Triangle'

const App = () => {
  return (
    <>
    <Router>
      <h1>React development has begun!</h1>
      <Route path="/" component={Shape1} />
      <Route path="/" component={Ellipse2}/>
      <Route path="/" component={Triangle}/>
    </Router>
    </>
  )
}



export default App

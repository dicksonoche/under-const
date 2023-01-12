import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Soon from './soon'

const App = () => {
  return <>

    <div className='app'>
      <Router>
        <Routes>
          <Route index element={<Soon />} />
        </Routes>
      </Router>
    </div>
  </>
}

export default App
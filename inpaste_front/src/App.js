import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';

import Home from './Home'
import Contact from './contact'
import Pastepage from './pastepage'
import ShowPaste from './showpaste'

// import P404 from './P404'







function App() {
  return (  
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}  /> 
        {/* <Route path="/PastePage" element={<Pastepage />} /> */}
        <Route path="/PastePage/:id" element={<ShowPaste />} />

        {/* <Route path="*" element={<P404 />} />  */}
      </Routes>
    </Router>
 );
}
export default App;

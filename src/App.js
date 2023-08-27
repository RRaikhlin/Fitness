import React from 'react';

import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ResultComponentWrapper from './components/ResultComponentWrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/result/:selectedItems" element={<ResultComponentWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;

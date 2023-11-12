import React from 'react';
import { BrowserRouter as Router, Routes, Route} from'react-router-dom';
import Login from "./Pages/Login";


function App() {
  return (
    <Router>
      <Routes>
        
        {/* ---- 로그인 페이지 ---- */}
        <Route path = '/' element={<Login/>} />




      </Routes>
    </Router>
  );
}

export default App;


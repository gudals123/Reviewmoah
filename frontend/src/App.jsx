import React from 'react';
import { BrowserRouter as Router, Routes, Route} from'react-router-dom';
import Login from "./Pages/Login";
import LoginSuccessful from "./Pages/LoginSuccessful";

function App() {
  return (
    <Router>
      <Routes>
        
        {/* ---- 로그인 페이지 ---- */}
        <Route path = '/' element={<Login/>} />

        <Route path = '/LoginSuccessful' element={<LoginSuccessful/>} />



      </Routes>
    </Router>
  );
}

export default App;


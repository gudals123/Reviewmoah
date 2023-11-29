import React from 'react';
import { BrowserRouter as Router, Routes, Route} from'react-router-dom';
import Login from "./Pages/Login";
import LoginSuccessful from "./Pages/LoginSuccessful";
import Api_test from "./Pages/api_test";
import Main from "./Pages/Main";
import Mypage from "./Pages/Mypage";

function App() {
  return (
    <Router>
      <Routes>
        
        {/* ---- 로그인 페이지 ---- */}
        <Route path = '/' element={<Login/>} />

        <Route path = '/LoginSuccessful' element={<LoginSuccessful/>} />
        <Route path = '/Api_test' element={<Api_test/>} />
        <Route path = '/Main' element={<Main/>} />
        <Route path = '/Mypage' element={<Mypage/>} />

      </Routes>
    </Router>
  );
}

export default App;


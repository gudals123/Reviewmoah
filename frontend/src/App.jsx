import React from 'react';
import { BrowserRouter as Router, Routes, Route} from'react-router-dom';
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";
import Main from "./Pages/Main";
import Mypage from "./Pages/Mypage";
import Userpage from "./Pages/Userpage";
import PlusReviewAdd from "./Pages/PlusReviewAdd";
import ReviewAdd from "./Pages/ReviewAdd";

function App() {
  return (
    <Router>
      <Routes>
        
        {/* ---- 로그인 페이지 ---- */}
        <Route path = '/' element={<Login/>} />
        <Route path = '/SingUp' element={<SingUp/>} />
        <Route path = '/Main' element={<Main/>} />
        <Route path = '/Mypage' element={<Mypage/>} />
        <Route path = '/Userpage' element={<Userpage/>} />
        <Route path = '/PlusReviewAdd' element={<PlusReviewAdd/>} />
        <Route path = '/ReviewAdd' element={<ReviewAdd/>} />

      </Routes>
    </Router>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route} from'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Main from "./Pages/Main";
import Mypage from "./Pages/Mypage";
import Userpage from "./Pages/Userpage";
import PlusReviewAdd from "./Pages/PlusReviewAdd";
import ReviewAdd from "./Pages/ReviewAdd";

function App() {
  const access = localStorage.getItem("userID");


  return (
    <Router>
      <Routes>
        
        {/* ---- 로그인 페이지 ---- */}
        <Route path = '/' element={<Login/>} />
        <Route path = '/SignUp' element={<SignUp/>} />

    
        <Route path = '/Main' element={<PrivateRoute authenticated={access} component={<Main/>}/>} />
        <Route path = '/Mypage' element={<PrivateRoute authenticated={access} component={<Mypage/>}/>} />
        <Route path = '/Userpage' element={<PrivateRoute authenticated={access} component={<Userpage/>}/>} />
        <Route path = '/PlusReviewAdd' element={<PrivateRoute authenticated={access} component={<PlusReviewAdd/>}/>} />
        <Route path = '/ReviewAdd' element={<PrivateRoute authenticated={access} component={<ReviewAdd/>}/>} />

      </Routes>
    </Router>
  );
}

export default App;


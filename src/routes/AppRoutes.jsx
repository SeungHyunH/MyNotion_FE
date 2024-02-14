import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import KakaoRedirect from "../pages/KakaoRedirect";
import NaverRedirect from "../pages/NaverRedirect";
import Join from "../pages/Join";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute element={<Home />} />} />
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/join" element={<PublicRoute element={<Join />} />} />
        <Route path="/oauth/kakao" element={<PublicRoute element={<KakaoRedirect />} />} />
        <Route path="/oauth/naver" element={<PublicRoute element={<NaverRedirect />} />} />
        {/* <Route path="/admin" element={<PrivateRoute element={<AdminDashboard />} />} /> */}
      </Routes>
    </Router>
  );
}
export default AppRoutes;

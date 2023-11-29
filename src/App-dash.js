import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/login-dash";
import ResentPasswordDash from "./page/resentPassword-dash";
import Dashbord from "./page/dashboard";
import ForfetPasswordDash from "./page/forgetpassword-dash";
import MainLayout from "./component/mainLayout";
function AppDash() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset-password" element={<ResentPasswordDash />} />
          <Route path="/forget-password" element={<ForfetPasswordDash />} />
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashbord />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppDash;

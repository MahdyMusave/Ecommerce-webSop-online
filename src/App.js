import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/layout";
import Home from "./page/home";
import OurStore from "./page/ourStore";
import Blog from "./page/blog";
import Contact from "./page/contact";
import CompareProduct from "./page/compareProduct";
import Login from "./page/login";
import SignUp from "./page/signup";
import WhishList from "./page/whishList";
import ForgotPassword from "./page/forgotPassword";
import ResetPassword from "./page/resetPassword";
import SingleBlog from "./page/singleBlog";
import SingleProduct from "./page/singleproduct";
import Cart from "./page/cart";
import CheckOut from "./page/checkOut";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="store" element={<OurStore />} />
            <Route path="store/:id" element={<SingleProduct />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/check-out" element={<CheckOut />} />
            <Route path="/compare-product" element={<CompareProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/whish-List" element={<WhishList />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

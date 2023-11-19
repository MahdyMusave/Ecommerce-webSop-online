import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/layout";
import Home from "./page/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

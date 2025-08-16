import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Wrapper from "./pages/Wrapper.jsx";

function App() {
  return(
    <HashRouter>
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />

        {/* register */}
        <Route path="/register" element={<Register />} />

        {/* login */}
        <Route path="/login" element={<Login />} />

        {/* dashboard */}
        <Route path="/dashboard" element={
          <Wrapper>
            <Dashboard />
          </Wrapper>} />

      </Routes>
    </HashRouter>
    );
}

export default App;

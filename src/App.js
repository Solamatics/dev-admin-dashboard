import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/users" element={<List />} />
          <Route exact path="/users/:userId" element={<Single />} />
          <Route exact path="/users/new" element={<New />} />
          <Route path="products">
            <Route index element={<List />}></Route>
            <Route path=":productId" element={<Single />}></Route>
            <Route path="new" element={<New />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

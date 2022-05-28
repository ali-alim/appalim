import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Form from "./components/Form";
import Answers from "./pages/Answers";
import Home from "./pages/Home";

function App() {
  const [usersInfo, setUsersInfo] = useState([]);

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/form"
          element={<Form usersInfo={usersInfo} setUsersInfo={setUsersInfo} />}
        />
        <Route path="/answers" element={<Answers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

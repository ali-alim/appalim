import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Form from "./components/Form";
import Answers from "./pages/Answers";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route
          path="/form"
          // element={<Form usersInfo={usersInfo} setUsersInfo={setUsersInfo} />}
          element={<Form />}
        />
        <Route path="/answers" element={<Answers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

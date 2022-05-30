import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dream from "./components/Dream";
import Form from "./components/Form";
import Task from "./components/Task";
import Visit from "./components/Visit";
import Answers from "./pages/Answers";
import Dreams from "./pages/Dreams";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Visits from "./pages/Visits";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/task" element={<Task />} />
          <Route path="/tasks" element={<Tasks />} />

          <Route path="/dream" element={<Dream />} />
          <Route path="/dreams" element={<Dreams />} />

          <Route path="/visit" element={<Visit />} />
          <Route path="/visits" element={<Visits />} />
          <Route
            path="/form"
            // element={<Form usersInfo={usersInfo} setUsersInfo={setUsersInfo} />}
            element={<Form />}
          />
          <Route path="/answers" element={<Answers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

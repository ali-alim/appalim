import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dream from "./components/Dream";
import Form from "./components/Form";
import Task from "./components/Task";
import Training from "./components/Training";
import Visit from "./components/Visit";
import Finance from "./components/Finance";
import Answers from "./pages/Answers";
import Dreams from "./pages/Dreams";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Trainings from "./pages/Trainings";
import Finances from "./pages/Finances";
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

          <Route path="/training" element={<Training />} />
          <Route path="/trainings" element={<Trainings />} />

          <Route path="/finance" element={<Finance />} />
          <Route path="/finances" element={<Finances />} />

          <Route
              path="/tasks/:id"
              element={<Task editMode={true} />}
            />

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

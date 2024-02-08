import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}>
          {/* <Route index element={<Navigate to="/home" />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

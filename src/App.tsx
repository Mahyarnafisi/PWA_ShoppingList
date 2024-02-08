import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Layouts/Header/Header";
import AddPage from "./components/Layouts/Main/AddPage/AddPage";
import InfoPage from "./components/Layouts/Main/InfoPage/InfoPage";
import ListPage from "./components/Layouts/Main/ListPage/ListPage";
import Navbar from "./components/Layouts/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}>
          <Route index element={<Navigate to="list" />} />
          <Route path="list" element={<ListPage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="info" element={<InfoPage />} />
        </Route>
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;

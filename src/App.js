import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charts from "./pages/Charts";
import Collections from "./pages/Collections";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

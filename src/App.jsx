import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { Layout } from "./components/layout/Layout";



function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal con el layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Ruta para Home */}
         
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

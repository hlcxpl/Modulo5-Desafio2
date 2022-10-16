// Styles
import "./styles.css";
// Routes 
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Hooks
import { useState, useEffect } from "react";
import Context from "./Context"
// Components
import Navbar from "./components/Navbar";
// Views
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";


export default function App() {

  const [galeria, setGaleria] = useState([])
  const globalState = {galeria, setGaleria }
 

  useEffect(() => {
    apiFotos()
  }, [])

  async function apiFotos() { 
    const endpoint = "/fotos.json";
    const resp = await fetch(endpoint)
    const data = await resp.json()
    setGaleria(data.photos)
  }

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

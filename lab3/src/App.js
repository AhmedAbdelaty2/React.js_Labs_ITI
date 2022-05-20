import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Artists/Home";
import Artists from "./Artists/ArtistsList";
import ArtistDetails from "./Artists/ArtistDetails";
import Error from "./core/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<ArtistDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

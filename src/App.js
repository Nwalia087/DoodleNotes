import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/NoteState";
import YourNotes from "./components/YourNotes";
import AddNewNote from "./components/AddNewNote";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container contentcontainer my-3" style={{maxWidth:"1290px"}}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route path="/your-notes" element={<YourNotes />} />
              <Route path="/add-new-note" element={<AddNewNote />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/noteState";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert message = 'This is an alert'/>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;

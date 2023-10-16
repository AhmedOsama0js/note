import { Routes, Route,BrowserRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Note from "./pages/Note/Note";
import CreateNote from "./pages/CreateNots/CreateNote";
import EditNote from "./pages/EditNote/EditNote";

import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[]);


  useEffect(() => {
    localStorage.setItem('notes' , JSON.stringify(notes))
  },[notes])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Note notes={notes} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App


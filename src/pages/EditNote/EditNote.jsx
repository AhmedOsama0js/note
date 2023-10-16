import "./EditNote.css"

import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { Link ,useParams , useNavigate} from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import useCreateDate from "../../Hooks/useCreateDate";



const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams()
  const note = notes.find((item) => item.id === id);

  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate()
  const navigate = useNavigate()

  const handleData = () => {
    if (title && details) {
      const newNote = { ...note, title, details, date }
      
      const newNotes = notes.map(item => {
        if (item.id === id) {
          item = newNote
        }
        return item
      })
      setNotes(newNotes);
    }
    navigate("/")
  }

  const handleDelete = () => {
    const newNotes = notes.filter(item => item.id !== id)
    setNotes(newNotes);
    navigate("/")
  }

  return (
    <div>
      <div className="Header-create-note  bg-dark ">
        <div className="container header py-2">
          <Link to="/">
            <button
              type="button"
              title="back"
              className="btn btn-secondary fs-3 rounded-4 border-0"
            >
              <IoIosArrowBack />
            </button>
          </Link>
          <button
            onClick={handleDelete}
            type="button"
            title="back"
            className="btn btn-danger fs-3 rounded-4 border-0"
          >
            <AiOutlineDelete />
          </button>

          <button
            onClick={handleData}
            type="button"
            title="back"
            className="btn btn-success fs-3 rounded-4 border-0"
          >
            save
          </button>
        </div>
      </div>
      <div className="body-create-note bg-dark text-light">
        <div className="container">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-dark text-light border-0 fs-2 w-100 my-3 px-2"
            type="text"
            placeholder="Title..."
          />
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="bg-dark text-light border-0 w-100 h-100 mt-2 px-2"
            rows="20"
            placeholder="Note details"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

EditNote.propTypes = {
  notes: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
};


export default EditNote

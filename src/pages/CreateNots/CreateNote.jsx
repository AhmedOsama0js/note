
import "./CreateNote.css"
import { IoIosArrowBack } from "react-icons/io";
import { Link , useNavigate} from "react-router-dom";
import { useState } from "react"; 
import { v4 as uuid } from "uuid";
import useCreateDate from "../../Hooks/useCreateDate";
import PropTypes from "prop-types";


const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
const navigate = useNavigate();
  const handleSubmit = () => {
    if (title && details) {
      const note = { id: uuid(), title, details, date };
      setNotes(prevNotes => [note,...prevNotes])
    }
    navigate("/note");
  };

  return (
    <>
      <div className="Header-create-note  bg-dark ">
        <div className="container header py-2">
          <Link to="/note">
            <button
              type="button"
              title="back"
              className="btn btn-secondary fs-3 rounded-4 border-0 d-flex p-3"
            >
              <IoIosArrowBack />
            </button>
          </Link>
          <button
            onClick={() => {
              handleSubmit();
            }}
            type="button"
            title="save"
            className="btn btn-success fs-3 rounded-4 border-0 d-flex p-2"
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
            rows="18"
            placeholder="Note details"
          ></textarea>
        </div>
      </div>
    </>
  );
};
CreateNote.propTypes = {
  setNotes: PropTypes.func.isRequired,
};


export default CreateNote;

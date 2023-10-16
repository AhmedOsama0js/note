
import "./NoteItemCard.css";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const NoteItemCard = ({note}) => {
  return (
    <>
      <Link to={`/edit-note/${note.id}`}>
        <div className="card">
          <h4>
            {note.title.length > 20
              ? note.title.substr(0,18) + " ..."
              : note.title}
          </h4>
          <p>{note.date}</p>
        </div>
      </Link>
    </>
  );
};

NoteItemCard.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteItemCard;

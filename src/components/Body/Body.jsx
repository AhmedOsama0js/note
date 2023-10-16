import "./Body.css"

import NoteItemCard from "../NoteItemCard/NoteItemCard";
import PropTypes from "prop-types";
const Body = ({notes}) => {

  return (
    <section className="h-100 bg-dark text-light">
      <div className="container body">
        {notes.map((note) => (
          <NoteItemCard key={note.Id} note={note} />
        ))}
      </div>
    </section>
  );
}
Body.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default Body

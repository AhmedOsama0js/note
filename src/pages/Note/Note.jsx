import "./Note.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Body from "../../components/Body/Body";

import PropTypes from "prop-types";
import { useState } from "react";

const Note = ({ notes }) => {
  const [filter,setFilter] = useState(notes)
  return (
    <>
      <Header notes={notes} setFilter={setFilter} />
      <Body notes={filter} />
      <Footer />
    </>
  );
};
Note.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default Note;

import { useEffect, useState } from "react";
import "./Header.css";
import { BiSearch } from "react-icons/bi";

import PropTypes from "prop-types";

const Header = ({ notes, setFilter }) => {
  const [text, setText] = useState("");
  const [, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    const lowerSearchText = text.toLowerCase();
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(lowerSearchText)
    );
    setFilteredNotes(filtered);
    setFilter(filtered.length >= 1 ? filtered : notes);
  };

    const handleSubmit = (e) => {
      e.preventDefault(); 

      handleSearch(); 
  };
  
  useEffect(() => {
    handleSearch();
  }, [text]);

  return (
    <header>
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
        <div className="container header">
          <h2 className="navbar-brand fs-2">My Notes</h2>
          <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-secondary fs-5"
              type="button"
              onClick={handleSearch}
            >
              <BiSearch />
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  notes: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Header;

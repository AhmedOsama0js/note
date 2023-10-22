
import {  BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <Link to="/create-note">
          <button
            title="Add"
            type="button"
            className="btn btn-secondary fs-3 rounded-4 d-flex p-3"
          >
            <BiPlus />
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;

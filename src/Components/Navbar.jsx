//type rfce and it autocompletes
import React from 'react'

//to get an image from assets, it's
import Logo from "../assets/name.png"

import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };

    return (
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} />
          <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/resume"> Experience </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/resume"> Experience </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    );
  }
  

export default Navbar
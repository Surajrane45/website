import React, { useState, useRef } from 'react';
import { NavLink as Link } from "react-router-dom";

import { useOnClickedOutside } from '../../hooks/useOnClickedOutside.js';

const NavDropdown = props => {
  const [isOpen, toggle] = useState(false);
  const { items } = props;

  const ref = useRef();
  useOnClickedOutside(ref, () => toggle(false));

  return (
    <div className={`dropdown ${isOpen ? 'show' : ''}`} ref={ref}>
      <Link
        href='#'
        className="nav-item nav-link dropdown-toggle"
        id="companyDropdownMenu"
        data-toggle="dropdown"
        aria-haspopup="true"
        onClick={() => toggle(!isOpen)}
        aria-expanded={isOpen}>
        Company
      </Link>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="companyDropdownMenu">
        {
          items.map(item => {
            return item.otherDomain
              ? <a href={item.url} className="dropdown-item">{item.title}</a>
              : <Link to={item.url}
                className="dropdown-item"
                key={item.id}

                onClick={() => toggle(!isOpen)}
              >{item.title}</Link>
          })
        }
      </div>
    </div>
  )
}

export default NavDropdown;
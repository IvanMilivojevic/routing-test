import React from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

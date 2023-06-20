import { Component } from "react";
import "./navbar.css";
import { MenuItems } from "./MenuItems";
import logo from "../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import React, { useState } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/">
          <img src={logo} className="navbar-logo" alt="logo"></img>
        </Link>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
        </div>

        <ul
          className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          {/* <button>Request Briefing</button> */}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

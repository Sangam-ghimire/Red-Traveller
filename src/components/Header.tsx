import Logo from "../components/Logo";
import "../styles/Navbar.css";

import AboutBackground from "../assets/images/About.jpg";
import HomeBackground from "../assets/images/HomeBackground.jpg";
import DestinationBackground from "../assets/images/DestinationbackgroundNav.jpg";
import React from "react";
import { NavLink } from "react-router-dom";
// const navLinks = [
//   {
//     id: 0,
//     title: `Home`,
//     path: `/`,
//     activeStyle: {
//       textDecoration: `none`,
//       color: `black`,
//       backgroundImage: `url(${HomeBackground})`,
//       backgroundSize: `contain`,
//     },
//     notactiveStyle: {
//       textDecoration: `none`,
//     },
//   },
//   {
//     id: 1,
//     title: `About`,
//     path: `/aboutus`,
//     activeStyle: {
//       textDecoration: `none`,
//       color: `red`,
//       backgroundImage: `url(${AboutBackground})`,
//       backgroundSize: `contain`,
//     },
//     notactiveStyle: {
//       textDecoration: `none`,
//     },
//   },
//   {
//     id: 2,
//     title: `Destination`,
//     path: `/destinations`,
//     activeStyle: {
//       textDecoration: `none`,
//       color: `pink`,
//       backgroundImage: `url(${DestinationBackground})`,
//       backgroundSize: `contain`,
//     },
//     notactiveStyle: {
//       textDecoration: `none`,
//     },
//   },
//   {
//     id: 3,
//     title: `Tips`,
//     path: `/tips`,
//     activeStyle: {
//       textDecoration: `none`,
//       color: `blue`,
//       backgroundImage: `url(${AboutBackground})`,
//       backgroundSize: `contain`,
//     },
//     notactiveStyle: {
//       textDecoration: `none`,
//     },
//   },
//   {
//     id: 4,
//     title: `Contact Us`,
//     path: `/contact`,
//     activeStyle: {
//       textDecoration: `none`,
//       color: `brown`,
//       backgroundImage: `url(${HomeBackground})`,
//       backgroundSize: `contain`,
//     },
//     notactiveStyle: {
//       textDecoration: `none`,
//     },
//   },
// ];

const Header = () => {
  const navLinks = [
    {
      id: 0,
      title: `Home`,
      path: `/`,
      activeStyle: {
        textDecoration: `none`,
        color: `white`,
        backgroundSize: `contain`,
      },
      notactiveStyle: {
        textDecoration: `none`,
      },
    },
    {
      id: 1,
      title: `About`,
      path: `/aboutus`,
      activeStyle: {
        textDecoration: `none`,
        color: `white`,
        backgroundSize: `contain`,
      },
      notactiveStyle: {
        textDecoration: `none`,
      },
    },
    {
      id: 2,
      title: `Destination`,
      path: `/destinations`,
      activeStyle: {
        textDecoration: `none`,
        color: `white`,

        backgroundSize: `contain`,
      },
      notactiveStyle: {
        textDecoration: `none`,
      },
    },
    {
      id: 3,
      title: `Tips`,
      path: `/tips`,
      activeStyle: {
        textDecoration: `none`,
        color: `white`,

        backgroundSize: `contain`,
      },
      notactiveStyle: {
        textDecoration: `none`,
      },
    },
    {
      id: 4,
      title: `Contact Us`,
      path: `/contact`,
      activeStyle: {
        textDecoration: `none`,
        color: `white`,
        backgroundSize: `contain`,
      },
      notactiveStyle: {
        textDecoration: `none`,
      },
    },
  ];

  return (
    <div>
      <div className="Navbar">
        <div className="NavComponents">
          <div className="Logo">
            <Logo />
          </div>
          {/* <ul className="list">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/destinations" style={{ textDecoration: "none" }}>
                Destination
              </NavLink>
            </li>
            <li>
              <NavLink to="/tips" style={{ textDecoration: "none" }}>
                Tips
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={{ textDecoration: "none" }}>
                Contact
              </NavLink>
            </li>
          </ul> */}
          <div>
            <ul className="list">
              {navLinks.map(
                ({
                  id,
                  title,
                  path,
                  activeStyle,
                  notactiveStyle,
                }): JSX.Element => {
                  return (
                    <li key={title}>
                      <NavLink
                        to={path}
                        key={title}
                        style={({ isActive }) =>
                          isActive ? activeStyle : notactiveStyle
                        }
                      >
                        {title}
                      </NavLink>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

//   ( isActive:Boolean ) =>
//   ({
//     backgroundImage: {isActive} ? `url(${bgI})` : `url("")`,
//     backgroundSize: {isActive} ? "cover" : " ",
//     backgroudnRepeat: {isActive} ? "no-repeat" : "",
//   })
// {{
//                     backgroundImage: `url${bgI}`,
//                     backgroundColor: "red",
//                   }}

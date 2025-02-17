import { NavLink } from "react-router-dom";

function NavLinks() {
  const navlinksStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "2rem",
    listStyle: "none",
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0%",
    color: " #2E2E2E",
  };

  return (
    <nav>
      <ul style={navlinksStyle}>
        <li>
          <NavLink to="/menu">MENU</NavLink>
        </li>
        <li>
          <NavLink to="/location">LOCATION</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;

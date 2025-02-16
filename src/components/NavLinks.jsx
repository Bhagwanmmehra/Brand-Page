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
    <ul style={navlinksStyle}>
      <li>
        <a href="#">MENU</a>
      </li>
      <li>
        <a href="#">LOCATION</a>
      </li>
      <li>
        <a href="#">ABOUT</a>
      </li>
      <li>
        <a href="#">CONTACT</a>
      </li>
    </ul>
  );
}

export default NavLinks;

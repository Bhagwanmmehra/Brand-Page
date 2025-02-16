import Logo from "../components/Logo";
import NavLinks from "../components/NavLinks";
import Login from "../components/Login";

function NavBar() {
  const navStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 5rem",
    padding: "0.1rem 0",
  };
  return (
    <div style={navStyle}>
      <Logo />
      <NavLinks />
      <Login />
    </div>
  );
}

export default NavBar;

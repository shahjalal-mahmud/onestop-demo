import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        ONE STOP WHOLE MARKET
      </div>
      <div style={styles.links}>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/about" style={styles.link}>About</NavLink>
        <NavLink to="/team" style={styles.link}>Team</NavLink>
        <NavLink to="/contact" style={styles.link}>Contact</NavLink>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 6px rgba(0,0,0,0.08)"
  },
  logo: {
    fontWeight: "700",
    fontSize: "18px"
  },
  links: {
    display: "flex",
    gap: "24px"
  },
  link: {
    fontWeight: "500"
  }
};

export default Navbar;

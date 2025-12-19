const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>
        © {new Date().getFullYear()} ONE STOP LIQUOR AND WHOLE MARKET | SVK GROUP LLC
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#111827",
    color: "white",
    textAlign: "center",
    padding: "20px",
    marginTop: "60px"
  }
};

export default Footer;

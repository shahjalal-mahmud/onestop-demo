const PageHeader = ({ title, subtitle }) => {
  return (
    <div style={styles.wrapper}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "#111827",
    color: "white",
    padding: "80px 20px",
    textAlign: "center"
  }
};

export default PageHeader;

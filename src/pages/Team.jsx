import PageHeader from "../components/PageHeader";

const Team = () => {
  const members = [
    { name: "Ashvin Kumar Savalia", role: "Chief Executive Officer" },
    { name: "Poojan Vachhani", role: "Managing Director" },
    {
      name: "Abdullah Al Rian",
      role: "Business and Management Analyst",
      desc: "Joined April 2025 • MBA in Management Information Systems"
    },
    { name: "Darshan Kumar", role: "Employee" }
  ];

  return (
    <>
      <PageHeader
        title="Management & Team"
        subtitle="Leadership and key personnel"
      />

      <div className="container" style={styles.grid}>
        {members.map((m, i) => (
          <div key={i} style={styles.card}>
            <h3>{m.name}</h3>
            <p style={{ fontWeight: "500" }}>{m.role}</p>
            {m.desc && <p style={{ marginTop: "10px" }}>{m.desc}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px"
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  }
};

export default Team;

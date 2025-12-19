import PageHeader from "../components/PageHeader";

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact Information"
        subtitle="Company address and communication details"
      />

      <div className="container">
        <p><strong>Address:</strong></p>
        <p>
          5028 S Normandie Ave<br />
          Los Angeles, California<br />
          Postal Code: 90037
        </p>

        <p style={{ marginTop: "20px" }}>
          <strong>Email:</strong><br />
          Hr.onestopwholemart@info
        </p>
      </div>
    </>
  );
};

export default Contact;

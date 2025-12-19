import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        title="About the Company"
        subtitle="Business overview and company background"
      />

      <div className="container">
        <p style={{ lineHeight: "1.8" }}>
          ONE STOP LIQUOR AND WHOLE MARKET was established in 2017 and operates
          under SVK Group LLC. The company has built a reputation for reliability
          and operational consistency.
        </p>

        <ul style={{ marginTop: "30px", lineHeight: "2" }}>
          <li><strong>Company Name:</strong> ONE STOP LIQUOR AND WHOLE MARKET</li>
          <li><strong>Established:</strong> 2017</li>
          <li><strong>Parent Company:</strong> SVK GROUP LLC</li>
          <li><strong>Location:</strong> Los Angeles, California</li>
        </ul>
      </div>
    </>
  );
};

export default About;

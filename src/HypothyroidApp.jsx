import React from 'react';
import myImage from './assets/info-en.jpg';
import thyroidImage from './assets/thyroid.jpg';

const HypothyroidApp = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const containerStyle = {
    maxWidth: "960px",
    margin: "0 auto",
    padding: isMobile ? "16px" : "24px",
    paddingTop: isMobile ? "5rem" : "6rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const sectionStyle = {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    marginBottom: "24px",
    padding: isMobile ? "20px" : "24px",
    border: "1px solid #f0f0f0"
  };

  const headingStyle = {
    color: "#e91e63",
    fontSize: isMobile ? "1.3rem" : "1.5rem",
    fontWeight: "600",
    marginBottom: "16px",
    marginTop: "0"
  };

  const listStyle = {
    paddingLeft: "0",
    margin: "0",
    listStyle: "none"
  };

  const listItemStyle = {
    position: "relative",
    paddingLeft: "24px",
    marginBottom: "10px",
    color: "#555",
    fontSize: "0.95rem",
    lineHeight: "1.6"
  };

  const bulletStyle = {
    color: "#e91e63",
    fontWeight: "bold",
    position: "absolute",
    left: "0",
    top: "1px",
    fontSize: "1.2rem"
  };

  const paragraphStyle = {
    color: "#555",
    fontSize: "0.95rem",
    lineHeight: "1.7",
    margin: "0"
  };

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <div style={{
      background: "linear-gradient(to bottom, #fff, #f9f0f5)",
      minHeight: "100vh",
      padding: "0",
      margin: "0"
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#de5d83",
        color: "white",
        padding: isMobile ? "0.7rem 0.5rem" : "1rem 0.5rem",
        fontSize: isMobile ? "1.2rem" : "1.5rem",
        fontWeight: 500,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        justifyContent: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        zIndex: 100
      }}>
        <button
          onClick={handleBack}
          style={{
            position: "absolute",
            left: isMobile ? 8 : 24,
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center"
          }}
          aria-label="Back"
        >
          <svg width={isMobile ? 28 : 32} height={isMobile ? 28 : 32} viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#de5d83" />
            <polyline points="18,10 12,16 18,22" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span style={{ width: "100%", textAlign: "center" }}>
          Patient Education - Hypothyroidism
        </span>
      </div>

      {/* Content */}
      <div style={containerStyle}>
        <img
          src={myImage}
          alt="Hypothyroid Info"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            display: "block",
            margin: "0 auto 24px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        />

        <div style={sectionStyle}>
          <h2 style={headingStyle}>What is Thyroid?</h2>
          <p style={paragraphStyle}>
            The thyroid is a gland located at the front of your neck. It produces hormones that control metabolism, growth, and development. The main hormones are T3 and T4.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>What is Hypothyroidism?</h2>
          <p style={paragraphStyle}>
            Hypothyroidism is a condition where the thyroid gland doesn’t produce enough hormones. It affects many body functions, leading to fatigue, weight gain, and more.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Symptoms of Hypothyroidism</h2>
          <ul style={listStyle}>
            {[
              "Fatigue",
              "Hoarseness",
              "Weight gain",
              "Muscle weakness",
              "Brain fog",
              "Depression",
              "Cold intolerance",
              "Slow heart rate"
            ].map((symptom, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>›</span> {symptom}
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Why Women?</h2>
          <ul style={listStyle}>
            {[
              "During or after pregnancy",
              "After menopause",
              "Autoimmune disorders (e.g., Hashimoto's)",
              "More hormonal changes"
            ].map((reason, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>›</span> {reason}
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Diagnosis</h2>
          <ul style={listStyle}>
            {[
              "High TSH levels",
              "Low T4 and possibly T3 levels",
              "Positive thyroid antibodies (autoimmune)"
            ].map((test, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>›</span> {test}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={thyroidImage}
          alt="Thyroid Illustration"
          style={{
            width: "100%",
            maxWidth: isMobile ? "260px" : "340px",
            height: "auto",
            display: "block",
            margin: "32px auto",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
          }}
        />

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Treatment Tips</h2>
          <ul style={listStyle}>
            {[
              "Take thyroxine daily on an empty stomach",
              "Avoid calcium/iron supplements close to medication",
              "No smoking",
              "Monitor regularly with your doctor"
            ].map((tip, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>›</span> {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HypothyroidApp;

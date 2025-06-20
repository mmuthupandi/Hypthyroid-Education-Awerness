import React from 'react';
import myImage from './assets/info-en.jpg';
import thyroidImage from './assets/thyroid.jpg';
import junkfoodImage from './assets/junkfood.jpg';

const HypothyroidApp = () => {
  const isMobile = window.innerWidth <= 768;

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    paddingTop: isMobile ? "4rem" : "5rem",
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
    paddingLeft: "20px",
    marginBottom: "8px",
    color: "#555",
    fontSize: "0.95rem",
    lineHeight: "1.5"
  };

  const bulletStyle = {
    content: "•",
    color: "#e91e63",
    fontWeight: "bold",
    position: "absolute",
    left: "0"
  };

  const paragraphStyle = {
    color: "#555",
    fontSize: "0.95rem",
    lineHeight: "1.6",
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#de5d83",
          color: "white",
          padding: isMobile ? "0.7rem 0.5rem 0.7rem 0.2rem" : "1rem 0.5rem 1rem 0.2rem",
          fontSize: isMobile ? "1.2rem" : "1.5rem",
          fontWeight: 500,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          justifyContent: "center",
          zIndex: 100
        }}
      >
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
            zIndex: 20,
            padding: 0,
            display: "flex",
            alignItems: "center"
          }}
          aria-label="Back"
        >
          <svg width={isMobile ? 28 : 32} height={isMobile ? 28 : 32} viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#de5d83" />
            <polyline points="18,10 12,16 18,22" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span style={{
          width: "100%",
          textAlign: "center",
          paddingLeft: isMobile ? "2.5rem" : "3.5rem",
          paddingRight: isMobile ? "0.5rem" : "1rem"
        }}>
          Patient Education - Hypothyroidism
        </span>
      </div>

      {/* Main */}
      <div style={containerStyle}>
        {/* Top Image */}
        <div style={{ textAlign: "center", margin: "2rem auto" }}>
          <img
            src={myImage}
            alt="Hypothyroid Info"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          />
        </div>

        {/* Sections */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>What is Thyroid?</h2>
          <p style={paragraphStyle}>
            The thyroid is a gland located at the front of your neck. It produces chemical substances called hormones that travel through the bloodstream and control how your body uses energy. In other words, it regulates your metabolism, growth, and development from an early stage. The hormones produced by the thyroid are mainly thyroxine (T4) and triiodothyronine (T3).
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>What is Hypothyroidism?</h2>
          <p style={paragraphStyle}>
            Hypothyroidism is a condition where your thyroid gland does not produce enough thyroid hormones (T4 and T3) to meet your body's needs. Hypothyroidism affects all the organs in the body because thyroid hormones are essential for the normal functioning of every cell in the body.
          </p>
        </div>

        {/* Junkfood Image */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img
            src={junkfoodImage}
            alt="Avoid junk food"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              height: "auto"
            }}
          />
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Symptoms of Hypothyroidism</h2>
          <ul style={listStyle}>
            {[
              "Fatigue",
              "Hoarseness",
              "Weight gain",
              "Muscle weakness",
              "Numbness in hands",
              "Brain fog",
              "Depression",
              "Anxiety"
            ].map((symptom, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                {symptom}
              </li>
            ))}
          </ul>
        </div>

        {/* Thyroid Illustration Image */}
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
          <h2 style={headingStyle}>Why Women?</h2>
          <ul style={listStyle}>
            {[
              "At young age",
              "During or after pregnancy",
              "After menopause",
              "With autoimmune diseases (like Hashimoto's thyroiditis)"
            ].map((reason, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                {reason}
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Diagnosis</h2>
          <ul style={listStyle}>
            {[
              "TSH test - high levels",
              "T4 test - low levels",
              "T3 test - low levels",
              "Thyroid antibody test – may be positive in autoimmune thyroiditis"
            ].map((test, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                {test}
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Causes</h2>
          <ul style={listStyle}>
            {[
              "Autoimmune thyroid disease (Hashimoto’s thyroiditis)",
              "Radioactive iodine or surgery for hyperthyroidism or thyroid cancer",
              "Over-treatment of hyperthyroidism with antithyroid drugs",
              "Some medicines",
              "Some health foods, e.g. kelp (seaweed)",
              "A malfunction of the pituitary gland",
              "Sometimes hypothyroidism is present at birth (congenital hypothyroidism)",
              "Radiation for head and neck cancers"
            ].map((cause, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                {cause}
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>How to Increase Thyroid Hormone Levels?</h2>
          <ul style={listStyle}>
            {[
              "Thyroxine supplement as a replacement for the T4 hormone.",
              "Avoid smoking, as it affects the thyroid.",
              "Avoid taking other medications at the same time as thyroxine, as this may interfere with its absorption.",
              "You may need to adjust or reschedule your other medications as per your doctor’s advice."
            ].map((tip, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Key Points to Remember</h2>
          <ul style={listStyle}>
            {[
              "Review with a thyroid/endocrine specialist every 6 months.",
              "Once stable, get a blood test annually to check thyroid levels.",
              "Take your tablets consistently every day.",
              "Pregnant women with hypothyroidism should consult a physician for dosage adjustment."
            ].map((point, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HypothyroidApp;

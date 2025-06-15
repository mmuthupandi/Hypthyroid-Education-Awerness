import React from 'react';
import myImage from './assets/info-ta.jpg';
import thyroidImg from './assets/thyroid.jpg';

const HypothyroidAppTamil = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const containerStyle = {
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    padding: isMobile ? "16px" : "24px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: "border-box"
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
    marginTop: "0",
    borderBottom: "2px solid #fce4ec",
    paddingBottom: "8px"
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
    <div
      style={{
        background: "linear-gradient(to bottom, #fff, #f9f0f5)",
        minHeight: "100vh",
        padding: "0",
        margin: "0"
      }}
    >
      {/* Fixed Header */}
      <div
        style={{
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
            <polyline points="18,10 12,16 18,22" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span style={{ width: "100%", textAlign: "center" }}>
          தைராய்டு மற்றும் ஹைப்போதைராய்டிசம்
        </span>
      </div>

      {/* Main Content */}
      <div
        style={{
          ...containerStyle,
          paddingTop: isMobile ? "5rem" : "6rem"
        }}
      >
        {/* Top Image */}
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

        {/* Section 1 */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>தைராய்டு என்றால் என்ன?</h2>
          <p style={paragraphStyle}>
            தைராய்டு என்பது உங்கள் கழுத்தின் முன்புறத்தில் அமைந்துள்ள ஒரு பட்டாம்பூச்சி வடிவ சுரப்பி ஆகும்...
          </p>
        </div>

        {/* Section 2 */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>ஹைப்போதைராய்டிசம் என்றால் என்ன?</h2>
          <p style={paragraphStyle}>
            ஹைப்போதைராய்டிசம் என்பது தைராய்டு சுரப்பி போதுமான அளவு ஹார்மோன்கள்...
          </p>
        </div>

        {/* Section 3 */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>அறிகுறிகள்</h2>
          <ul style={listStyle}>
            {[
              "சோர்வு மற்றும் பலவீனம்",
              "முகம் வெளுத்துப்போதல் மற்றும் வீக்கம்",
              "புருவங்களின் வெளிப்புறப் பகுதியில் முடி உதிர்தல்",
              "முடி உதிர்தல் மற்றும் வறண்ட சருமம்",
              "எளிதில் உடையும் நகங்கள்",
              "குளிரைத் தாங்க இயலாமை",
              "மலச்சிக்கல்",
              "எடை அதிகரிப்பு",
              "மெதுவான இதயத் துடிப்பு"
            ].map((item, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4 */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>ஏன் பெண்களுக்கு அதிகம் ஏற்படுகிறது?</h2>
          <p style={paragraphStyle}>
            பெண்கள் ஹைப்போதைராய்டிசத்திற்கு ஆண்களை விட அதிகமாக பாதிக்கப்படுகிறார்கள்...
          </p>
        </div>

        {/* Section 5 */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>நோய்நிர்ணயம் (Diagnosis)</h2>
          <p style={paragraphStyle}>இது இரத்தப் பரிசோதனை மூலம் கண்டறியப்படுகிறது:</p>
          <ul style={{ ...listStyle, marginTop: "16px" }}>
            {[
              "TSH பரிசோதனை: அளவு அதிகமாக இருக்கும்.",
              "T4 பரிசோதனை: குறைவாக இருக்கும்.",
              "T3 பரிசோதனை: குறைவாக இருக்கலாம்."
            ].map((item, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Insert Image Here */}
        <img
          src={thyroidImg}
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

        {/* Section 6 */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>சிகிச்சை மற்றும் ஆலோசனை</h2>
          <p style={paragraphStyle}>
            பொதுவாக தைராக்சின் (Levothyroxine) மாத்திரை பரிந்துரைக்கப்படுகிறது...
          </p>
          <ul style={{ ...listStyle, marginTop: "16px" }}>
            {[
              "மருந்துகளைத் தவறாமல் எடுத்துக்கொள்ள வேண்டும்.",
              "புகையிலை பழக்கத்தை கைவிட வேண்டும்.",
              "மருந்தை காலையில் வெறும் வயிற்றில் உட்கொள்ள வேண்டும்.",
              "இரும்பு/கால்சியம் சப்ளிமெண்ட்களை பிறகு எடுத்துக்கொள்ள வேண்டும்."
            ].map((item, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HypothyroidAppTamil;

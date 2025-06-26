import React from 'react';
import { Link } from 'react-router-dom';

// Emojis for visual excitement!
const sparkle = "✨";
const key = "🔑";
const crystalBall = "🔮";
const rocket = "🚀";
const lock = "🔒";

const chromeGradient = "linear-gradient(135deg, #232526 0%, #e0e0e0 100%)";

const buttonStyle = {
  padding: "0.8rem 2rem",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "1.15rem",
  border: "none",
  cursor: "pointer",
  transition: "transform 0.1s",
  boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
  margin: "0 0.5rem",
  letterSpacing: "0.5px",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem"
};

const signupButton = {
  ...buttonStyle,
  background: "#fff",
  color: "#232526",
  border: "2px solid #232526"
};

const loginButton = {
  ...buttonStyle,
  background: "black",
  color: "#fff",
  border: "2px solid #e0e0e0"
};

const Landing = () => (
  <div style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: chromeGradient,
    color: "#232526",
    fontFamily: "Segoe UI, Arial, sans-serif",
    textShadow: "0 2px 8px rgba(0,0,0,0.10)"
  }}>
    <div style={{
      background: "#000",
      borderRadius: "24px",
      padding: "2.5rem 2rem",
      boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
      maxWidth: 420,
      width: "90%",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "2.7rem",
        background: "linear-gradient(90deg, #fff 40%, #e0e0e0 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "1rem"
      }}>
        {sparkle} Welcome to <span style={{fontWeight: 700}}>A3Reset Oracle</span> {crystalBall}
      </h1>
      <p style={{
        fontSize: "1.15rem",
        margin: "1rem 0 2rem 0",
        color: "#e0e0e0"
      }}>
        {rocket} Start your 3-day free trial and unlock the Oracle’s power.<br />
        Already a member? <span style={{fontWeight: 500, color:'#fff'}}>Log in below!</span>
      </p>
      <div style={{display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem"}}>
        <Link to="/register" style={signupButton}>
          {key} Sign Up / Free Trial
        </Link>
        <Link to="/login" style={loginButton}>
          {lock} Login
        </Link>
      </div>
      <div style={{
        fontSize: "2rem",
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem"
      }}>
        <span role="img" aria-label="star">🌟</span>
        <span role="img" aria-label="crystal ball">🔮</span>
        <span role="img" aria-label="sparkle">✨</span>
        <span role="img" aria-label="rocket">🚀</span>
        <span role="img" aria-label="lock">🔒</span>
      </div>
    </div>
  </div>
);

export default Landing;

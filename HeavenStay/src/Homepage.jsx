import React from "react";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate(); 

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>HeavenStay</h1>
        <p style={styles.tagline}>Your Perfect Getaway Awaits</p>
      </header>

      {/* Navbar */}
      <nav style={styles.navbar}>
        {["Home", "Rooms", "Book Now", "About", "Contact"].map((item) => (
          <a key={item} href="#" style={styles.navLink}>
            {item}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Book Your Dream Hotel Today</h1>
          <p style={styles.heroSubtitle}>
            Comfort, luxury, and ease – all in one place.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={styles.featuresSection}>
        {[
          {
            title: "Easy Booking",
            text: "Book your stay in just a few clicks with our user-friendly system.",
          },
          {
            title: "Best Locations",
            text: "Explore hotels in your dream destinations across Nepal.",
          },
          {
            title: "24/7 Support",
            text: "We’re always here to help you with any questions or issues.",
          },
        ].map((feature) => (
          <div key={feature.title} style={styles.featureCard}>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        &copy; 2025 HeavenStay. All rights reserved.
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f7f9fc",
    color: "#333",
  },
  header: {
    backgroundColor: "#4b8bbe",
    textAlign: "center",
    padding: "10px",
  },
  logo: {
    margin: "0",
    fontSize: "24px",
    color: "white",
  },
  tagline: {
    margin: "4px 0",
    fontSize: "14px",
    color: "white",
  },
  navbar: {
    backgroundColor: "#3a6ea5",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "6px 0",
  },
  navLink: {
    color: "white",
    margin: "4px 10px",
    fontSize: "13px",
    textDecoration: "none",
    fontWeight: "500",
  },
  heroSection: {
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuF1G4uuUQFBU1tkktMaL8wTtNZ6cYQtzAcg&s')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    padding: "40px 10px",
    color: "white",
  },
  heroContent: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "15px",
    borderRadius: "10px",
    display: "inline-block",
  },
  heroTitle: {
    fontSize: "1.8rem",
    margin: "0 0 10px",
  },
  heroSubtitle: {
    fontSize: "1rem",
    margin: 0,
  },
  featuresSection: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px 10px",
    background: "#fff",
  },
  featureCard: {
    background: "#f1f1f1",
    width: "240px",
    padding: "15px",
    margin: "10px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#4b8bbe",
    color: "white",
    textAlign: "center",
    padding: "10px",
    fontSize: "13px",
    marginTop: "20px",
  },
};

export default Homepage;

import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" style={styles.section}>
      <h2>Welcome to My Website</h2>
      <p>This is the best place to learn and grow.</p>
      <button style={styles.button}>Get Started</button>
    </section>
  );
};

const styles = {
  section: {
    padding: '2rem',
    textAlign: 'center'
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer'
  }
};

export default HeroSection;
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <h1>My Website</h1>
        <ul style={styles.ul}>
          <li style={styles.li}><a href="#home" style={styles.a}>Home</a></li>
          <li style={styles.li}><a href="#features" style={styles.a}>Features</a></li>
          <li style={styles.li}><a href="#contact" style={styles.a}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    display: 'flex'
  },
  li: {
    marginRight: '1rem'
  },
  a: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default Header;
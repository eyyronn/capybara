import React from 'react';
import './Header.css';
import './Content.js';


function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <div className="title">are capybaras ...?</div>
      <div className="adjectives">
        <button onClick={() => scrollToSection('realSection')}>Real?</button>
        <button onClick={() => scrollToSection('friendlySection')}>Friendly?</button>
        <button onClick={() => scrollToSection('dangerousSection')}>Dangerous?</button>
        <button onClick={() => scrollToSection('endangeredSection')}>Endangered?</button>
        <button onClick={() => scrollToSection('petsSection')}>Pets?</button>
        <button onClick={() => scrollToSection('BigSection')}>Big?</button>
        <button onClick={() => scrollToSection('PhilSection')}>In the Philippines?</button>
      </div>
    </div>
  );
}

export default Header;

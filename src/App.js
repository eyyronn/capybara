import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import { RealContent, FriendlyContent, DangerousContent, PetsContent, BigContent, EndangeredContent, PhilippinesContent} from './components/Content.js';


function App() {
  const [mousePosX, setMousePosX] = useState(0);
  const [isMouseInside, setIsMouseInside] = useState(false); 
  const animationAreaRef = useRef(null); 
  const spriteWidth = 375; 
  const spriteHeight = 375; 
  const frames = 20; 

  useEffect(() => {
    const handleMouseMove = (event) => {

      if (animationAreaRef.current) {
        const animationAreaRect = animationAreaRef.current.getBoundingClientRect();
        const x = event.clientX - animationAreaRect.left;
        setMousePosX(x);
      }
    };

    const handleMouseEnter = () => {
      setIsMouseInside(true);
    };

    const handleMouseLeave = (event) => {
      setIsMouseInside(false);
      if (event.clientX > window.innerWidth) {
        setMousePosX(spriteWidth);
      }
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      const x = touch.clientX - animationAreaRef.current.getBoundingClientRect().left;
      setMousePosX(x);
    };

    const handleTouchStart = () => {
      setIsMouseInside(true);
    };

    const handleTouchEnd = () => {
      setIsMouseInside(false);
    };

    const animationArea = animationAreaRef.current;

    animationArea.addEventListener('mousemove', handleMouseMove);
    animationArea.addEventListener('mouseenter', handleMouseEnter);
    animationArea.addEventListener('mouseleave', handleMouseLeave);

    animationArea.addEventListener('touchmove', handleTouchMove);
    animationArea.addEventListener('touchstart', handleTouchStart);
    animationArea.addEventListener('touchend', handleTouchEnd);

    return () => {
      animationArea.removeEventListener('mousemove', handleMouseMove);
      animationArea.removeEventListener('mouseenter', handleMouseEnter);
      animationArea.removeEventListener('mouseleave', handleMouseLeave);

      animationArea.removeEventListener('touchmove', handleTouchMove);
      animationArea.removeEventListener('touchstart', handleTouchStart);
      animationArea.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const maxFrame = frames - 1;
  const currentFrame = Math.min(
    maxFrame,
    Math.floor((mousePosX / spriteWidth) * frames)
  );

  const backgroundPositionX = isMouseInside
    ? -currentFrame * spriteWidth
    : -maxFrame * spriteWidth;
  const backgroundPositionY = 0;

  const [activeContent, setActiveContent] = useState(null);

  const scrollToSection = (sectionId, contentComponent) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setActiveContent(contentComponent);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Header />
      <div id="patSection" className="prompt first">
        <p>Pat a Capybara</p>
      </div>
      <div className="first">
        <div
          className="animation-area"
          ref={animationAreaRef}
          style={{
            width: spriteWidth,
            height: spriteHeight,
            backgroundImage: `url('/spritesheet.png')`,
            backgroundPosition: `${backgroundPositionX}px ${backgroundPositionY}px`,
            pointerEvents: 'auto',
          }}
        />
      </div>
      <RealContent />
      <FriendlyContent /> 
      <DangerousContent /> 
      <EndangeredContent/>
      <PetsContent/>
      <BigContent/>
      <PhilippinesContent/>

    </div>
  );
}

export default App;
//
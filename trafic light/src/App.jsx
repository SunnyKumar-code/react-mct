import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeLight, setActiveLight] = useState('red');
  const [time, setTime] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 1) {
          setActiveLight((prevLight) => {
            if (prevLight === 'red') return 'yellow';
            if (prevLight === 'yellow') return 'green';
            return 'red';
          });
          return 3; 
        }
        return prevTime - 1; 
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="maindiv">
      <div className="lights">
        <div className={`light  ${activeLight === 'red' ? 'red' : ''}`}></div>
        <div className={`light  ${activeLight === 'yellow' ? 'yellow' : ''}`}></div>
        <div className={`light  ${activeLight === 'green' ? 'green' : ''}`}></div>
      </div>
      <div className="timer">
        <span>{time}</span>
      </div>
    </div>
  );
}

export default App;

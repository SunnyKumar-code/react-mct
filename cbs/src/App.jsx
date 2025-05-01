import { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [closeOnOutsideClick, setCloseOnOutsideClick] = useState(false);
  const [closeOnEscape, setCloseOnEscape] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
 



  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && closeOnEscape) {
        setShowModal(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeOnEscape]);

  const handleOutsideClick = (e) => {
    if (closeOnOutsideClick && e.target.className === "modal-overlay") {
      setShowModal(false);
    }
  };

  return (
    <div className='body'>
      <div className="checkbox">
        <label>
          Close on outside click
          <input
            type="checkbox"
            checked={closeOnOutsideClick}
            onChange={() => setCloseOnOutsideClick(!closeOnOutsideClick)}
          />
        </label>
        <label>
          Close on Escape key
          <input
            type="checkbox"
            checked={closeOnEscape}
            onChange={() => setCloseOnEscape(!closeOnEscape)}
          />
        </label>
        <label>
          Show close icon
          <input
            type="checkbox"
            checked={showCloseIcon}
            onChange={() => setShowCloseIcon(!showCloseIcon)}
          />
        </label>
       
       
      </div>

      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal">
            {showCloseIcon && <span className="close-btn" onClick={() => setShowModal(false)}>x</span>}
            <h1>Modal Heading</h1>
            <p>This is a modal with enhanced functionality.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

     
    </div>
  );
}

export default App;

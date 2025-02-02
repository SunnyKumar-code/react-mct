import { useState } from "react";
import Cell from "./Cell";



export default function App() {
  const [activatedCells, setActivatedCells] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const gridSize = 3;
  const totalCells = gridSize * gridSize;

  const handleCellClick = (index) => {
    if (!activatedCells.includes(index) && !isDeactivating) {
      const newActivatedCells = [...activatedCells, index];
      setActivatedCells(newActivatedCells);


      if (newActivatedCells.length === totalCells) {
        deactivateCells();
      }
    }
  };

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setActivatedCells((prevCells) => {
        const newCells = [...prevCells];
        newCells.pop();


        if (newCells.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newCells;
      });
    }, 300);
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {Array.from({ length: totalCells }).map((a, index) => (
          <Cell
            key={index}
            filled={activatedCells.includes(index)}
            onClick={() => handleCellClick(index)}
            isDisabled={activatedCells.includes(index) || isDeactivating}
          />
          
        ))}
      </div>
    </div>
  );
}
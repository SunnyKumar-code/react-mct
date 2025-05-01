
import { useState } from "react"

function App() {
  const[ leftBox,setLeftBox] = useState(['USA','India','Austalia','UAE','Canada'])
  const [rightBox,setRightBox]=useState([])

  const [leftChecked , setLeftChecked]=useState([])
  const  [rightChecked , setRightChecked]=useState([])

const handleLeftCheck=(country)=>{

  console.log(country);
  setLeftChecked((prev) => 
  prev.includes(country)?prev.filter((item)=>item!==country):[...prev,country]
  );
  
}

const handleRightCheck = (country) => {
  console.log(country);
  setRightChecked((prev) =>
    prev.includes(country)
      ? prev.filter((item) => item !== country)
      : [...prev, country]
  );
};

  const leftToRight=()=>{
    setRightBox(leftBox)
    setLeftBox([])
  }
  const rightToLeft=()=>{
    setLeftBox(rightBox)
    setRightBox([])
    setLeftChecked([]);
    setRightChecked([]);
  }
  const moveRight = () => {
    setRightBox((prev) => [...prev, ...leftChecked]);
    setLeftBox((prev) => prev.filter((country) => !leftChecked.includes(country)));
    setLeftChecked([]);
  };

  const moveLeft = () => {
    setLeftBox((prev) => [...prev, ...rightChecked]);
    setRightBox((prev) => prev.filter((country) => !rightChecked.includes(country)));
    setRightChecked([]);
  };

  return (
    <div className="div">
      <div className="container">
      <div className="box">
        {
          leftBox.map((country , idx)=>{
            return (<div key={`left-${idx}`}>
              <input  type="checkbox"  id={`left-${idx}`} checked={leftChecked.includes(country)} onChange={() => handleLeftCheck(country)}></input>
              <label htmlFor={`left-${idx}`}>{country}</label>
            </div>)
          })
        }
      </div>
<div className="btn">
  <button onClick={leftToRight} disabled={leftBox.length===0?true:false}>all right</button>
  <button onClick={moveRight} disabled={leftChecked.length === 0}>right</button>
  <button onClick={moveLeft} disabled={rightChecked.length === 0}>left</button>
  <button onClick={rightToLeft} disabled={rightBox.length===0?true:false}>all left</button>
</div>
      <div className="box">
      {
          rightBox.map((country , idx)=>{
            return (<div key={`right-${idx}`} >
              <input type="checkbox" id={`right-${idx}`}  checked={rightChecked.includes(country)}  onChange={() => handleRightCheck(country)}></input>
              <label htmlFor={`right-${idx}`}>{country}</label>
            </div>)
          })
        }
      </div>
      </div>
    </div>
  )
}

export default App

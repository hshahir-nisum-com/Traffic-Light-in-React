import './App.css';
import Circle from'./component/circle.js';
import {useState, useEffect} from 'react'


function App() {
  
  const colors = ["red",'yellow','green']
  const [counter, setCounter] = useState(0);
  const [timer, settimer] = useState(0)
  let color = null
 
    useEffect(() => {
    const interval =  setInterval(() => {
        setCounter(counter + 1);
        timer<2 && settimer(timer + 1)
      }, 1000);
      return () => clearInterval(interval);
    });


    if (counter <3) {
      console.log(colors[counter])
      color = colors[counter]
    }
  


  return (
    
    <div className="App" >
      <header className="App-header">
        <div>
        <div className="box">
           <Circle color={color === "red"? color : "black"} />
           <Circle color={color === "yellow"? color : "black"} />
           <Circle color={color === "green"? color : "black"} />
        </div>
        <div >
            Countdown : {timer}s
        </div>
        </div>
      </header>
    </div>
  );
}


export default App;

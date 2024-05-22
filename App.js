import { useState } from 'react';
import './App.css';

function App() {
  
  let [counter, setCounter] = useState(0)

  
  const addValue = ()=>{  
    if(counter+1 > 20){
      setCounter(counter)
      alert("limit exceeded");
    }else{
      setCounter(counter + 1)
      
    }
   
  }
  const removeValue = ()=>{
    if(counter-1 < 0){
    setCounter(counter)
    alert("not going below 0")
    }else{
      setCounter(counter - 1)
    }
    
  }
  return (
    <div className="App">
     <h1>Counter form</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add Value</button> <br/>
     <button onClick={removeValue}>Remove Value</button>
    </div>
  );
}

export default App;

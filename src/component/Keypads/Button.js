import React, {useState, useEffect} from 'react';
import "./Button.css"


const Button = () => {
    
  var [value, setNewValue] = useState("0");
  var [inputArray, setInputArray] = useState([]);
  var [result, setResult] = useState(0);


  function InputHandler(e){
      var result = e.target.innerText;

      // Update the input array with the new value
      const newArray = setInputArray([...inputArray, result]);

      // Check if the new value is an operator or the equal sign
      if (result === "+" || result === "-" || result === "*" || result === "/") {
          // If it is an operator, update the result variable and set the new value to 0
          setResult(result => result + parseFloat(value));
          alert(parseFloat(value)) 
          setNewValue("0");
          
      } else if (result === "=") {
          // If it is the equal sign, perform the calculation and update the result variable
          setResult(result => result + parseFloat(value));
          setNewValue(result.toString());
      }else{
          // If it is a digit, update the current value
          setNewValue(value => value === "0" ? result : value + result);
      }
  }

  useEffect(() => {
      console.log(inputArray);
    }, [inputArray]);

    return (
        
        <div>
            <div>
            <input type="text" value={value}/>
        </div>
           <div className='flex-wrapper'>
            {/* <button>AC</button>
            <button>+-</button> */}
            <button onClick={InputHandler}>%</button>
            <button onClick={InputHandler}>/</button>
           </div>
           <div className='flex-wrapper'>
            <button onClick={InputHandler}>7</button>
            <button onClick={InputHandler}>8</button>
            <button onClick={InputHandler}>9</button>
            <button onClick={InputHandler}>x</button>
           </div>
           <div className='flex-wrapper'>
            <button onClick={InputHandler}>4</button>
            <button onClick={InputHandler}>5</button>
            <button onClick={InputHandler}>6</button>
            <button onClick={InputHandler}>-</button>
           </div>
           <div className='flex-wrapper'>
            <button onClick={InputHandler}>1</button>
            <button onClick={InputHandler}>2</button>
            <button onClick={InputHandler}>3</button>
            <button onClick={InputHandler}>+</button>
           </div>
           <div className='flex-wrapper'>
            <button onClick={InputHandler}>0</button>
            {/* <button>.</button> */}
            <button id='equalbtn'>=</button>
           </div>
        </div>
    )
}

export default Button
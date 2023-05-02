import React, {useState} from 'react';
import "./Button.css"


const Button = () => {


    var [value, setValue] = useState("0");

    function getValue(buttonValue){
      
        if (value === "0") {
            setValue(buttonValue);
          } else {
            setValue(value + buttonValue);
          }
       
    }

    return (
        
        <div>
            <div>
            <input type="text" value={value}/>
        </div>
           <div className='flex-wrapper'>
            <button>AC</button>
            <button>+-</button>
            <button>%</button>
            <button>/</button>
           </div>
           <div className='flex-wrapper'>
            <button onClick={() => getValue("7")}>7</button>
            <button onClick={() => getValue("8")}>8</button>
            <button onClick={() => getValue("9")}>9</button>
            <button>x</button>
           </div>
           <div className='flex-wrapper'>
            <button onClick={() => getValue("4")}>4</button>
            <button onClick={() => getValue("5")}>5</button>
            <button onClick={() => getValue("6")}>6</button>
            <button>-</button>
           </div>
           <div className='flex-wrapper'>
            <button onClick={() => getValue("1")}>1</button>
            <button onClick={() => getValue("2")}>2</button>
            <button onClick={() => getValue("3")}>3</button>
            <button>+</button>
           </div>
           <div className='flex-wrapper'>
            <button onClick={() => getValue("0")}>0</button>
            <button>.</button>
            <button>=</button>
           </div>
        </div>
    )
}

export default Button
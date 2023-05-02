import React from "react";
import "./MainPanel.css"
import InputField from "../Keypads/InputField";
import Button from "./../Keypads/Button"

const MainPanel = () => {
    return(
        <div className="main">
           <div className="flex_wrapper">
            <div className="input-area">
                <InputField/>
            </div>
            <div className="keypad-area">
               <Button/>
            </div>
           </div>
        </div>
    )
}

export default MainPanel
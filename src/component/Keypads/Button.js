import React from 'react';
import "./Button.css"
import {wali} from './ButtonProps';

const Button = () => {
    return (
        <div>
           <div className='flex-wrapper'>
           <ButtonProps content="AC"/>
            <button>+-</button>
            <button>%</button>
            <button>/</button>
           </div>
           <div className='flex-wrapper'>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>x</button>
           </div>
           <div className='flex-wrapper'>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
           </div>
           <div className='flex-wrapper'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
           </div>
           <div className='flex-wrapper'>
            <button>0</button>
            <button>.</button>
            <button>=</button>
           </div>
        </div>
    )
}

export default Button
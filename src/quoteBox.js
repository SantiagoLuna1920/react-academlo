import React, { useState } from 'react';
import Data from './quotes.json'
import "./index.css"

const QuoteBox = (  ) => {
    
    const { quotes } = Data;

    const [ value, setValue ] = useState(0)

    const Change = ( ) => {
        const root = document.querySelector("#root");
        const imgDiv = document.querySelector(".imgDiv");
        const button = document.querySelector(".button");
        const quotes = document.querySelector(".Quotes");

        let colorRainbow = Math.round(Math.random()*(137-0)+0);

        root.style.cssText=`background: hsl(${colorRainbow}, 56%, 55%);`
        imgDiv.style.cssText=`background: hsl(${colorRainbow}, 56%, 55%);`
        button.style.cssText=`background: hsl(${colorRainbow}, 56%, 55%);`
        quotes.style.cssText=`color: hsl(${colorRainbow}, 56%, 55%);`
        setValue( () => {
            let data =  Math.round(Math.random()*(100-0)+0)
            return data;
        });
    }

    const TwitterC = () => {
        window.open(`https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Ftext%3D"${quotes[value].quote}"   ----${quotes[value].author}----%26fbclid%3DIwAR2rJke32nLdzQBINywR5NTRbJNoj_tBgJFzaoK7oWLQqSRCDUbfUmfEnz4&h=AT1lmoyNmzJYGAUeIplNI2IK7DPDFn9SGPHqLrR1914m1SXQPXAAkS1d_tCEPzcfHhjv0B38YnD077KynKQt5LoqeiPxGA-lsKSIj3xuwnVMkwJfEj1-Q2jXdXYBow`)
    }

    return  (
        <div className="container">
            <div className="Quotes">
            <p  className="quotes">
                <span>"</span>{quotes[value].quote}<span>"</span>
            </p>
            <p className="quotesEnd">
- <strong>{quotes[value].author}</strong>
            </p>
            </div>
            <div className="divLogo">
                <div onClick={TwitterC}><img className="imgDiv" width="40px" height="40px" src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png"></img></div>
                <button className="button" onClick={Change}>New Quote</button>
            </div>
        </div>
    )

}


export {QuoteBox};
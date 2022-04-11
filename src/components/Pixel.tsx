import React, { useState } from "react";
import { tPixel } from "../model";
import "./styles.css"



interface Props {
    pixel: tPixel;
    grid: tPixel[][];
}


const Pixel = () =>{
    const [hover, setHover] = useState<boolean>(false);
    const date = new Date().toString();
    const [color, setcolor] = useState("white")
    


    return (
        <div className="pixel" style={{background: color}}>
            
            { hover?(
                    <p>{color}</p>
                ): (
                    <p>{null}</p>
                )
            }

        </div>
        
        
    );
}

export default Pixel




import React, { useCallback, useState } from "react";
import { HexColorPicker } from 'react-colorful';


function Pixel() {

    const [editColor, seteditColor] = useState<boolean>(false)
    const [color, setColor] = useState("#FFFFFF");
    var Color

    const handleClick = useCallback(() => {
        (editColor) ? seteditColor(false) : seteditColor(true);
        console.log(editColor)
    }, []);
    
    return (
        <div className="cursor-pointer aspect-square relative" style={{background: color}} onClick={handleClick} >
            {editColor? (
                <div className=" absolute top-0 left-full  z-10 justify-center" > 
                <HexColorPicker color="color" onChange={setColor} />
                <button className="bg-slate-400 rounded" onClick = {() => seteditColor(false)} >Entrer</button>
                </div>
            ):null
            

            }
            
        </div>
    );
}

export default Pixel




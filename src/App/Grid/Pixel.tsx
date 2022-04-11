import React, { useCallback, useState } from "react";

function Pixel() {

    const [color, setColor] = useState("#FFFFFF");

    const handleClick = useCallback(() => {
        setColor("#FFBB77")
    }, []);
    
    return (
        <div className="w-8 h-8 border cursor-pointer" style={{background: color}} onClick={handleClick}>
            
        </div>
    );
}

export default Pixel




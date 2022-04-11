import React, { useState } from "react";
import { tPixel } from "../model";
import Pixel from "./Pixel"
import "./styles.css"

interface Props{
    lignes: number;
    colonnes: number;
}




const Grid  = ({lignes, colonnes}: Props) => {
    
    const [grid, setGrid] = useState<typeof Pixel[][]>([])
    

    for (var l = 1; l<= lignes; l++){
        const currentRow = [];
        for (var c = 1; c <= colonnes; c++){
            currentRow.push(Pixel);
        }
        grid.push(currentRow);
    }

    return(
        <div className="grid">
            {
                grid.map((lignes, ) =>(
                    <Pixel/>
                    
                ))
            }

        </div>

    );

}

export default Grid


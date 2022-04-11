import React from "react";
import Pixel from "./Pixel";

type Props = {
    nbPixels: number,
}

function Grid({nbPixels} : Props) {
    return(
        <div className="bg-gray-500 w-full flex-1 grid grid-cols-12">
            {[...Array(nbPixels)].map(() => <Pixel />)}
        </div>
    );
}

export default Grid


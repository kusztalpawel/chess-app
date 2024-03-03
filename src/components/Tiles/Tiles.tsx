import './Tiles.css'

export function Tiles ({rank, file, image}: {rank: number, file: string, image?: string}) {

    return ((file.charCodeAt(0) + rank - 47) % 2 === 0 ? 
    <div  className="tile-light">
        {image && <div
            className="piece" 
            style={{backgroundImage: `url(${image})`}} 
         ></div>}
    </div> : <div  className="tile-dark">
        {image && <div 
            className="piece" 
            style={{backgroundImage: `url(${image})`}} 
        ></div>}
    </div>);
}
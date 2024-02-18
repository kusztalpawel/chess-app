import './Tiles.css'

function Tiles ({rank, file, image}: {rank: number, file: string, image?: string}) {
    return (file.charCodeAt(0) + rank - 47) % 2 === 0 ? 
    <div key = {file + "" + rank} className={'tile-light'}><img src={image} alt=''/></div> : 
    <div key = {file + "" + rank} className={'tile-dark'}><img src={image} alt=''/></div>
}

export default Tiles
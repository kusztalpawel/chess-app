import './Board.css';
import Files from '../Files/Files';
import Ranks from '../Ranks/Ranks';
import Tiles from '../Tiles/Tiles';

export default function Board() {
    const files :string[]= ["a", "b", "c", "d", "e", "f", "g", "h"]
    const ranks :number[] = [0, 1, 2, 3, 4, 5, 6, 7]

    interface Piece {
        pieceImage: string
        pieceFile: string
        pieceRank: number
    }

    const pieces: Piece[] = [];

    files.forEach((file) => pieces.push({pieceImage: './images/blackP.png', pieceFile: file, pieceRank: 7}))
    files.forEach((file) => pieces.push({pieceImage: './images/whiteP.png', pieceFile: file, pieceRank: 2}))
    
    for(let i=0; i<2; i++){
        let type;
        let pieceRank;
        if(i === 0){
            type = "white"
            pieceRank = 1
        } else {
            type = "black"
            pieceRank = 8
        }

        pieces.push({pieceImage: `./images/${type}K.png`, pieceFile: "e", pieceRank})
        pieces.push({pieceImage: `./images/${type}Q.png`, pieceFile: "d", pieceRank})
        pieces.push({pieceImage: `./images/${type}R.png`, pieceFile: "a", pieceRank})
        pieces.push({pieceImage: `./images/${type}R.png`, pieceFile: "h", pieceRank})
        pieces.push({pieceImage: `./images/${type}N.png`, pieceFile: "b", pieceRank})
        pieces.push({pieceImage: `./images/${type}N.png`, pieceFile: "g", pieceRank})
        pieces.push({pieceImage: `./images/${type}B.png`, pieceFile: "c", pieceRank})
        pieces.push({pieceImage: `./images/${type}B.png`, pieceFile: "f", pieceRank})
    }

    return <div className = 'board'>
        
        <Ranks ranks = {ranks}/>


        <div className='tiles'>
            {
            ranks.map((rank) =>
                files.map((file) => {
                    let image: string = '';
                    pieces.forEach((pieces) => { 
                        if(pieces.pieceFile === file && pieces.pieceRank === 8 - rank)
                            image = pieces.pieceImage 
                    })
                    return <Tiles rank = {rank} file = {file} image={image}/>
                })
            )}
        </div>

        <Files files = {files}/>

    </div>
}
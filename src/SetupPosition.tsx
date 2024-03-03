interface Piece {
    pieceImage: string;
    pieceFile: string;
    pieceRank: number;
}

export function setupPosition() {
    const files :string[]= ["a", "b", "c", "d", "e", "f", "g", "h"];

    const pieces: Piece[] = [];

    files.forEach((file) => pieces.push({pieceImage: './images/blackP.png', pieceFile: file, pieceRank: 7}));
    files.forEach((file) => pieces.push({pieceImage: './images/whiteP.png', pieceFile: file, pieceRank: 2}));
    
    for(let i=0; i<2; i++){
        let type;
        let pieceRank;
        if(i === 0){
            type = "white";
            pieceRank = 1;
        } else {
            type = "black";
            pieceRank = 8;
        }

        pieces.push({pieceImage: `./images/${type}K.png`, pieceFile: "e", pieceRank});
        pieces.push({pieceImage: `./images/${type}Q.png`, pieceFile: "d", pieceRank});
        pieces.push({pieceImage: `./images/${type}R.png`, pieceFile: "a", pieceRank});
        pieces.push({pieceImage: `./images/${type}R.png`, pieceFile: "h", pieceRank});
        pieces.push({pieceImage: `./images/${type}N.png`, pieceFile: "b", pieceRank});
        pieces.push({pieceImage: `./images/${type}N.png`, pieceFile: "g", pieceRank});
        pieces.push({pieceImage: `./images/${type}B.png`, pieceFile: "c", pieceRank});
        pieces.push({pieceImage: `./images/${type}B.png`, pieceFile: "f", pieceRank});

    }

    return pieces;
}
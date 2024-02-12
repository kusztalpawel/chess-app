import React from 'react';
import './Board.css';
import Files from './Files';
import Ranks from './Ranks';

const Board = () => {

    function tileClassName (file: string, rank: number) {
        let c = 'tile'
        c = (file.charCodeAt(0) + rank - 47) % 2 === 0 ? 'tile-light' : 'tile-dark'
        return c
    }

    const files :string[]= ["a", "b", "c", "d", "e", "f", "g", "h"]
    const ranks :number[] = [0, 1, 2, 3, 4, 5, 6, 7]

    return <div className = 'board'>
        
        <Ranks ranks = {ranks}/>

        <div className='tiles'>
            {
            ranks.map((rank) =>
                files.map((file) =>
                    <div key = {file + "" + rank} className={tileClassName(file, rank)}></div>
                )
            )}
        </div>

        <Files files = {files}/>

    </div>
}


export default Board;
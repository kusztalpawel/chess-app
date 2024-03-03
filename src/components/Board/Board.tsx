import './Board.css';
import Files from '../Files/Files';
import Ranks from '../Ranks/Ranks';
import { Tiles } from '../Tiles/Tiles';
import {setupPosition} from '../../SetupPosition';
import { useState, useRef } from 'react';


export default function Board() {

    const files :string[]= ["a", "b", "c", "d", "e", "f", "g", "h"];
    const ranks :number[] = [0, 1, 2, 3, 4, 5, 6, 7];

    const [state, setState] = useState(setupPosition());
    const [filePosition, setFilePosition] = useState("");
    const [rankPosition, setRankPosition] = useState(0);
    const [clickedPiece, setClickedPiece] = useState<HTMLElement | null>(null);

    const ref = useRef<HTMLDivElement>(null);
    const boardRef = useRef<HTMLDivElement>(null);

    const OnMouseDown = (e: React.MouseEvent) => {
        const element = e.target as HTMLElement;
    
        if(element.classList.contains("piece")){
            if(ref.current){
                const {width, left, top} = ref.current.getBoundingClientRect();
    
                const size = width / 8;

                setFilePosition(files.at(Math.floor((e.clientX - left) / size))!);
                setRankPosition(8 - Math.floor((e.clientY - top) / size));
            }

            if(boardRef.current){
                const {left, top} = boardRef.current.getBoundingClientRect();

                const yPosition = e.clientX - (left + element.offsetWidth/2);
                const xPosition = e.clientY - (top + (element.offsetWidth/2));

                element.style.position = "absolute";
                element.style.left = `${yPosition}px`;
                element.style.top = `${xPosition}px`;
    
                setClickedPiece(element);
            }
        }
    }
    
    
    const OnMouseMove = (e: React.MouseEvent) => {
        const element = e.target as HTMLElement;
        let yPosition;
        let xPosition;
        let minLeft = 0;
        let minTop = 0;
        let maxLeft = 0;
        let maxTop = 0;
        let boardWidth = 0;
        let rankWidth = 20;
    
        if(clickedPiece){
            if(boardRef.current){
                const {left, top} = boardRef.current.getBoundingClientRect();

                yPosition = e.clientX - (left + (element.offsetWidth/2));
                xPosition = e.clientY - (top + (element.offsetWidth/2));
            }
            if(ref.current){
                const{width, left, top} = ref.current.getBoundingClientRect();
                minLeft = left;
                minTop = top;
                maxLeft = left + width;
                maxTop = top + width;
                boardWidth = width;
            }

            clickedPiece.style.position = "absolute";

            const rankElements = boardRef.current?.getElementsByClassName("ranks");
            if(rankElements){
                const rankElement = rankElements.item(0) as HTMLElement;
                rankWidth = rankElement.offsetWidth;
            }
                
            clickedPiece.style.left = 
                (e.clientX < minLeft + element.offsetWidth/5)
                 ? `${element.offsetWidth/5 - element.offsetWidth/2 + rankWidth}px` 
                 : (e.clientX > maxLeft - element.offsetWidth/5) 
                    ? `${boardWidth - element.offsetWidth/2}px` 
                    : `${yPosition}px`;
            
            clickedPiece.style.top = 
                (e.clientY < minTop + element.offsetWidth/5) 
                 ? `${element.offsetWidth/5 - element.offsetWidth/2}px` 
                 : (e.clientY > maxTop - element.offsetWidth/5) 
                    ? `${boardWidth - element.offsetWidth/5 - element.offsetWidth/2}px`
                    : `${xPosition}px`;
            
        }
    }
    
    const OnMouseUp = (e: React.MouseEvent) => {
        let x: string = "";
        let y: number = 0;
        if(ref.current){
            const {width, left, top} = ref.current.getBoundingClientRect();

            const size = width / 8;
            x = files.at(Math.floor((e.clientX - left) / size))!;
            y = 8 - Math.floor((e.clientY - top) / size);
        }

        if(clickedPiece){
            setState(value => {
                const pieces = value.map(p => {
                    if(p.pieceFile === filePosition && p.pieceRank === rankPosition){
                        p.pieceFile = x;
                        p.pieceRank = y;
                    }
                    return p;
                });
                return pieces;
            })
            setClickedPiece(null);
        }
    }

    return (<div className = 'board' ref={boardRef}>

        <Ranks ranks = {ranks} />

        <div 
            ref = {ref}
            onMouseDown={OnMouseDown}
            onMouseMove={OnMouseMove}
            onMouseUp={OnMouseUp}
            className = 'tiles'>
            {
            ranks.map((rank) =>
                files.map((file) => {
                    let image: string = '';
                    state.forEach((pieces) => { 
                        if(pieces.pieceFile === file && pieces.pieceRank === 8 - rank)
                            image = pieces.pieceImage 
                    })
                    return <Tiles key = {`${rank}, ${file}`} rank = {rank} file = {file} image={image}/>
                })
            )}
        </div>

        <Files files = {files}/>

    </div>);
}
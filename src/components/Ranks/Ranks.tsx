import './Ranks.css';

export default function Ranks ({ranks}: {ranks: number[]}) {
    return (<div className="ranks">{ranks.map(rank => <span key={rank}>{8 - rank}</span>)}
    </div>);
}

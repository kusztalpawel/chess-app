import './Ranks.css';

const Ranks = ({ranks}: {ranks: number[]})  => {
    return <div className="ranks">{ranks.map(rank => <span key={rank}>{8 - rank}</span>)}
    </div>
}

export default Ranks
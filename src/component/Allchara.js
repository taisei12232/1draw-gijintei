import React from "react";
import './Allchara.css';
import { Link } from "react-router-dom";
import { useFetchAllCharacters } from "./getAllCharacters";
const LogicId = {
    BY_CHARA: 'by_chara',
}

function Allchara(){
    const { data } = useFetchAllCharacters(LogicId.BY_CHARA);
    if(!data) return (<div>loading...</div>)
    return (
        <div className="allchara">
            <div className="characters">
            {data.map(chara => (
                <Link to={chara} key={chara} className="chara">{chara}</Link>
            ))}
            </div>
        </div>
        )
}

export default Allchara;
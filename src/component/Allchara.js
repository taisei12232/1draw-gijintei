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
    console.log(data)
    return (
        <div className="allchara">
            <div className="characters">
            {Object.keys(data).map((address) => (
                <div className="address">
                    <p>{address}</p>
                    <div className="charas">
                        {data[address].map(chara => (
                            <Link to={chara} key={chara} className="chara">{chara}</Link>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
        )
}

export default Allchara;
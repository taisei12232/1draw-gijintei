import React from "react";
import './Allchara.css';
import { Link } from "react-router-dom";
import { useFetchAllCharacters } from "./getAllCharacters";
const LogicId = {
    BY_CHARA: 'by_chara',
}

function Allchara(){
    const { data } = useFetchAllCharacters(LogicId.BY_CHARA,'address');
    if(!data) return (<div>loading...</div>)
    console.log(data)
    return (
        <div className="allchara">
            <div className="characters">
                <select className="allsort">
                    <option value="address">住所順</option>
                    <option value="reading">五十音順</option>
                    <option value="birthday">誕生日順</option>
                </select>
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
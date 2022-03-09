import React from "react";
import './Allchara.css';
import { Link } from "react-router-dom";
import { useFetchAllCharacters } from "./getAllCharacters";
const LogicId = {
    BY_CHARA: 'by_chara',
}

function Allchara(){
    const { data } = useFetchAllCharacters(LogicId.BY_CHARA);
    console.log(data);
    if(!data) return (<div>loading...</div>)
    return (
        <div className="allchara">
            <Link to='蓬莱ネネ' >蓬莱ネネ</Link>
        </div>
        )
}

export default Allchara;
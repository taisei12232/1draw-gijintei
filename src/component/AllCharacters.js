import React, { useCallback, useMemo, useState } from 'react';
import './AllCharacters.css';
import { Link } from "react-router-dom";
import { useFetchAllCharacters } from "./getAllCharacters";
import { generateCharacterGroup } from "./generateCharacterGroup";

const LOGIC_ID = {
    BY_CHARA: 'by_chara',
}

const GROUPING_TYPE = {
    ADDRESS: 'address',
    BIRTHDAY: 'birthday',
    READING: 'reading'
};

const AllCharacters = () => {
    const { data: characters } = useFetchAllCharacters(LOGIC_ID.BY_CHARA);
    const [groupingBy, setGroupingBy] = useState(GROUPING_TYPE.ADDRESS);

    const groups = useMemo(
        () => Object.values(generateCharacterGroup({ characters, groupingBy })),
        [characters, groupingBy]
    );

    const handleSelectChange = useCallback((e) => {
        setGroupingBy(e.target.currentValue);
    }, []);
    console.log(groups);
    if (!characters || !groups) return <div>loading...</div>;

    return (
        <div className="container">
            <div className="characters">
            <select className="grouping-type" onChange={handleSelectChange}>
                <option value={GROUPING_TYPE.ADDRESS}>住所順</option>
                <option value={GROUPING_TYPE.NAME}>五十音順</option>
                <option value={GROUPING_TYPE.BIRTHDAY}>誕生日順</option>
            </select>
                {groups.map((group) => (
                <div className="group" key={group.name}>
                    <p className="group__name">{group.name}</p>
                    <div className="group__characters characters">
                    {group.characters.map((character) => (
                        <Link
                        key={character.about.name}
                        className="character"
                        to={character.about.name}
                        >
                        {character.about.name}
                        </Link>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default AllCharacters;
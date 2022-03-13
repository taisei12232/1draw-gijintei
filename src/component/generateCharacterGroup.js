const GROUPING_TYPE = {
    ADDRESS: 'address',
    BIRTHDAY: 'birthday',
    READING: 'reading'
};

export const generateCharacterGroup = ({ characters, groupingBy }) => {
    console.log(characters);
    console.log(groupingBy);
    if(!characters) return ({
        Nodata: {
            name: "No data",
            characters: [{
                about: {
                    address: "No data",
                    birthday: "No data",
                    description: "No data",
                    motif: "No data",
                    name: "No data",
                    reading: "No data"
                }
            }]
        }
    });
    switch (groupingBy) {
    case GROUPING_TYPE.READING:
        return generateGroupByInitial({ characters });
    default:
        return generateGroup({ characters, groupingBy });
    }
};

const generateGroup = ({ characters, groupingBy }) => {
    const group = {};
    characters.forEach((character) => {
        const key = character.about[groupingBy];
        console.log(key);
        const currentCharacters = group[key]?.characters || [];
        console.log(character);
        group[key] = {
            name: key,
            characters: [...currentCharacters, character],
        };
        console.log(group);
    });
    return group;
};

const generateGroupByInitial = ({ characters }) => {
    const group = {};
    characters.forEach((character) => {
        const key = character.about.reading[0];
        const currentCharacters = group[key]?.character || [];
        group[key] = {
            reading: key,
            characters: [...currentCharacters, character],
        };
    });
    return group;
};
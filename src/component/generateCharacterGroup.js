const GROUPING_TYPE = {
    ADDRESS: 'address',
    BIRTHDAY: 'birthday',
    READING: 'reading'
};

export const generateCharacterGroup = ({ characters, groupingBy }) => {
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
        const currentCharacters = group[key]?.characters || [];
        group[key] = {
            name: key,
            characters: [...currentCharacters, character],
        };
    });
    return group;
};

const generateGroupByInitial = ({ characters }) => {
    const group = {};
    characters.forEach((character) => {
        const key = character.about.reading[0];
        const currentCharacters = group[key]?.characters || [];
        group[key] = {
            name: key,
            characters: [...currentCharacters, character],
        };
    });
    return group;
};
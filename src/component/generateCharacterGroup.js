const GROUPING_TYPE = {
    ADDRESS: 'address',
    BIRTHDAY: 'birthday',
    READING: 'reading'
};

const addressOrder = ["蓬莱(中央区統制局)","中央学院初等部(玄武院)","中央学院中等部(白虎院)","中央学院高等部(青龍院)","中央学院大学(朱雀院)","海の国(イドゥシィ)","空の国(ソクェウラ)","陸の国(ディグラン)","森の国(フォーグスト)","砂の国(サンデザット)","氷の国(リアトベス)","No data"]

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
    const sortedGroup = sortGroup({ group, groupingBy });
    return sortedGroup;
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
    const sortedGroup = sortGroup({ group });
    return sortedGroup;
};

const sortGroup = ({ group, groupingBy }) => {
    var slicedGroup = Object.keys(group).map((k)=>({ key: k, value: group[k] }));
    if(groupingBy === GROUPING_TYPE.ADDRESS) slicedGroup.sort((a,b) => (addressOrder.indexOf(a.key)>addressOrder.indexOf(b.key))?1:-1);
    else slicedGroup.sort((a,b) => (a.key>b.key)?1:-1);
    slicedGroup.forEach(pieces => pieces.value.characters.sort((a,b) => (a.about.reading>b.about.reading)?1:-1));
    const sortedGroup = Object.assign({}, ...slicedGroup.map((item) => ({
        [item.key]: item.value,
    })));
    return sortedGroup;
}
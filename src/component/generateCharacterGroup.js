const GROUPING_TYPE = {
    ADDRESS: 'address',
    BIRTHDAY: 'birthday',
    READING: 'reading',
    HEIGHT: 'height'
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
    var slicedGroup = Object.values(group);
    switch(groupingBy) {
        case GROUPING_TYPE.ADDRESS:
            slicedGroup.sort((a,b) => (addressOrder.indexOf(a.name) > addressOrder.indexOf(b.name))?1:-1);
            break;
        case GROUPING_TYPE.BIRTHDAY:
            slicedGroup.sort((a,b) => (new Date(a.name) > new Date(b.name))?1:-1);
            slicedGroup = replaceDate(slicedGroup);
            break;
        case GROUPING_TYPE.HEIGHT:
            slicedGroup.sort((a,b) => parseFloat(a.name) > parseFloat(b.name) ? 1:-1);
            break;
        default:
            slicedGroup.sort((a,b) => (a.name>b.name)?1:-1);
    }
    slicedGroup.forEach(pieces => pieces.characters.sort((a,b) => (a.about.reading>b.about.reading)?1:-1));
    return slicedGroup;
}

const replaceDate = (group) => {
    group.forEach((piece,i) => {
        if(piece.name.indexOf("-") === -1) return;
        const splitedDoB = piece.name.split("-");
        group[i].name = splitedDoB[0] + "月" + splitedDoB[1] + "日";
    })
    return group;
}
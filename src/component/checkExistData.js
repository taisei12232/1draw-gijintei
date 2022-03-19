export const checkExistData = (character) => {
    const nodata = {
        about:{
            name:'No data',
            reading:'No data',
            japanesename:'',
            height:'No data',
            description:'No data',
            motif:'No data',
            birthday:'No data',
            address:'No data'
        },
        ids:[]
    }
    const fulldata = {...nodata,...character};
    fulldata.about = {...nodata.about,...character.about};
    return fulldata;
}
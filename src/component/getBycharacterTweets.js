import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"
import useSWRImmutable from 'swr/immutable'
import { checkExistData } from './checkExistData';

export const useFetchBycharaTweet = (logicId, nameOfChara) => {
    const fetcher = async () => {
        const docRef = doc(db, logicId, nameOfChara);
        const response = await getDoc(docRef)
        if(!response.exists()){
            return {
                about:{
                    description:'No data',
                    address:'No data',
                    height:'No data',
                    birthday:'No data',
                    motif:'No data'
                },
                ids:[]
            }
        }
        var data = checkExistData(response.data())
        data = replaceDate(data);
        return data;
    };
    return useSWRImmutable(`/doc/${nameOfChara}`, fetcher);
};

const replaceDate = (data) => {
    if(data.about.birthday.indexOf("-") === -1) return data;
    const splitedDoB = data.about.birthday.split("-");
    data.about.birthday = splitedDoB[0] + "月" + splitedDoB[1] + "日";
    return data;
}
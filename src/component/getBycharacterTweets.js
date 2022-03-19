import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"
import useSWR from 'swr'
import { checkExistData } from './checkExistData'

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
        return data;
    };
    return useSWR(`/doc/${nameOfChara}`, fetcher);
};
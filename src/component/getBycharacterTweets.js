import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"
import useSWR from 'swr'

export const useFetchBycharaTweet = (logicId, nameOfChara) => {
    const fetcher = async () => {
        const docRef = doc(db, logicId, nameOfChara);
        const response = await getDoc(docRef)
        if(!response.exists()){
            return {
                'about':{
                    'description':'No data',
                    'address':'No data',
                    'birthday':'No data',
                    'motif':'No data'
                },
                'ids':[]
            }
        }
        var data = response.data()
        if(!('about' in data)){
            data['about'] = {
                'description':'No data',
                'address':'No data',
                'birthday':'No data',
                'motif':'No data'
            }
        }
        if(!('ids' in data)){
            data['ids'] = []
        }
        return data;
    };
    return useSWR(`/doc/${nameOfChara}`, fetcher);
};
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
                    'description':'Nodata',
                    'address':'Nodata',
                    'birthday':'Nodata',
                    'motif':'Nodata'
                },
                'ids':[]
            }
        }
        return response.data();
    };
    return useSWR(`/doc/${nameOfChara}`, fetcher);
};
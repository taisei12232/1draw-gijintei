import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"
import useSWR from 'swr'

export const useFetchBycharaTweet = (logicId, nameOfChara) => {
    const fetcher = async () => {
        const docRef = doc(db, logicId, nameOfChara);
        const response = getDoc(docRef)
        if('ids' in response.data){
            return response.data()['ids']
        }else{
            return []
        }
    };
    return useSWR(`/doc/${nameOfChara}`, fetcher);
};
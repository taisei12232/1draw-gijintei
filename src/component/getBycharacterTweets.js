import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"
import useSWR from 'swr'

export const useFetchBycharaTweet = (logicId, nameOfChara) => {
    const fetcher = async () => {
        const docRef = doc(db, logicId, nameOfChara);
        console.log(nameOfChara);
        const response = await getDoc(docRef)
        console.log(nameOfChara);
        console.log(response)
        console.log(response.exists())
        if('ids' in response.data()){
            console.log(response.data()['ids'])
            return response.data()['ids']
        }else{
            console.log("error!");
            return []
        }
    };
    return useSWR(`/doc/${nameOfChara}`, fetcher);
};
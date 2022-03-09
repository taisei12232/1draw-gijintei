import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"
import useSWR from 'swr'

export const useFetchAllCharacters = (logicId) => {
    const fetcher = async () => {
        const docRef = collection(db, logicId);
        const response = await getDocs(docRef);
        var docs = {};
        response.forEach(doc => {
            const address = doc.data()['about']['address'];
            if(address in docs){
                docs[address].push(doc.id);
            }else{
                docs[address] = [doc.id];
            }
        });
        return docs;
    };
    return useSWR(`/doc/allchara`, fetcher);
};
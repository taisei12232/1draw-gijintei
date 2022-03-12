import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"
import useSWRImmutable from 'swr/immutable'


export const useFetchAllCharacters = (logicId,key) => {
    const fetcher = async () => {
        const docRef = collection(db, logicId);
        const response = await getDocs(docRef);
        var docs = {};
        response.forEach(doc => {
            const keys = doc.data()['about'][key];
            if(keys in docs){
                docs[keys].push(doc.id);
            }else{
                docs[keys] = [doc.id];
            }
        });
        return docs;
    };
    return useSWRImmutable(`/doc/allchara`, fetcher);
};
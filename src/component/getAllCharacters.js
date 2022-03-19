import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"
import useSWRImmutable from 'swr/immutable'
import { checkExistData } from './checkExistData'

export const useFetchAllCharacters = (logicId) => {
    const fetcher = async () => {
        const docRef = collection(db, logicId);
        const response = await getDocs(docRef);
        var docs = [];
        response.forEach(doc => {
            const data = checkExistData(doc.data());
            docs.push(data);
        });
        return docs;
    };
    return useSWRImmutable(`/doc/allchara`, fetcher);
};
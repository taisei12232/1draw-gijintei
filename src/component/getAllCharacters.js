import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"
import useSWRImmutable from 'swr/immutable'


export const useFetchAllCharacters = (logicId) => {
    const fetcher = async () => {
        const docRef = collection(db, logicId);
        const response = await getDocs(docRef);
        var docs = [];
        response.forEach(doc => {
            docs.push(doc.data())
        });
        return docs;
    };
    return useSWRImmutable(`/doc/allchara`, fetcher);
};
import { doc, getDoc} from "firebase/firestore";
import { db } from "./firebase"
import useSWRImmutable from 'swr/immutable'

export const useFetchTodaysTheme = () => {
    const fetcher = async () => {
        const docRef = doc(db, "ocharas", "gijintei");
        const response = await getDoc(docRef)
        return { date:response.data().todaysTheme.date, theme:response.data().todaysTheme.theme }
    }
    return useSWRImmutable(`/doc/todaystheme`, fetcher);
};
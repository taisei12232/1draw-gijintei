import { doc, getDoc} from "firebase/firestore";
import { db } from "./firebase"
import useSWRImmutable from 'swr/immutable'

export const TodaysTheme = () => {
    const fetcher = async () => {
        const docRef = doc(db, "ocharas", "gijintei");
        return getDoc(docRef)
            .then(response => {
                return { date:response.date, theme:response.theme }
            });
    }
    return useSWRImmutable(`/doc/todaystheme`, fetcher);
};
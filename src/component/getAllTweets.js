import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"
import useSWR from 'swr'

export const useFetchAllTweet = (logicId, dateList) => {
    const fetcher = async () => {
      const requests = dateList.map(date => {
        const docRef = doc(db, logicId, date);
        return getDoc(docRef)
          .then(response => {
            if(!response.exists()){
              return { date, tweetIds: []}
            }
            return { date, tweetIds: response.data()['0'] }
          })
      })
      return await Promise.all(requests);
    };
    return useSWR(`/doc/${logicId}`, fetcher);
};
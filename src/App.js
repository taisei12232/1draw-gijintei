import { TwitterTweetEmbed } from 'react-twitter-embed';
import useSWR from 'swr'
import './App.css';
import Header from './component/Header';
import { doc, getDoc } from "firebase/firestore";
import { db } from "./component/firebase.js"
import { days } from "./component/Days.js"

const LogicId = {
  ILLUST_SO_FAR: 'illust_so_far',
}

function App() {
  const {data} = useFetchTweet(LogicId.ILLUST_SO_FAR, days);
  if (!data) return (<div>loading...</div>)
  return (
    <div className="App">
      <Header />
      {data.map(({date, tweetIds}) => (
        <div key={date} className="Days">
          <p>{date}</p>
          <div className="twitter">
            {tweetIds.map(tweetId => (
              <TwitterTweetEmbed
                key={tweetId}
                tweetId={tweetId}
                options={{ width: 250 }}
                placeholder={
                  <div
                    style={{
                      padding: 10,
                      margin: 10,
                      backgroundColor: 'gray',
                      color: 'white'
                    }}
                    >
                  </div>
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export const useFetchTweet = (logicId, dateList) => {
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

export default App;
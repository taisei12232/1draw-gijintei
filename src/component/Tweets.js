import React from 'react'
import { days } from "./Days"
import { useFetchAllTweet } from './getAllTweets';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import './Tweets.css';

const LogicId = {
    ILLUST_SO_FAR: 'illust_so_far',
}

function Tweets(){
    const {data} = useFetchAllTweet(LogicId.ILLUST_SO_FAR, days);
    if (!data) return (<div>loading...</div>)
    return (
        <div className='component-tweets'>
            {data.map(({date, tweetIds}) => (
                <div key={date} className="Days">
                    <p>{date}</p>
                    <div className="twitter">
                        {tweetIds.map(tweetId => (
                        <TwitterTweetEmbed
                            key={tweetId}
                            tweetId={tweetId}
                            options={{ width: 250,
                                    conversation: 'none',
                                    lang: 'ja' }}
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

export default Tweets;
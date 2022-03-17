import React from 'react'
import { useParams } from 'react-router-dom'
import './Bychara.css';
import { useFetchBycharaTweet } from './getBycharacterTweets';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const LogicId = {
    BY_CHARA: 'by_chara',
}

function About() {
    const { name } = useParams();
    const { data } = useFetchBycharaTweet(LogicId.BY_CHARA,name);
    if (!data) return (<div>loading...</div>)
    return (
        <div className='component-bychara'>
            <h1>{name}</h1>
            <h2>description</h2>
            <p>{data['about']['description']}</p>
            <h2>address</h2>
            <p>{data['about']['address']}</p>
            <h2>height</h2>
            <p>{data['about']['height']}</p>
            <h2>birthday</h2>
            <p>{data['about']['birthday']}</p>
            <h2>motif</h2>
            <p>{data['about']['motif']}</p>
            <h2>Illust</h2>
            {data['ids'].length
                ?
                <div className="tweets">
                    {data['ids'].map(tweetId => (
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
                :<p>No data</p>
            }
        </div>
    )
}

export default About
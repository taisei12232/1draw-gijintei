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
    console.log(data);
    if (!data) return (<div>loading...</div>)
    return (
        <div className='component-bychara'>
            <h1>{name}</h1>
            <h2>description</h2>
            <p>蓬莱姉妹の長女。身長が姉妹の中で1番小さいがこれでも中央都市区のエリアAの管理者。妹達の支え（マスコット）となっている。</p>
            <h2>address</h2>
            <p>中央区統制局</p>
            <h2>birthday</h2>
            <p>11月20日</p>
            <h2>motif</h2>
            <p>ネズミ</p>
            <h2>Illust</h2>
            <div class="tweets">
                {data
                    ? data.map(tweetId => (
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
                ))
            :<p>loading...</p>
            }
            </div>
        </div>
    )
}

export default About
import React from 'react'
import { days } from "./Days"
import { useFetchOneDrawTweet} from './getOneDrawTweets';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { useFetchTodaysTheme } from './getTodaysTheme';
import { Link } from 'react-router-dom';
import './OneDraw.css';

const LogicId = {
    ILLUST_SO_FAR: 'illust_so_far',
}

function OneDraw(){
    const { data:theme } = useFetchTodaysTheme();
    const {data} = useFetchOneDrawTweet(LogicId.ILLUST_SO_FAR, days);
    if (!data || !theme) return (<div>loading...</div>)
    return (
        <div className='component-onedraw'>
            <div>
                <p className='theme-day'>{theme.date}のお題</p>
                <div className='theme-div'>
                {theme.theme.map(character => (
                    <Link
                        key={character}
                        className="theme"
                        to={`/bychara/${character}`}
                        >
                        {character}
                    </Link>
                ))}
                </div>
            </div>
            {data.map(({date, tweetIds}) => (
                <div key={date} className="Days">
                    <p>{date}</p>
                    <div className="onedraw-tweets">
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

export default OneDraw;
import React from 'react'
import { useParams } from 'react-router-dom'
import './Bychara.css';

function About() {
    const { name } = useParams();
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
        </div>
    )
}

export default About
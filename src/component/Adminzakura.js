import React, { useState, useRef } from 'react'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import './Adminzakura.css';

const Adminzakura = () => {
    const [resStatus,setResStatus] = useState("")
    const name = useRef(null);
    const japanesename = useRef(null);
    const reading = useRef(null);
    const description = useRef(null);
    const address = useRef(null);
    const height = useRef(null);
    const birthday = useRef(null);
    const motif = useRef(null);
    const passwd = useRef(null);
    const [isRevealPassword, setIsRevealPassword] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = {
            name:name.current.value,
            japanesename:japanesename.current.value,
            reading:reading.current.value,
            description:description.current.value,
            address:address.current.value,
            height:height.current.value,
            birthday:birthday.current.value,
            motif:motif.current.value,
            passwd:passwd.current.value
        }
        console.log(params)
        await axios.post('https://asia-northeast1-ouagijintei.cloudfunctions.net/updateCharacter',params)
            .then(response => {
                console.log(response.status)
                console.log(response.data)
                setResStatus(response.data)
            })
            .catch(({response}) => {
                console.log(response.status)
                console.log(response.data)
                setResStatus(response.data)
            });
    };
    const togglePassword = () => {
        setIsRevealPassword((prevState) => !prevState);
    }
    return (
        <div className='component-adminzakura'>
            <select>
                <option value="adazakura">アダザクラ</option>
            </select>
            <form onSubmit={handleSubmit}>
                <p>(必須)名前</p>
                <input type='text' name='name' ref={name} placeholder='蓬莱ネネ' required />
                <p>漢字の名前(存在する場合)(カナ混じりの場合もフルネームで書いてください)(存在しない場合は必ず空欄にしてください)</p>
                <input type="text" name='japanesename' ref={japanesename} placeholder='蓬莱子々' />
                <p>(必須)読み(記号なし全てカタカナ)</p>
                <input type='text' name='reading' ref={reading} placeholder='ヨモギライネネ' required />
                <p>説明</p>
                <textarea rows='10' cols='40' ref={description} defaultValue='No data' />
                <p>住所</p>
                <input type='text' name='address' ref={address} defaultValue='No data' />
                <p>身長(数値cmの形で記入してください)</p>
                <input type='text' name='height' ref={height} defaultValue='No data' />
                <p>誕生日(数値-数値の形で記入してください)</p>
                <input type='text' name='birthday' ref={birthday} defaultValue='No data' />
                <p>モチーフ</p>
                <input type='text' name='motif' ref={motif} defaultValue='No data' />
                <p>パスワード</p>
                <input type={isRevealPassword ? 'text' : 'password'} name='passwd' ref={passwd} required />
                <span
                    onClick={togglePassword}
                    className='eye'
                >
                    {isRevealPassword ?
                        <FontAwesomeIcon icon={faEye} />
                    :
                        <FontAwesomeIcon icon={faEyeSlash} />
                    }
                </span>
                <div>
                    <input type='submit' />
                </div>
            </form>
            <p>{resStatus}</p>
        </div>
    );
};

export default Adminzakura;
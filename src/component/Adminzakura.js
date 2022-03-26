import React, { useState } from 'react'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Adminzakura.css';

const Adminzakura = () => {
    const [name,setName] = useState("");
    const [japanesename,setJapanesename] = useState("");
    const [reading,setReading] = useState("");
    const [description,setDescription] = useState("No data");
    const [address,setAddress] = useState("No data");
    const [height,setHeight] = useState("No data");
    const [birthday,setBirthday] = useState("No data");
    const [motif,setMotif] = useState("No data");
    const [passwd,setPasswd] = useState("");
    const [isRevealPassword, setIsRevealPassword] = useState(false);
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleJapanesenameChange = (e) => {
        setJapanesename(e.target.value);
    }
    const handleReadingChange = (e) => {
        setReading(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    }
    const handleBirthdayChange = (e) => {
        setBirthday(e.target.value);
    }
    const handleMotifChange = (e) => {
        setMotif(e.target.value);
    }
    const handlePasswdChange = (e) => {
        setPasswd(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(japanesename);
        console.log(reading);
        console.log(description);
        console.log(address);
        console.log(height);
        console.log(birthday);
        console.log(motif);
        console.log(passwd);
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
                <input type='text' name='name' value={name} placeholder='蓬莱ネネ' required onChange={handleNameChange} />
                <p>漢字の名前(存在する場合)(カナ混じりの場合もフルネームで書いてください)(存在しない場合は必ず空欄にしてください)</p>
                <input type="text" name='japanesename' value={japanesename} placeholder='蓬莱子々' onChange={handleJapanesenameChange} />
                <p>(必須)読み(記号なし全てカタカナ)</p>
                <input type='text' name='reading' value={reading} placeholder='ヨモギライネネ' required onChange={handleReadingChange} />
                <p>説明</p>
                <textarea rows='10' cols='40' value={description} onChange={handleDescriptionChange} />
                <p>住所</p>
                <input type='text' name='address' value={address} onChange={handleAddressChange} />
                <p>身長(数値cmの形で記入してください)</p>
                <input type='text' name='height' value={height} onChange={handleHeightChange} />
                <p>誕生日(数値-数値の形で記入してください)</p>
                <input type='text' name='birthday' value={birthday} onChange={handleBirthdayChange} />
                <p>モチーフ</p>
                <input type='text' name='motif' value={motif} onChange={handleMotifChange} />
                <p>パスワード</p>
                <input type={isRevealPassword ? 'text' : 'password'} name='passwd' value={passwd} required onChange={handlePasswdChange} />
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
        </div>
    );
};

export default Adminzakura;
import React, { useState, useCallback, useEffect } from 'react'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetchAllCharacters } from "./getAllCharacters";
import { useFetchForAdmin } from './getBycharacterTweets';
import axios from 'axios';
import './Adminzakura.css';

const Adminzakura = () => {
    const { data: characters } = useFetchAllCharacters("by_chara");
    const [chosenCharacter,setChosenCharacter] = useState("新規作成");
    const { data: charactersList } = useFetchForAdmin("by_chara",chosenCharacter)
    const [resStatus,setResStatus] = useState("")
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
    const [isDisabled,setIsDisabled] = useState(true)
    useEffect(() => {
        if(charactersList){
            setName(charactersList.about.name);
            setJapanesename(charactersList.about.japanesename);
            setReading(charactersList.about.reading);
            setDescription(charactersList.about.description);
            setAddress(charactersList.about.address);
            setHeight(charactersList.about.height);
            setBirthday(charactersList.about.birthday);
            setMotif(charactersList.about.motif);
            setResStatus("");
        }
    },[charactersList])
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
    const blockSubmit = (e) => {
        e.preventDefault();
    }
    const handleSubmit = async () => {
        setResStatus("");
        setIsDisabled(false);
        const params = {
            docName:chosenCharacter,
            passwd:passwd,
            about:{
                name:name,
                japanesename:japanesename,
                reading:reading,
                description:description,
                address:address,
                height:height,
                birthday:birthday,
                motif:motif
            }
        }
        if(chosenCharacter === "新規作成"){
            await axios.post('https://asia-northeast1-ouagijintei.cloudfunctions.net/createNewCharacter',params)
                .then(response => {
                    setResStatus(response.data)
                    setIsDisabled(true);
                })
                .catch(({response}) => {
                    setResStatus(response.data)
                    setIsDisabled(true);
                });
        }
        else{
            await axios.post('https://asia-northeast1-ouagijintei.cloudfunctions.net/updateCharacter',params)
                .then(response => {
                    setResStatus(response.data)
                    setIsDisabled(true);
                })
                .catch(({response}) => {
                    setResStatus(response.data)
                    setIsDisabled(true);
                });
        }
    };
    const handleDelete = async () => {
        setResStatus("");
        setIsDisabled(false);
        const params = {
            docName:chosenCharacter,
            passwd:passwd,
            about:{
                name:name,
                japanesename:japanesename,
                reading:reading,
                description:description,
                address:address,
                height:height,
                birthday:birthday,
                motif:motif
            }
        }
        await axios.post('https://asia-northeast1-ouagijintei.cloudfunctions.net/deleteCharacter',params)
            .then(response => {
                setResStatus(response.data)
                setIsDisabled(true);
            })
            .catch(({response}) => {
                setResStatus(response.data)
                setIsDisabled(true);
            });
    }
    const togglePassword = () => {
        setIsRevealPassword((prevState) => !prevState);
    }
    const handleSelectChange = useCallback((e) => {
        setChosenCharacter(e.target.value);
    }, []);
    if(!charactersList || !characters) return <div><p>loading...</p></div>
    return (
        <div className='component-adminzakura'>
            <p>変更したいキャラクターを選んでください(新規作成の場合は必ず新規作成を選択してください)</p>
            <select onChange={handleSelectChange}>
                <option hidden>選択してください</option>
                <option value='新規作成'>新規作成</option>
                {characters.map(character => (
                    <option key={character.about.name} value={character.about.name}>{character.about.name}</option>
                ))}
            </select>
            <p>選択中：{chosenCharacter}</p>
            <form onSubmit={blockSubmit}>
                <p>(必須)名前</p>
                <input type='text' name='name' onChange={handleNameChange} value={name} required />
                <p>漢字の名前(存在する場合)(カナ混じりの場合もフルネームで書いてください)(存在しない場合は必ず空欄にしてください)</p>
                <input type="text" name='japanesename' onChange={handleJapanesenameChange} value={japanesename} />
                <p>(必須)読み(記号なし全てカタカナ)</p>
                <input type='text' name='reading' onChange={handleReadingChange} value={reading} required />
                <p>説明</p>
                <textarea rows='10' cols='40' onChange={handleDescriptionChange} value={description} />
                <p>住所</p>
                <input type='text' name='address' onChange={handleAddressChange} value={address} />
                <p>身長(数値cmの形で記入してください)</p>
                <input type='text' name='height' onChange={handleHeightChange} value={height} />
                <p>誕生日(数値-数値の形で記入してください)</p>
                <input type='text' name='birthday' onChange={handleBirthdayChange} value={birthday} />
                <p>モチーフ</p>
                <input type='text' name='motif' onChange={handleMotifChange} value={motif} />
                <p>パスワード</p>
                <input type={isRevealPassword ? 'text' : 'password'} name='passwd' onChange={handlePasswdChange} required />
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
                    {isDisabled && <div className='submit-button'><input type='button' value="送信" onClick={handleSubmit} /> <input type='button' value='削除' className='delete-button' onClick={handleDelete} /></div>}
            </form>
            <p>{resStatus}</p>
        </div>
    );
};

export default Adminzakura;
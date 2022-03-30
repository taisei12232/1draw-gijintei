import React from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import './confetti.css'

const Anniversary = () => {
    const { width, height } = useWindowSize()
    const dt = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
    if((dt.getMonth()+1) + "-" +  dt.getDate() === "3-30"){
        return (
            <div className='confetti'>
                <Confetti 
                    width={width}
                    height={height}
                />
            </div>
          )
    }
    return null;
}

export default Anniversary;
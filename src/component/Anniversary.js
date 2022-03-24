import Confetti from 'react-confetti'

const Anniversary = () => {
    const dt = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
    if((dt.getMonth()+1) + "-" +  dt.getDate() === "4-26") return <Confetti />;
    return null;
}

export default Anniversary;
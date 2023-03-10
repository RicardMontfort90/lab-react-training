import { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'


function Dice() {
    const [dice,setDice] = useState(diceEmpty);
    const dicePictures = [dice1, dice2, dice3, dice4, dice5, dice6];

    const handleDiceChange = () => {
        setDice(diceEmpty);
        setTimeout(() => {
            setDice(dicePictures[Math.floor(Math.random() * dicePictures.length)])
        }, 1000)
    };

    return (
        <div onClick={handleDiceChange}>
            <img width="70px" height="70px" src={dice} alt="dice" />
        </div>
    );
};

export default Dice;
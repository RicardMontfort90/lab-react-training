import React, { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);

    const handleIncreaseButton = () => {
        setLikes(prev => prev + 1);
    };

    const ButtonColors = ['purple','blue','green','yellow','orange','red'];

    const ChangeButtonColors = {
        Change : `${ButtonColors[Math.floor(Math.random()*ButtonColors.length)]}`
    };

    return (
        <div>
            <button onClick = {handleIncreaseButton} style = {ChangeButtonColors} >
                {likes} Likes
            </button>
        </div>
    );
};

export default LikeButton;
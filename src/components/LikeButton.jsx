import React, { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);

    const ButtonColors = ['purple','blue','green','yellow','orange','red'];

    const ChangeButtonColors = {
        Change : `${ButtonColors[Math.floor(Math.random()*ButtonColors.length)]}`
    };
    
    
    const handleIncreaseButton = () => {
        setLikes(prev => prev + 1);
    };

    return (
        <div>
            <button  style = {ChangeButtonColors} onClick = {handleIncreaseButton}  >
                {likes} Likes
            </button>
        </div>
    );
};

export default LikeButton;
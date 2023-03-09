import { useState } from "react";

function ClickablePicture({ img, imgClicked}) {
    const [picture, setPicture] = useState(img);

    const handleClickablePicture = () => {
        const newPicture = picture === img ? imgClicked : img;
        setPicture(newPicture);
    };

    return(
        <img onClick={handleClickablePicture} src={picture} alt="maxence" />
    );
}; 

export default ClickablePicture;
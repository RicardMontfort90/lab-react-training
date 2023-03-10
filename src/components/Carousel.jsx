import { useState, useEffect } from 'react';

function Carousel({images}) {
    
    const [imageIndex, setImageIndex] = useState(0);
    const [img, SetImage] = useState(images[imageIndex]);

    useEffect(() => {
        SetImage(images[imageIndex])
    }, [imageIndex]);

    const handleLeft = () => {
        if(imageIndex > 0){
            setImageIndex(prev => prev -1)
        }
    };

    const handleRight = () => {
        if(imageIndex < images.length -1){
            setImageIndex(prev => prev +1)
        }
    };


    return (
        <div>
            <img src={img} alt="Default" />
            <button onClick={handleLeft}>Left</button>
            <button onClick={handleRight}>Right</button>
        </div>
    );
};

export default Carousel;
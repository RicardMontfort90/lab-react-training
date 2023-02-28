import React from "react";

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className="id-card">
            <img src={picture} alt={`${firstName} ${lastName}`}/>
            <div className="id-card-info">
                <div><strong>First Name: </strong>{firstName}</div>
                <div><strong></strong>{}</div>
                <div><strong></strong>{}</div>
                <div><strong></strong>{}</div>
                <div><strong></strong>{}</div>
            </div>
        </div>
    )
}

export default IdCard;
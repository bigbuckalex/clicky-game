import React from "react";

function Card(props) {
    return(
        <img src={props.image} alt={props.id} class="img-thumbnail" onClick={() => props.handleCardClicked(props.id)}></img>
    );
}

export default Card;
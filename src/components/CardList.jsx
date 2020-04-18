import React from "react";
import Card from "./Card";

const CardList = ({cardTypes}) => {
    return(
        <div>
            {
                cardTypes.map((cardType, i) => {
                    return(
                        <Card
                        key={i}
                        id={cardTypes[i].id}
                        name={cardTypes[i].name}
                        profile={cardTypes[i].profile}
                        exp={cardTypes[i].exp}
                        type={cardTypes[i].type}
                        />
                    );

                })
            }

        </div>
    )

}


export default CardList
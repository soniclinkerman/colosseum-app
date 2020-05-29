import React from "react";
import Card from "../Card/Card";
import {Link} from "react-router-dom";
import "./CardList.css"

const CardList = ({cardTypes}) => {
    return(
        <div className="card-list">
            {
                cardTypes.map((cardType, i) => {
                    return(
                        <Link key={i} to={`/challenge/${cardTypes[i].id}`}>
                            <Card
                            key={i}
                            id={cardTypes[i].id}
                            name={cardTypes[i].name}
                            profile={cardTypes[i].profile}
                            exp={cardTypes[i].exp}
                            type={cardTypes[i].type}
                            />
                        </Link>
                    );

                })
            }

        </div>
    )

}


export default CardList
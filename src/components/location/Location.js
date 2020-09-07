import React from "react"
import "./Location.css"

export const Location = ({location}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <div className="location__sqFt">Square Footage: {location.squareFootage}</div>      
        <div className="location__accessible">{location.handicap}</div>
    </section>
)
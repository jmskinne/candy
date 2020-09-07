import React from "react"
import "./Products.css"

export const Product = ({product, pType}) => (
    <section className="product">
        <h5 className="product__name">{product.productName}</h5>
        <div className="product__price">{product.price}</div>
        <div className="product__type">Candy Type : {pType.candyType}</div>

    </section>
)
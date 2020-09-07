import React, {useContext, useEffect} from 'react'

import {ProductContext} from "./ProductsProvider"
import {Product} from "./Product"
import {ProductTypeContext} from "./ProductTypeProvider"

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)
    const {productTypes, getProductTypes} = useContext(ProductTypeContext)

    useEffect(() => {
        getProducts()
        getProductTypes()
    },[])

    return (
        <article className="products">
            {
                products.map(product => {
                    const matchedType = productTypes.find(t => t.id === product.productTypeId) || {}
                        return <Product key={product.id} product={product} pType={matchedType} />})
            }
        </article>
    )
}
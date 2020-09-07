import React, {useState} from "react"

export const ProductTypeContext = React.createContext()

export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTyes] = useState ([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
        .then(r => r.json())
        .then(setProductTyes)
    }

    return <ProductTypeContext.Provider value={{
        productTypes, getProductTypes
    }}>
        {props.children}
    </ProductTypeContext.Provider>
}
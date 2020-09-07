import React, {useState} from "react"

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
        .then(r => r.json())
        .then(setProducts)
    }

    return (
        <ProductContext.Provider value={{
            products, getProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    )


}
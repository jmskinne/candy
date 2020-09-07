import React from "react"
import { Route } from "react-router-dom"

import {ProductProvider} from "./products/ProductsProvider"
import {ProductList} from "./products/ProductList"

import {LocationProvider} from "./location/LocationProvider"
import {LocationList} from "./location/LocationList"

import {ProductTypeProvider} from "./products/ProductTypeProvider"

import {EmployeeProvider} from "./employee/EmployeeProvider"
import {EmployeeList} from "./employee/EmployeeList"
import {EmployeeForm} from "./employee/EmployeeForm"

export const ApplicationViews = (props) => {
    return (
        <>
            <h2>Kandy Korner</h2>

                
                <LocationProvider>
                    <Route exact path="/">

                        <LocationList />
                    </Route>
                </LocationProvider>

                
                <ProductProvider>
                    <ProductTypeProvider>
                        <Route path="/products">
                            <ProductList />

                        </Route>
                    </ProductTypeProvider>
                </ProductProvider>

                <EmployeeProvider>
                    <LocationProvider>
                        <Route exact path="/employees" render={
                            props => <EmployeeList {...props} />
                        } />

                        <Route exact path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        }>

                        </Route>

                    </LocationProvider>
                </EmployeeProvider>

        </>
    )
}
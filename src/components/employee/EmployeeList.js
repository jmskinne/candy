import React, {useContext, useEffect} from 'react'

import {EmployeeContext} from "./EmployeeProvider"
import {Employee} from "./Employee"
import {LocationContext} from "../location/LocationProvider"

export const EmployeeList = (props) => {
    const {employees, getEmployees} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getEmployees()
        getLocations()
    }, [])

    return (
        <article className="employees">   
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>

            
                {
                    employees.map(employee => {
                        const matchedLocation = locations.find(l => l.id === employee.locationId) || {}
                            return <Employee key={employee.id} employee={employee} matchLoc = {matchedLocation} />
                    })
                }
        </article>
        
    )
}

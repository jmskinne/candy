import React, {useContext, useRef, useEffect} from "react"
import {EmployeeContext} from "./EmployeeProvider"
import {LocationContext} from "../location/LocationProvider"

export const EmployeeForm = (props) => {
    const {addEmployee} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)
    const manager = useRef(null)
    const hoursWorked = useRef(null)
    const hourlyRate = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])

    const createNewEmployee = () => {
        const locationId = parseInt(location.current.value)

        if(locationId === 0) {
            window.alert("Location, please")
        } else {
            addEmployee({
                name : name.current.value,
                manager : manager.current.value,    //dropdown?
                workClass : parseInt(hoursWorked.current.value),
                hourlyRate : parseInt(hourlyRate.current.value),
                locationId
            })
            .then(() => props.history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm_title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee Name : </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee Name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assigned Store: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control">
                        <option value="0">Select a location</option>
                        {
                            locations.map(l => (
                                <option key={l.id} value={l.id}>
                                    {l.name}    
                                </option>

                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeManagerName">Manager Name: </label>
                    <input type="text" id="employeeManagerName" ref={manager} required autoFocus className="form-control" placeholder="Manager Name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="workClassification">Full or Part Time? </label>
                    <select defaultValue="" name="workClassification" ref={hoursWorked} id="employeeClassification" className="form-control">
                        <option value="0">Select a Classification</option>
                        <option value="1">Full-Time</option>
                        <option value="2">Part-Time</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeHourlyRate">Pay Rate: </label>
                    <input type="text" id="employeeHourlyRate" ref={hourlyRate} required autoFocus className="form-control" placeholder="Hourly Pay Rate" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={event => {
                    event.preventDefault()
                    createNewEmployee()
                }}
                className="btn btn-primary">
                Create Employee
            </button>
            
                

        </form>
    )

}
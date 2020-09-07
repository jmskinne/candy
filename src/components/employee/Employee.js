import React from "react"
//import "./Employee.css"

export const Employee = ({employee, matchLoc}) => (
    <section class="employee">
        <h3 class="employee__name">{employee.name}</h3>
        <div class="employee__workLocation">Assigned Location : {matchLoc.name}</div>
        <div class="employee__manager">Manager: {employee.manager}</div>
        <div class="employee__payRate">Pay Rate: ${employee.hourlyRate}</div>
        <div class="employee__class">{employee.workClass}</div>
        
        
    </section>
)

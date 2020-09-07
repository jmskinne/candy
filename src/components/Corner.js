import React from "react"
import "./Corner.css"
//import {Route} from 'react-router-dom'
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

export const Corner = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)
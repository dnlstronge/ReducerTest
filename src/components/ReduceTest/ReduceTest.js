import React, { useState, useEffect, useReducer } from "react"
import classes from "./ReduceTest.module.css"

const updateSelect = (state, action) => {
if(action.type)
}

const ReduceTest = (props) => {
    const [selectAmount, dispatchSelectAmount] = useReducer(updateSelect, {
                                                        personal_allowance: 0,
                                                        status: '',
                                                        housing: 0,
                                                        Carer: 0,
                                             })
    const handlePA = (e) => {
            dispatchSelectAmount({type: "PERSONAL_ALLOWANCE", personal_allowance: e.target.value})
         }                                              

    return (
        <div className={classes.container}>
            <label htmlFor="dropdown_PA">
                <select className={classes.dropdown_PA} id="dropdown_PA">
                    <option value="100}>Single under 25</option>
                    <option value={100}>Single over 25</option>
                    <option>Couple under 25</option>
                    <option>Couple over 25</option>
                </select>
            </label>
        </div>
    )
}
export default ReduceTest

import React, { useState, useEffect, useReducer } from "react"
import classes from "./ReduceTest.module.css"

const amounts = {
    singleUnder: 100,
    singleOver: 150,
    coupleOver: 250,
    coupleUnder: 200
}

const amountLCW = {
    LCW: 150,
    WRA: 300,
}

const updateSelect = (state, action) => {
if(action.type === "PERSONAL_ALLOWANCE") {
return {...state, personal_allowance: action.PA}
}
if(action.type === "LCW") {
    return {...state, WCA: action.WC}
}
}

const ReduceTest = (props) => {
    const [selectAmount, dispatchSelectAmount] = useReducer(updateSelect, {
                                                        personal_allowance: 0,
                                                        status: '',
                                                        housing: 0,
                                                        Carer: 0,
                                             })
    const handlePA = (e) => {
            dispatchSelectAmount({type: "PERSONAL_ALLOWANCE", PA: e.target.value})
         }
    const handleWC = (e) => {
        dispatchSelectAmount({type: "LCW", WC: e.target.value})
    }                                              

    return (
        <div className={classes.container}>
            <label htmlFor="dropdown_PA">
                <select onChange={handlePA} className={classes.dropdown_PA} id="dropdown_PA">
                    <option value={0}>--Select--</option>
                    <option value={amounts.singleUnder}>Single under 25</option>
                    <option value={amounts.singleOver}>Single over 25</option>
                    <option value={amounts.coupleUnder}>Couple under 25</option>
                    <option value={amounts.coupleOver}>Couple over 25</option>
                </select>
            </label>
            <p className={classes.amount} > £{selectAmount.personal_allowance}</p>
            <label htmlFor="dropdown_PA">
                <select onChange={handleWC} className={classes.dropdown_PA} id="dropdown_PA">
                    <option value={0}>--Select--</option>
                    <option value={amountLCW.LCW}>Limited Capabilty</option>
                    <option value={amountLCW.WRA}>LCW + WRA</option>
                   
                </select>
            </label>
            <p className={classes.amount} > £{selectAmount.WCA}</p>
        </div>
    )
}
export default ReduceTest

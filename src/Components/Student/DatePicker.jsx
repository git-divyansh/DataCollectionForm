import React, { useState } from 'react'
import styles from "./Student.module.css";
import {useDispatch} from "react-redux";
import { changeEntityObject } from '../../Slice/EtitySelectionSlice';


const DatePicker = () => {

  const dispatch = useDispatch();

  const [data, setData] = useState({
    "NAME" : "",
    "DATATYPE" : "DATE",
    "VALIDATION" : {
      "MINRANGE" : "",
      "MAXRANGE" : ""
    },
    "MANDATORY" : "",
    "FIELDDATA" : null,
    "TYPE" : "DATEPICKER"
  });

  const handleChange = (itemname, value) => {
    if(value === "NONE") return;
        
    setData((prev) => {
        const obj = {...prev, [itemname] : value};
        return obj;
    })
  }  

  const handleDateChange = (e, item) => {
    if(item === "MINRANGE"){
      setData((prev) => {
        const obj = {...prev, ["VALIDATION"] : {...prev["VALIDATION"], [item] : e.target.value}}
        return obj;
      })
    }
    else{
      setData((prev) => {
        const obj = {...prev, ["VALIDATION"] : {...prev["VALIDATION"], [item] : e.target.value}}
        return obj;
      })
    }
  }

const handleSubmit = (e) => {
    e.preventDefault();
    // if(data["DATATYPE"] === "NUMBER"){
    //     const newObj = {...data, "FIELDDATA" : parseInt(data["FIELDDATA"])};
    //     setData(newObj)
    // }
    dispatch(changeEntityObject(data));
    console.log(data);
}


  return (
    <div className={styles.datepickerContainer}>
      <form className={styles.textboxFormContainer}>
            <div>
                <label htmlFor="field-name">Field name </label>
                <input id='field-name' type="text" onChange={(e) => {handleChange("NAME", e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="field-data-type">Field data type </label>
                <input id='field-data-type' className={styles.datePickerReadOnly} placeholder='Date' readOnly/>
            </div>
            <div>
              <label htmlFor="datepicker-min">Min Range </label>
              <input id='datepicker-min' type="Date" onChange={(e) => handleDateChange(e, "MINRANGE")} />
              <label htmlFor="datepicker-max">Max Range </label>
              <input id='datepicker-max' type="Date" onChange={(e) => handleDateChange(e, "MAXRANGE")}/>
            </div>
            <div>
                <label htmlFor="field-mandatory">Field mandatory </label>
                    <select name="mandatory" id="field-mandatory" onChange={(e) => {handleChange("MANDATORY", e.target.value)}}>
                        <option value="NONE">--Select--</option>
                        <option value="YES">Yes</option>
                        <option value="NO">No</option>
                    </select>
            </div>
            <div>
                <label htmlFor="field-data">Field data </label>
                <input id='field-data' className={styles.datePickerReadOnly} type="text" placeholder='NIL' readOnly/>
            </div>
            <button className={styles.confirmButton} onClick={handleSubmit}>Confirm</button>
        </form>
    </div>
  )
}

export default DatePicker
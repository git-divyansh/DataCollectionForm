import React, { useState } from 'react';
import styles from "./Student.module.css";
import { dataTypes } from '../../Utils';
import {useDispatch, useSelector} from "react-redux";
import { changeEntityObject } from '../../Slice/EtitySelectionSlice';

const TextBox = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState({
        "TYPE" : "TEXTBOX",
        "NAME" : "",
        "DATATYPE" : "",
        "MANDATORY" : "",
        "FIELDDATA" : null,
        "VALIDATION" : ""
    });

    const handleChange = (itemname, value) => {
        if(value === "NONE") return;
            
        setData((prev) => {
            const obj = {...prev, [itemname] : value};
            return obj;
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeEntityObject(data));
    }

  return (
    <div className={styles.textboxFieldTypeContainer}>
        <form className={styles.textboxFormContainer}>
            <div>
                <label htmlFor="field-name">Field name </label>
                <input id='field-name' className={styles.fieldFeatureInputLength} type="text" onChange={(e) => {handleChange("NAME", e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="field-data-type">Field data type </label>
                <select name="field-data-type"  className={styles.fieldFeatureSelectLength} id="field-data-type" onChange={(e) => {handleChange("DATATYPE", e.target.value)}}>
                    {dataTypes.map((item, id) => {
                        return (
                            <option key={id} value={id === 0 ? "NONE" : item} id={id}>{item}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="field-mandatory">Field mandatory </label>
                    <select name="mandatory" className={styles.fieldFeatureSelectLength} id="field-mandatory" onChange={(e) => {handleChange("MANDATORY", e.target.value)}}>
                        <option value="NONE">--Select--</option>
                        <option value="YES">Yes</option>
                        <option value="NO">No</option>
                    </select>
            </div>
            <div>
                <label htmlFor="field-data">Field Validation (length) </label>
                <input id='field-data' type="number" className={styles.fieldFeatureInputLength} onChange={(e) => {handleChange("VALIDATION", e.target.value)}}/>
            </div>
            <button className={styles.confirmButton} onClick={handleSubmit}>Confirm</button>
        </form>
    </div>
  )
}

export default TextBox
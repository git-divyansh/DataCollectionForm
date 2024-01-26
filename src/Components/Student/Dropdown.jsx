// This page contains the form related to field type 'DROPDOWN' 

import React, { useState } from "react";
import styles from "./Student.module.css";
import { dataTypes } from '../../Utils';
import { IoIosClose } from "react-icons/io";
import {useDispatch} from "react-redux";
import { changeEntityObject } from '../../Slice/EtitySelectionSlice';

const Dropdown = () => {

  const dispatch = useDispatch();

  const [addInput, setAddInput] = useState("");

  const [data, setData] = useState({
    "TYPE" : "DROPDOWN",
    "NAME" : "",
    "DATATYPE" : "",
    "MANDATORY" : "",
    "FIELDDATA" : [],
    "VALIDATION" : null
});

  const handleChange = (itemname, value) => {
    if(value === "NONE" || value === "") return;

    if(itemname === "FIELDDATA"){

      setData((prev) => {
        const obj = {...prev, [itemname] : [...prev[itemname], value]}
        return obj;
      })

      setAddInput("");
    }
    else{ 
      setData((prev) => {
          const obj = {...prev, [itemname] : value};
          return obj;
      })
    }
  } 

  const handleAddbutton = (e) => {
    e.preventDefault();
    handleChange("FIELDDATA", addInput);
  }

  const handleDeleteFielddata = (id) => {
    setData((prev) => {
      const obj = {...prev, ["FIELDDATA"] : prev["FIELDDATA"].filter((_, index) => index !== id)};
      return obj;
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(changeEntityObject(data));
    console.log(data);
}

  return (
    <div className={styles.dropdownContianer}>
      <form className={styles.textboxFormContainer}>
            <div>
                <label htmlFor="field-name">Field name </label>
                <input id='field-name' type="text" onChange={(e) => {handleChange("NAME", e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="field-data-type">Field data type </label>
                <select name="field-data-type" id="field-data-type" onChange={(e) => {handleChange("DATATYPE", e.target.value)}}>
                    {dataTypes.map((item, id) => {
                        return (
                            <option key={id} value={id === 0 ? "NONE" : item} id={id}>{item}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="field-mandatory">Field mandatory </label>
                    <select name="mandatory" id="field-mandatory" onChange={(e) => {handleChange("MANDATORY", e.target.value)}}>
                        <option value="NONE">--Select--</option>
                        <option value="YES">Yes</option>
                        <option value="NO">No</option>
                    </select>
            </div>
            <div style={{display : "flex"}}>
              <div className={styles.dropDownFielddataConstainer}>
                  <label htmlFor="field-data">Field data </label>
                  <input id='field-data' type="text" value={addInput} onChange={(e) => {setAddInput(e.target.value)}}/>
                  <button onClick={handleAddbutton}>Add</button>
              </div>
            </div>

            <div className={styles.fieldDataContainer} style={{display: "flex", justifyContent : "flex-start"}}>
                {
                  data["FIELDDATA"].length >= 1 ? 
                  data["FIELDDATA"].map((item, id) => {
                    return(
                      <p key={id} className={styles.feilddataElements}>
                        {item} 
                        <IoIosClose 
                          className={styles.dropDownIcons} 
                          onClick={()=>handleDeleteFielddata(id)} />
                        </p>
                    )
                  }) : null
                }
              </div>
            <button className={styles.confirmButton} onClick={handleSubmit}>Confirm</button>
        </form>
    </div>
  );
};

export default Dropdown;

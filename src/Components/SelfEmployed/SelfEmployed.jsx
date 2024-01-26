import React, { useState } from 'react'
import styles from "..//Student/Student.module.css"
import {entityName} from "../../Utils"
import {useSelector, useDispatch} from "react-redux"
import DataCollectionOption from "../Student/DataCollectionOption";
import { changeEntity, resetObject } from '../../Slice/EtitySelectionSlice';
import Table from '../TableView/Table';
import Form from '../CreateForm/Form';
// import styles from "./SelfEmployed.module.css";

const SelfEmployed = () => {
  const disptach = useDispatch();

  const [showAddField, setshowAddField] = useState(false);
  const [showForm, setShowForm] = useState(false);

    const handleReset = () => {
        disptach(resetObject([]));
    }
  const {entity, SELFEMPLOYED} = useSelector((state) => state.entity);
  return (
      <div className={styles.studentContainer}>
         <h1>{entity}</h1>   
        <div className={styles.entityDropdownSelection}>
            <h3>Change Entity : </h3>
            <select name="entity-selection" id="entity-selection" defaultValue={entity} onClick={(e)=>{disptach(changeEntity(e.target.value))}}>
                {entityName.map((item, id) => {
                    return (
                        <option key={id} value={item}>{item}</option>
                    )
                })}
            </select>
            {!showForm ? <div className={styles.addFieldOption}>
                <button onClick={()=>{setshowAddField(!showAddField)}}>Add Field</button>
            </div> : null}    
        </div>
        {showAddField && !showForm ? <DataCollectionOption /> : null}
        {!showForm ? <Table TABLE = {SELFEMPLOYED} /> : null}
        {!showForm ? <div className={styles.createResetButton}>
            <button onClick={() => {setShowForm(!showForm)}}>Create Form</button>
            <button onClick={handleReset}>Reset</button>
        </div> : <Form />}
    </div>
  )
}

export default SelfEmployed
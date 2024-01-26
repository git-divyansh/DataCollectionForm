import React, { useState } from 'react'
import styles from "./Student.module.css"
import {entityName} from "../../Utils"
import {useSelector, useDispatch} from "react-redux"
import DataCollectionOption from "./DataCollectionOption";
import { changeEntity, resetObject } from '../../Slice/EtitySelectionSlice';
import Table from '../TableView/Table';
import Form from '../CreateForm/Form';

const Student = () => {
    const disptach = useDispatch();
    const {entity} = useSelector((state) => state.entity);
    const {STUDENT} = useSelector((state) => state.entity);

    const [showAddField, setshowAddField] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleReset = () => {
        disptach(resetObject([]));
    }
  return (
    <div className={styles.studentContainer}>
        <h1 className={styles.studentContainerHeading}>{entity}</h1>   
        <div className={styles.entityDropdownSelection}>
            <h3>Change Entity : </h3>
            <select name="entity-selection" id="entity-selection" defaultValue={entity} onClick={(e)=>{disptach(changeEntity(e.target.value))}}>
                {entityName.map((item, id) => {
                    return (
                        <option key={id} value={item}>{item}</option>
                    )
                })}
            </select>
            {!showForm ? <div>
                <button className={styles.addFieldOption} onClick={()=>{setshowAddField(!showAddField)}}>Add Field</button>
            </div> : null}    
        </div>
        {showAddField && !showForm ? <DataCollectionOption /> : null}
        {!showForm ? <Table TABLE = {STUDENT} /> : null}
        {!showForm ? <div className={styles.createResetButton}>
            <button onClick={() => {setShowForm(!showForm)}}>Create Form</button>
            <button onClick={handleReset}>Reset</button>
        </div> : <div className={styles.actualFormdiv}><Form /></div>}
    </div>
  )
}

export default Student
import styles from "..//Student/Student.module.css"
import {entityName} from "../../Utils"
import {useSelector, useDispatch} from "react-redux"
import DataCollectionOption from "../Student/DataCollectionOption";
import { changeEntity, resetObject } from '../../Slice/EtitySelectionSlice';
import Table from '../TableView/Table';
import { useState } from "react";

const Buissness = () => {
  const disptach = useDispatch();

  const [showAddField, setshowAddField] = useState(false);

    const handleReset = () => {
        disptach(resetObject([]));
    }

    const {entity, BUISSNESS} = useSelector((state) => state.entity);
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
            <div className={styles.addFieldOption}>
                <button onClick={()=>{setshowAddField(!showAddField)}}>Add Field</button>
            </div>    
        </div>
        {showAddField ? <DataCollectionOption /> : null}
        {<Table TABLE = {BUISSNESS} />}
        <div className={styles.createResetButton}>
            <button>Create Form</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Buissness
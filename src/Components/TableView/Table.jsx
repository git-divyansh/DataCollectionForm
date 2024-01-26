import React, { useState } from 'react'
import styles from "./table.module.css";
import { useDispatch} from "react-redux"
import { fieldFeatures } from '../../Utils';
import { FaRegTrashAlt } from "react-icons/fa";
import { updateEtittyObject } from '../../Slice/EtitySelectionSlice';

const Table = ({TABLE}) => {

    const dispatch = useDispatch();
    
    const [valueToDelete, setDelete] = useState(null);

    const handleDelete = () => {
        const newStudents = TABLE.filter((obj, id) => id !== (valueToDelete-1)); 
        dispatch(updateEtittyObject(newStudents));
    }
  return (
    <div className={styles.tableViewContainer}>
        <h2>Field Table</h2>
        <table className={styles.tableContainer}>
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Field Name</th>
                    <th>Field Data type</th>
                    <th>Field type</th>
                    <th>Field Validation</th>
                    <th>Field Data</th>
                    <th>Field Mandatory</th>
                </tr>
            </thead>
            <tbody>
                    {TABLE.length ? TABLE.map((field, id) => (
                        <tr key={id}>                        
                            <td>{id+1}</td>
                            {
                                fieldFeatures.map((item, id) => {
                                    const value = field[item]??'-';
                                    
                                    const produce = () => {
                                        let idx = 0;
                                        let str = "";
                                        if(field["TYPE"] === "DROPDOWN" && item === "FIELDDATA")
                                            idx = 1;
                                        else if(field["TYPE"] === "DATEPICKER" && item === "VALIDATION"){
                                            idx = 2;
                                            str = value["MINRANGE"] + " to " + value["MAXRANGE"]
                                        }

                                        switch (idx) {
                                            case 1: return <td key={id} >{value.map((x, id) => (<p key={id}>{x}</p>))}</td>;                                        
                                            case 2: return <td key={id} >{str}</td>;                                        
                                            default: return <td key={id}>{value}</td>;
                                               
                                        }
                                    }
                                    return (produce());
                                })
                            }
                        </tr>
                    )) : null}
            </tbody>
        </table>
        <div className={styles.deleteFromTable}>
            <label htmlFor="delete-form-table">Select index for deletion : </label>
            <input type="number" name="" id="delete-form-table" onChange={(e) => setDelete(e.target.value)} />
            <button onClick={handleDelete}><FaRegTrashAlt /></button>
        </div>
    </div>
  )
}

export default Table
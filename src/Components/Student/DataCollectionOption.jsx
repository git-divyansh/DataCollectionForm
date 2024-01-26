import React from 'react'
import {studentFieldOption} from "../../Utils";
import styles from "./Student.module.css"
import TextBox from './TextBox';
import DatePicker from './DatePicker';
import Dropdown from './Dropdown';
import { changeFieldType } from '../../Slice/EtitySelectionSlice';
import {useSelector, useDispatch} from "react-redux";

const DataCollectionOption = () => {

    const dispatch = useDispatch();

    const currFieldType = "" || useSelector((state) => state.entity.currentFieldType);

    const display = () => {
        switch (currFieldType) {
            case studentFieldOption[1]: return <TextBox />;
            case studentFieldOption[2]: return <Dropdown />;
            case studentFieldOption[3]: return <DatePicker />;  
        
            default: return null;
        }
    }

  return (
    <div className={styles.dataFieldContainer}>
        <div className={styles.selectFieldType}>
            <h3>Select field type :</h3>
            <select name="field-type" id="field-type" defaultValue={studentFieldOption[0]} onClick={(e) => dispatch(changeFieldType(e.target.value))}>
                {
                    studentFieldOption.map((item, id) => {
                        return(
                            <option key={id} value={item}>{item}</option>
                        )
                    })
                }
            </select>
        </div>
        <div>
            {display()}
        </div>
    </div>
  )
}

export default DataCollectionOption
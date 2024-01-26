import React from 'react'
import { entityName } from '../../Utils';
import {useDispatch} from "react-redux";
import {changeEntity} from "../../Slice/EtitySelectionSlice"
import styles from "./FirstDisplay.module.css"

const FirstDisplay = () => {

    const dispatch = useDispatch();

    const handleSelectForm = (itemname) => {
        dispatch(changeEntity(itemname));
    }

  return (
    <div className={styles.firstDisplayContiner}>
            {
                entityName.map((item, id) => {
                    
                    return(
                        id === 0 ? null : <div className={styles.firstDisplayContainerElements} key={id}>
                            <h2>{item}</h2>
                            <button className={styles.visitButtonFirstDisplay} onClick={() => handleSelectForm(item)}>Vist</button>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default FirstDisplay
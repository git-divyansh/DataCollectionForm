import React from "react";
import styles from "./Form.module.css";
import { useSelector } from "react-redux";

const Form = () => {
  const { entity } = useSelector((state) => state.entity);
  const entityObject = useSelector((state) => state.entity[entity]);
  
  const inputTypeSelector = (item) => {
    switch (item) {
        case "NUMBER":  return 'number';
        case "DATE" :   return 'date';
        case "STRING" : return 'text'
        default: return 'text';
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }


  return (
    <div className={styles.entityFormContainer}>
      <h2>Form</h2>

      <form action="">
        {entityObject.map((item, id) => {
            if(item["TYPE"] !== 'DROPDOWN'){
                return (
                    <div key={id} className={styles.formElementContainer} style={{backgroundColor: "#bbbcbc", borderRadius : "4px", margin :  "2px"}}>
                    <label className={styles.formLabels} htmlFor={id}>{item["NAME"]} : </label>
                    <input id={id} type={`${inputTypeSelector(item["DATATYPE"])}`} required = {item["MANDATORY"] === "YES"}/>
                    </div>
                );
            }
            else{
                return (
                    <div key={id} className={styles.formElementContainer} style={{backgroundColor: "#bbbcbc", borderRadius : "4px", margin :  "2px"}}>
                        <label htmlFor={id}>{item["NAME"]}</label>
                        <select className={styles.selectFeatureForm} name="dropdown" id={id} required = {item["MANDATORY"] === "YES"}>
                            {
                                item["FIELDDATA"].map((data, id) => (
                                    <option key={id} value={data}>{data}</option>
                                ))
                            }
                        </select>
                    </div>
                )
            }
        })}
        <button onClick={handleSubmit} className={styles.confirmButton}>Send</button>
      </form>
    </div>
  );
};

export default Form;
